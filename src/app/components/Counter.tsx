"use client";
import { useState } from "react";

export default function Counter({ start }: { start: number }) {
  const [count, setCount] = useState(start);

  return (
    <div>
      <h3>Counter: {count}</h3>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  );
}
