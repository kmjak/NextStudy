'use client';
import { useState } from 'react';

export default function Home() {
  const [message, setMessage] = useState('');

  const login = async () => {
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username: 'user', password: 'pass' }),
    });

    const data = await res.json();
    setMessage(data.message);
  };

  const accessProtected = async () => {
    const res = await fetch('/api/auth/protected');
    const data = await res.json();
    setMessage(data.message);
  };

  const logout = async () => {
    const res = await fetch('/api/auth/logout', { method: 'POST' });
    const data = await res.json();
    setMessage(data.message);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl mb-4">JWT & Cookie 認証デモ</h1>

      <div className="mb-4">
        <button onClick={login} className="px-4 py-2 bg-blue-500 text-white rounded">ログイン</button>
      </div>

      <div className="mb-4">
        <button onClick={accessProtected} className="px-4 py-2 bg-green-500 text-white rounded">保護されたページへアクセス</button>
      </div>

      <div className="mb-4">
        <button onClick={logout} className="px-4 py-2 bg-red-500 text-white rounded">ログアウト</button>
      </div>

      {message && <p>{message}</p>}
    </div>
  );
}