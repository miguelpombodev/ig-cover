import { Request, Response } from 'express';

import User from '../entities/User'

export default class SessionController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { username, password } = request.body;
    const userFind = await User.findOne({ username })

    if (!userFind) {
      return response.status(400).json({ error: 'User or password does not match' })
    }

    if (!userFind.compareHash(password)) {
      return response.status(400).json({ error: 'User or password does not match' })
    }

    return response.json({
      userFind,
      token: userFind.generateToken(),
    })

  }
}
