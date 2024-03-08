const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    trim: true,
    unique: true,
    require: true
  },
  password: {
    type: String,
    require: true
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  cart: {
    type: Array,
    default: []
  },
  order: {
    type: [String],
    default: []
  },
  address: {
    type: {
      address1: String,
      address2: String,
      address3: String
    },
    default: {
      address1: '',
      address2: '',
      address3: ''
    },
  }
})

// DB에 저장되기 전에 수행되는 트랜잭션. 유저가 입력한 비밀번호를 해시화 한다.
userSchema.pre('save', async function(next){
  let user = this;
  // password 값을 수정할 때만 함수 호출 
  if(user.isModified('password')){
    const salt = await bcrypt.genSalt(10); // random한 salt 생성
    const hash = await bcrypt.hash(user.password, salt);
    user.password = hash;
  }

  next();
})

const User = mongoose.model("User", userSchema);

module.exports = User;