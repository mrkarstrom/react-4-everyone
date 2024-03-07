import { useState } from 'react';

const Input = () => {
  const [inputVal, setInputVal] = useState('');

  return (
    <div>
      {inputVal && <h3>{inputVal}</h3>}
      <input
        value={inputVal}
        onChange={(e) => {
          if (!e.target.value.includes('t')) {
            setInputVal(e.target.value);
          } else {
            setInputVal((c) => c + 'T');
          }
        }}
      />
    </div>
  );
};

export default Input;
