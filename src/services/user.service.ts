import { User } from '../models/user.model';
import bcrypt from 'bcryptjs';
import crypto from 'crypto';

const users: User[] = [];

export async function createUser(email: string, password: string): Promise<User> {
  const passwordHash = await bcrypt.hash(password, 10);
  const user: User = { id: crypto.randomUUID(), email, passwordHash };
  users.push(user);
  return user;
}

export async function validateUser(email: string, password: string): Promise<User | null> {
  const user = users.find(u => u.email === email);
  if (!user) return null;
  const valid = await bcrypt.compare(password, user.passwordHash);
  return valid ? user : null;
}