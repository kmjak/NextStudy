"use client";

import React, { useEffect, useState } from 'react';
import { getAllUsers } from '@/api';

interface PartnerProps {
    myId: string | string[];
    fId: string | string[];
}

export const Partner: React.FC<PartnerProps> = ({ myId, fId }) => {
    const [user, setUser] = useState<{ id: string; name: string; pass: string } | null>(null);

    useEffect(() => {
        const getUser = async () => {
            try {
                const users = await getAllUsers();
                const foundUser = users.find((u: { id: string }) => u.id === fId);
                if (foundUser) {
                    setUser(foundUser);
                }
            } catch (error) {
                console.error('Error fetching user:', error);
            }
        };

        getUser();
    }, [fId]);
    return (
        <div>
            <p>Friend: {user ? user.name : 'Loading...'}</p>
        </div>
    );
};
