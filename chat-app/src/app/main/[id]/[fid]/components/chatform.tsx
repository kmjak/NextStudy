import { useState } from "react";
import React from "react";
import { sendMsg } from "./sendmessage";

interface ChatFormProps {
    myId: string | string[];
    fId: string | string[];
}

export const ChatForm = ({myId,fId}:ChatFormProps) => {
    const [mId, setMId] = useState(myId.toString());
    const [pId, setPId] = useState(fId.toString());
    const [msg, setMsg] = useState("");
    const handleSendMsg = async () => {
        sendMsg({ from: mId, to: pId, msg: msg });
        setMsg("");
    }
    return (
        <div>
            <input type="text" onChange={(e:React.ChangeEvent<HTMLInputElement>) => setMsg(e.target.value)} value={msg}/>

            <button onClick={handleSendMsg}>Send</button>
        </div>
    );
}