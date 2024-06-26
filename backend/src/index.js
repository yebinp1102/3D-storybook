const express = require('express');
const cors = require('cors');
const path = require('path')
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRouter = require('./routes/users');
const templateRouter = require('./routes/template');
const PORT = 3000;

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));


mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Mongo DB is connected.'))
  .catch((err) => console.error(err));

// 배포 테스트 코드
app.get("/", (req, res) => {
  res.json("Deployment success!");
})

app.post('/', (req, res) => {
  console.log(req.body);
  res.json(req.body);
})

app.use('/users', userRouter);
app.use('/template', templateRouter);


app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send(err.message || 'Error from server');
})

// uploads 디렉토리에 있는 이미지 파일을 제공하기 위한 미들웨어
app.use(express.static('/uploads'))

app.listen(3000, () => console.log(`server is running on port ${PORT}`))