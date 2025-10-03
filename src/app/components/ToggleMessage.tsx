"use client";
import { useState } from "react";

export default function ToggleMessage() {
  const [show, setShow] = useState(true);

  return (
    <div>
      <button onClick={() => setShow(!show)}>Toggle Message</button>
      {show ? <p>Hello! This is visible.</p> : <p>Message is hidden.</p>}
    </div>
  );
}
