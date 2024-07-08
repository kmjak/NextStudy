"use client"

import { getWords } from "@/api";
import { useState, useEffect } from "react";
import React from "react";

export const Form = () => {
    const [value, setValue] = useState<string>("");
    const [missType, setMissType] = useState<number>(0);
    const [randomWord, setRandomWord] = useState<{ id: string, word: string } | null>(null);
    const [points, setPoints] = useState<number>(0);

    const fetchRandomWord = async () => {
        try {
            const wordsData = await getWords();
            if (Array.isArray(wordsData) && wordsData.length > 0) {
                const randomIndex = Math.floor(Math.random() * wordsData.length);
                setRandomWord(wordsData[randomIndex]);
                setValue(""); 
            }
        } catch (error) {
            console.error("Error fetching words:", error);
        }
    };

    useEffect(() => {
        fetchRandomWord();
    }, []);

    const handleCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;
        if (randomWord && randomWord.word.startsWith(inputValue)) {
            setValue(inputValue);
            if (inputValue === randomWord.word) {
                setPoints(prevPoints => prevPoints + 1);
                fetchRandomWord();
            }
        }else{
            setMissType(missType + 1);
        }
    };

    return (
        <div>
            <input
                type="text"
                value={value}
                onChange={handleCheck}
            />
            {randomWord && (
                <div>
                    <p>Random Word: {randomWord.word}</p>
                </div>
            )}
            <div>
                <p>Points: {points}</p>
            </div>
            <div>
                <p>Miss Type: {missType}</p>
            </div>
        </div>
    );
};
