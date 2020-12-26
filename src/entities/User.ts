import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: String,
  nickname: String,
  password: String,
  email: String,
  avatar: { type: String, default: '0.png' },
  following: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  followers: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
}, {
  timestamps: true,
});

export default mongoose.model('User', userSchema);
