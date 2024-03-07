import { useState } from 'react';
import TextBlock from './TextBlock';

const Accordion = () => {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <div>
      {isToggled && <TextBlock />}
      {/* {isToggled ? <TextBlock /> : null} */}
      <button onClick={() => setIsToggled(!isToggled)}>
        {isToggled ? <span>Close</span> : <span>Open</span>}
      </button>
    </div>
  );
};

export default Accordion;
