"use client";

import { useParams } from 'next/navigation';
import { Partner } from './components/partner';
import { Chat } from './components/chat';
import { ChatForm } from './components/chatform';

export default function Main() {
    const params = useParams();
    const myId = params.id;
    const fId = params.fid;
    const IDs = {myId: myId, fId: fId};

    return (
        <main>
            <h1>Chat App</h1>
            <Partner myId={IDs.myId} fId={IDs.fId} />
            <Chat myId={IDs.myId} fId={IDs.fId} />
            <ChatForm myId={IDs.myId} fId={IDs.fId} />
            <a href={`/main/${IDs.myId}`}>back</a>
        </main>
    );
}