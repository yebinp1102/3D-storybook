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

app.post('/', (req, res) => {
  console.log(req.body);
  res.json(req.body);
})

app.use('/users', userRouter);


app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send(err.message || 'Error from server');
})


app.listen(3000, () => console.log(`server is running on port ${PORT}`))