import { Schema, model } from 'mongoose';
import { hash, compare } from 'bcryptjs';
import jwt from 'jsonwebtoken'

import IUserSchemaProps from '../interfaces/IUserSchema'

const userSchema: Schema = new Schema({
  name: {
    type: String,
    required: true
  },
  username: {
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
  posts: [{
    type: Schema.Types.ObjectId,
    ref: 'Posts'
  }],
}, {
  timestamps: true,
});

userSchema.pre<IUserSchemaProps>('save', async function (next) {
  if (!this.isModified(this.password)) {
    this.password = await hash(this.password, 8);
  }

  next();
})

userSchema.methods = {
  generateToken(): string {
    return jwt.sign({ id: this.id }, 'SECRETPAY', {
      expiresIn: '1d'
    })
  },

  compareHash(password: string): Promise<Boolean> {
    return compare(password, this.password)
  }
}


export default model<IUserSchemaProps>('User', userSchema);
