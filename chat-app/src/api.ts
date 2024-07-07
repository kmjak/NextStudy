export const getAllUsers = async () => {
    const response = await fetch("http://localhost:3001/users");
    return await response.json();
}