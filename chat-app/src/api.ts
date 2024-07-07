export const getAllUsers = async () => {
    const res = await fetch("http://localhost:3001/users");
    return await res.json();
}

export const registerUser = async (user: { id: string; name: string; pass: string; }) => {
    await fetch("http://localhost:3001/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    });
}
export const getMessages = async () => {
    const res = await fetch(`http://localhost:3002/msgs`);
    return await res.json();
}