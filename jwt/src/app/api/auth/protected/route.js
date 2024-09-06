import jwt from 'jsonwebtoken';
import { NextResponse } from 'next/server';

const SECRET_KEY = 'your-secret-key';

export async function GET(req) {
  const token = req.cookies.get('token')?.value;

  if (!token) {
    return NextResponse.json({ message: 'トークンがありません' }, { status: 403 });
  }

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    return NextResponse.json({ message: `認証成功! ユーザーID: ${decoded.userID}` });
  } catch (err) {
    return NextResponse.json({ message: 'トークンが無効です' }, { status: 401 });
  }
}