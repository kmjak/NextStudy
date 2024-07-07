export const sendMsg = async (msg: { from: string; to: string; msg: string; }) => {
    await fetch("http://localhost:3002/msgs", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(msg)
    });
}