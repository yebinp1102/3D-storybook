const express = require('express');
const User = require('../models/User');
const router = express.Router();
const jwt = require('jsonwebtoken');

// 회원가입
router.post('/register', async (req, res, next) => {
  try{
    const user = new User(req.body)
    await user.save();
    return res.sendStatus(200);
  }catch(err){
    console.log(err);
    return res.sendStatus(500);
  }
})

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
    console.log(err);
    return res.status(500).send(err);
  }
})

module.exports = router;