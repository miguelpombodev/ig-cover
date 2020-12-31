import { Request, Response } from 'express'
import User from '../entities/User';

export default class UserController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { username, ...rest } = request.body;
    const userFind = await User.findOne({ username });

    if (userFind) {
      return response.status(400).json({ error: 'User and password does not match' })
    }

    const userCreated = await User.create({ username, ...rest });

    return response.json(userCreated)
  }

}
