import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  function handleAdd() {
    return setCount((c) => c + 1);
  }

  function handleSub() {
    return setCount((c) => c - 1);
  }

  return (
    <div>
      <div className="counter">
        <button onClick={handleAdd}>+</button>
        {count}
        <button onClick={handleSub}>-</button>
      </div>
    </div>
  );
}
