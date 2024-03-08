const express = require('express');
const User = require('../models/User');
const router = express.Router();

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

module.exports = router;