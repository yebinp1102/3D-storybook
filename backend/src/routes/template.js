const express = require('express');
const Template = require('../models/Template');
const router = express.Router();
const multer = require('multer');
const auth = require('../middleware/auth');
const dotenv = require('dotenv');

dotenv.config();

const S3 = require('aws-sdk/clients/s3')


const BucketName = process.env.AWS_BUCKET_NAME;
const region = process.env.AWS_REGION;
const accessKeyId = process.env.AWS_ACCESS_KEY;
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;

// AWS S3 설정
const s3 = new S3({
  accessKeyId,
  secretAccessKey,
  region,
});

const storage = multer.memoryStorage();
const upload = multer({ storage })

const uploadToS3 = (file) => {
  console.log(file);
  const uploadParams = {
    Bucket: BucketName,
    Key: file.originalname,
    Body: file.buffer,
    ContentType: file.mimetype,
    ACL: 'public-read' 
  };

  return s3.upload(uploadParams).promise()
}

// template 생성
router.post('/create', async (req, res) => {
  try{
    const template = new Template(req.body);
    await template.save();
    return res.status(200).json({message: '성공적으로 생성했습니다.'});
  }catch(err){
    return res.status(500).json({message: '생성에 실패했습니다.'});
  }
})

// aws s3에 이미지 파일 업로드
router.post('/image', upload.single('image') , auth, async (req, res) => {
  try{
    // 관리자인지 확인
    if(!req.user.isAdmin) return res.status(400).json({message: '작성 권한이 없는 사용자입니다.'})

    const image = req.file;

    if(!image) return res.status(400).json({message: '이미지를 업로드 하지 않았습니다.'});

    const result = await uploadToS3(image);
    return res.status(200).json({location: result.Location});
  }catch(err){
    return res.status(500)
  }
})

router.get('/', async (req, res) => {
  try{
    const templates = await Template.find()
    return res.status(200).json(templates)
  }catch(err){
    console.log(err);
  }
})

router.get('/:id', auth, async (req, res) => {
  const type = req.query.type;
  const templateId = req.params.id.split(',');
  try{
    if(templateId){
      const template = await Template.find({ _id: {$in: templateId} });
      return res.status(200).send(template);
    }else return res.status(200).send([])
  }catch(err){
    console.log(err);
  }
})

module.exports = router;