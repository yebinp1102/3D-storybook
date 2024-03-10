const jwt = require('jsonwebtoken');
const User = require('../models/User');

let auth = async (req, res, next) => {
  // 토큰을 header에서 참조
  const authHeader = req.headers['authorization'];
  let token;
  if(authHeader){
    token = authHeader.split(' ')[1];
  }else{
    return res.sendStatus(401);
  }

  try{
    // token이 유효한지 확인
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findOne({"_id": decoded.userId});
    if(!user){
      return res.status(400).send('없는 유저 입니다.')
    }
    req.user = user;
    next();
  }catch(err){
    next(err);
  }
}

module.exports = auth;