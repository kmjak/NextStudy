"use client";

import { useState } from 'react';
import { ChildComponent } from './compnents/child';

export default function ParentComponent() {
  const [data, setData] = useState(null);

  const handleDataFromChild = (childData: any) => {
    setData(childData);
  };

  return (
    <div>
      <h1>親コンポーネント</h1>
      <p>子からのデータ: {data}</p>
      <ChildComponent onDataPass={handleDataFromChild} />
    </div>
  );
}