import { Router } from 'express';

const userRouter = Router();

import User from '../entities/User'

userRouter.post('/', async (request, response) => {
  const body = request.body;

  const newUser = await User.create(body)

  return response.json(newUser)
});

export default userRouter;
