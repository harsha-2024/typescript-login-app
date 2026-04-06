import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { createUser, validateUser } from '../services/user.service';

const JWT_SECRET = 'SUPER_SECRET_KEY';

export async function register(req: Request, res: Response) {
  const { email, password } = req.body;
  const user = await createUser(email, password);
  res.status(201).json({ id: user.id, email: user.email });
}

export async function login(req: Request, res: Response) {
  const { email, password } = req.body;
  const user = await validateUser(email, password);
  if (!user) return res.status(401).json({ message: 'Invalid credentials' });
  const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '1h' });
  res.json({ token });
}