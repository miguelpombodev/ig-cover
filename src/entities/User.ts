import { Schema, model, Document } from 'mongoose';
import { hash } from 'bcryptjs';

import IUserSchemaProps from '../interfaces/IUserSchema'

const userSchema: Schema = new Schema({
  name: {
    type: String,
    required: true
  },
  nickname: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  avatar: { type: String, default: '0.png' },
  following: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],
  followers: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],
}, {
  timestamps: true,
});

userSchema.pre<IUserSchemaProps>('save', async function (next) {
  if (this.isModified(this.password)) {
    this.password = await hash(this.password, 8);
  }
})

export default model<IUserSchemaProps>('User', userSchema);
