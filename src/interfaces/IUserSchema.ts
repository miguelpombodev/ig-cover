import { Document } from 'mongoose'

interface IUserSchemaProps extends Document {
  name: string,
  nickname: string,
  password: string,
  email: string,
  avatar: string,
  following: [string],
  followers: [string],
  posts: [string],
  generateToken(): string,
  compareHash(password: string): boolean,
}

export default IUserSchemaProps
