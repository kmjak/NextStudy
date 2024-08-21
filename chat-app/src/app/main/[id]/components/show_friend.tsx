"use client";
import { getAllUsers } from "@/api";

interface MyIdProps {
    myId: string;
}

export const Friend = async ({myId}:MyIdProps) => {
    const users = await getAllUsers();
    return (
        <ul>
            {users.map((user: { id: string; name: string; }) => {
                if (user.id !== myId) {
                    return (
                        <p key={user.id}><a href={`/main/${myId}/${user.id}`}>
                            {user.name}
                        </a></p>
                    );
                }
            })}
        </ul>
    );
}