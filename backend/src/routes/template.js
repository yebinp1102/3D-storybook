const express = require('express');
const Template = require('../models/Template');
const router = express.Router();
const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb){
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb){
    cb(null, `${Date.now()}_${file.originalname}`)
  }
})
const upload = multer({ storage: storage }).single('file');

// template 생성
router.post('/create', async (req, res) => {
  try{
    const template = new Template(req.body);
    template.save();
    return res.sendStatus(200);
  }catch(err){
    console.log(err);
  }
})

router.post('/image', async (req, res) => {
  try{
    upload(req, res, err => {
      if(err) return res.sendStatus(500).send(err);
      return res.json({fileName: res.req.file.filename})
    })
  }catch(err){
    console.log(err);
  }
})

router.get('/', async (req, res) => {
  // populate: 해당 데이터의 모든 정보를 가져옴

  try{
    const templates = await Template.find()
    
    return res.status(200).json(templates)
  }catch(err){
    console.log(err);
  }
})

module.exports = router;