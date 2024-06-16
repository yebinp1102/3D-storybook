const express = require('express');
const User = require('../models/User');
const router = express.Router();
const jwt = require('jsonwebtoken');
const auth = require('../middleware/auth');
const async = require('async');
const Template = require('../models/Template')

router.get('/auth', auth, async (req, res, next) => {
  return res.json({
    id: req.user._id,
    name: req.user.name,
    email: req.user.email,
    isAdmin: req.user.isAdmin,
    cart: req.user.cart,
    order: req.user.order,
  })
})

// 회원가입
router.post('/register', async (req, res) => {
  try{
    const user = new User(req.body);
    await user.save();
    return res.sendStatus(200);
  }catch(err){
    return res.sendStatus(500);
  }
})

// 로그인
router.post('/login', async(req, res) => {
  try{
    const user = await User.findOne({email: req.body.email});
    if(!user) return res.status(400).send("해당 이메일로 가입한 유저가 없습니다.");

    // 비밀번호 확인
    const isMatch = await user.comparePassword(req.body.password);
    if(!isMatch) return res.status(400).send("비밀번호가 일치하지 않습니다.");

    const payload = {
      // toHexString: mongoDB의 ObjectId값을 string으로 변경
      userId: user._id.toHexString()
    }

    // token 생성
    // token의 유효기간은 12시간
    const accessToken = jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: '12h'});

    // 클라이언트에 유저 정보를 보낼 때는 비밀번호는 제외
    const userData = {...user._doc}
    delete userData.password;

    return res.status(200).json({user: userData, accessToken})
  }catch(err){
    return res.status(500).send(err);
  }
})

// 카트에 템플릿 넣기
router.post('/addToCart', auth, async(req, res) => {
  const {id} = req.body;
  try{
    const userInfo = await User.findOne({_id: req.user._id});

    // 장바구니에 이미 상품이 있는지 없는지 확인
    let duplicate = false;
    userInfo.cart.forEach(item => {
      if(item.id == id) duplicate = true;

    })

    // 이미 장바구니에 상품이 있는 경우
    if(duplicate) throw Error;

    // 장바구니에 상품 담기
    await User.findOneAndUpdate(
      {_id: req.user._id},
      {
        $push: { cart: { id } }
      },
      {new: true}
    )
    

    return res.sendStatus(200);
  }catch(err){
    return res.status(500).send({message: '이미 저장된 템플릿입니다.'});
  }
})

// 카트에서 템플릿 삭제하기
router.delete('/deleteFromCart', auth, async (req, res) => {
  try{
    const userInfo = await User.findOneAndUpdate(
      {_id: req.user._id},
      {
        $pull : { "cart" : {"id" : req.query.id} }
      },
      {new: true}
    )
    return res.sendStatus(200);
  }catch(err){
    return res.status(500)
  }
})

// 결제하고 결제 정보 저장하기
router.post('/payment', auth, async (req, res) => {

  // user의 order 필드에 결제 정보 보여주기
  let history = [];
  let transactionData = {};

  req.body.cart.forEach(item => {
    history.push({
      dateOfPurchase: new Date().toISOString(),
      title: item.title,
      id: item._id,
      price: item.price,
      paymentId: crypto.randomUUID(), // 랜덤한 구매 id 부여
    })
  })

  transactionData.user = {
    id: req.user._id,
    name: req.body.name,
    email: req.body.email
  }

  transactionData.product = history;

  await User.findOneAndUpdate(
    {_id: req.user._id},
    { $push: { order: transactionData }, $set: {cart: []} },
    {new: true}
  )

  async.eachSeries(transactionData.product, async (item) => {
    await Template.updateOne(
      {_id: item.id},
      { $inc: { "sold" : 1 } }
    )
  }, (err) => {
    if(err) return res.status(500).send({message: '성공적으로 구매 완료했습니다.'})
    return res.status(200).send({message: '구매하는데 실패했습니다. 다시 시도해주세요.'})
  })

})

module.exports = router;