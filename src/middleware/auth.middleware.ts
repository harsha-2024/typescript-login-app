import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const JWT_SECRET = 'SUPER_SECRET_KEY';

export function authenticate(req: Request, res: Response, next: NextFunction) {
  const header = req.headers.authorization;
  if (!header) return res.sendStatus(401);
  try {
    const payload = jwt.verify(header.split(' ')[1], JWT_SECRET);
    (req as any).user = payload;
    next();
  } catch {
    res.sendStatus(401);
  }
}