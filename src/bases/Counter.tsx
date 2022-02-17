import { useState } from "react";

interface Props {
  initialValue?: number
}

export const Counter = ({ initialValue }: Props) => {
  const [counter, setCounter] = useState(initialValue);

  const handleClick = () => {
    setCounter((prev = 0) => prev + 1);
  };

  return (
    <div style={{ margin: '15px'}}>
      <h2> useState </h2>
      <hr />
      <button
        onClick={handleClick}
        style={{ marginRight: '15px' }}
      >
        +1
      </button>
      <small> Counter: {counter} </small>
      <hr />
    </div>
  )
}
