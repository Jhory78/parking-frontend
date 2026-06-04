import { AuthUser } from '../models/auth.model';

export function decodeJwt(token: string): AuthUser | null {
  try {
    const payload = token.split('.')[1];
    return JSON.parse(atob(payload)) as AuthUser;
  } catch {
    return null;
  }
}

export function isTokenExpired(token: string): boolean {
  const decoded = decodeJwt(token);
  if (!decoded || !(decoded as any)['exp']) return true;
  return Date.now() >= (decoded as any)['exp'] * 1000;
}
