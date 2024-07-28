let i = 1;
export function ChildComponent({ onDataPass }: { onDataPass: (data: string) => void }) {
  const sendDataToParent = () => {
    const data = i.toString();
    i++;
    onDataPass(data);
  };

  return (
    <div>
      <h2>子コンポーネント</h2>
      <button onClick={sendDataToParent}>データを親に送信</button>
    </div>
  );
}