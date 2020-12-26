import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
  picture: String,
  description: String,
  comments: [{
    comment: String,
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
  }],
  likes: Number,
});

export default mongoose.model('Post', postSchema);
