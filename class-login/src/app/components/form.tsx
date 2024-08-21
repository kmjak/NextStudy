"use client";
import { useUser } from '@/class/user';

export const Form = () => {
  const user = useUser();

  return (
    <div>
      <input
        type="text"
        placeholder="ユーザー名"
        onChange={(e) => user.setName(e.target.value)}
      />
      <input
        type="password"
        placeholder="パスワード"
        onChange={(e) => user.setPass(e.target.value)}
      />
      <button onClick={() => alert(user.login() ? "ログイン成功" : "ログイン失敗")}>
        ログイン
      </button>
    </div>
  );
};