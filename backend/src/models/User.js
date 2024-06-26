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
    type: Array,
    default: []
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

// 
userSchema.methods.comparePassword = async function(plainPassword){
  // this는 DB에 저장된 유저 정보를 참조
  let user = this; 

  // compare 메서드는 불리언 타입을 반환
  const match = await bcrypt.compare(plainPassword, user.password);
  return match
}

const User = mongoose.model("User", userSchema);

module.exports = User;