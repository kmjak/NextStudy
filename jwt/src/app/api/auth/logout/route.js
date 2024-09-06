import { NextResponse } from 'next/server';
import { serialize } from 'cookie';

export async function POST() {
  const cookie = serialize('token', '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: -1, // クッキー削除
    path: '/',
  });

  const response = NextResponse.json({ message: 'ログアウトしました' });
  response.headers.set('Set-Cookie', cookie);
  return response;
}