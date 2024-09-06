import jwt from 'jsonwebtoken';
import { NextResponse } from 'next/server';
import { serialize } from 'cookie';

const SECRET_KEY = 'your-secret-key';

export async function POST(req) {
  const { username, password } = await req.json();

  if (username === 'user' && password === 'pass') {
    const token = jwt.sign({ userID: '12345' }, SECRET_KEY, { expiresIn: '1h' });

    const cookie = serialize('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 60,
      path: '/',
    });

    const response = NextResponse.json({ message: 'ログイン成功' });
    response.headers.set('Set-Cookie', cookie);
    return response;
  } else {
    return NextResponse.json({ message: '認証失敗' }, { status: 401 });
  }
}