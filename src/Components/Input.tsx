import { useState } from 'react';

const Input = () => {
  const [inputVal, setInputVal] = useState('');

  return (
    <div>
      <input
        value={inputVal}
        onChange={(e) => {
          if (!e.target.value.includes('t')) {
            setInputVal(e.target.value);
          }
        }}
      />
    </div>
  );
};

export default Input;
