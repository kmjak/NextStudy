"use client"
import React, { useState } from "react";
import { auth, googleProvider } from "../lib/firebase";
import { signInWithPopup, onAuthStateChanged, User } from "firebase/auth";

export const LoginBtn = () => {
  const [user, setUser] = useState<User | null>(null);

  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  const signInWithGoogle = async () => {
    await signInWithPopup(auth, googleProvider);
  };

  return (
    <div>
      {user ? (
        <div>
          <p>{user.displayName}</p>
          <button onClick={() => auth.signOut()}>Sign Out</button>
        </div>
      ) : (
        <button onClick={signInWithGoogle}>Sign In with Google</button>
      )}
    </div>
  );
}