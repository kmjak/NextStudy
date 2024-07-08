export const getWords = async (): Promise<{ id: string, word: string }[]> => {
    const response = await fetch("http://localhost:3001/words");
    return response.json();
}
