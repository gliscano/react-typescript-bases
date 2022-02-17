import { useState } from "react";

interface Props {
  initialValue?: number
}

interface CounterState {
  counter: number;
  clicks: number;
}

export const CounterBy = ({ initialValue = 10 }: Props) => {
  const [{ counter, clicks }, setCounterState] = useState<CounterState>({
    counter: initialValue,
    clicks: 0,
  });

  const handleClick = (value:number) => {
    setCounterState(({ counter, clicks }) => ({
      counter: counter + value,
      clicks: clicks + 1
    }));
  };

  return (
    <div style={{ margin: '15px'}}>
      <h2> useState </h2>
      <hr />
      <button
        style={{ marginRight: '5px' }}
        onClick={() => handleClick(1)}>
          +1
      </button>
      <button
        style={{ marginRight: '15px' }}
        onClick={() => handleClick(5)}>
          +5
      </button>
      <small style={{ marginRight: '15px' }}>Counter By: {counter}</small>
      <small>Clicks: {clicks}</small>
      <hr />
    </div>
  )
}
