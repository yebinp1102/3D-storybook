const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRouter = require('./routes/users');
const PORT = 3000;

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));


mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Mongo DB is connected.'))
  .catch((err) => console.error(err));

  // 비동기 요청으로 발생한 에러 catch 하고 서버가 다운 되지 않게 후처리
app.get('*', (req, res, next) => {
  setImmediate(() => next (new Error('woops')))
})

app.use('/users', userRouter);

app.post('/', (req, res) => {
  res.send('Hello world');
})

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send(err.message || 'Error from server');
})


app.listen(3000, () => console.log(`server is running on port ${PORT}`))