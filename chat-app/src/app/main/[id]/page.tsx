"use client";

import { useParams } from 'next/navigation';
import { Friend } from "./components/show_friend";


export default function Main() {
    const params = useParams();
    const myId = params.id;
  return (
    <main>
        <h1>Chat App</h1>
        <Friend myId={myId.toString()}/>
        <a href="/">log out</a>
    </main>
  );
}
