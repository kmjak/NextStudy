import { useEffect, useState } from 'react';
import { getMessages } from '@/api';

interface IdProps {
    myId: string | string[];
    fId: string | string[];
}

export const Chat = ({ myId, fId }: IdProps) => {
    const [messages, setMessages] = useState<any[]>([]);

    useEffect(() => {
        const fetchMessages = async () => {
            try {
                const msgs = await getMessages();
                setMessages(msgs);
            } catch (error) {
                console.error('Error fetching messages:', error);
            }
        };

        fetchMessages();
    }, []);

    const mId = Array.isArray(myId) ? myId.join(',') : myId.toString();
    const pId = Array.isArray(fId) ? fId.join(',') : fId.toString();

    return (
        <div>
            {messages.map((msg, index) => {
                const key = `msg_${index}`;
                if ((msg.to === mId || msg.to === pId) && (msg.from === mId || msg.from === pId)) {
                    return msg.from === mId ? <p key={key}>You: {msg.msg}</p> : <p key={key}>Friend: {msg.msg}</p>;
                }
                return null;
            })}
        </div>
    );
};
