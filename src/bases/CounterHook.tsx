import { useCounter } from '../hooks/useCounter';

export const CounterHook = () => {
  const {
    elementToAnimate,
    counter,
    handleClick,
  } = useCounter({
    maxCount: 10,
  });
  
  return (
    <div style={{ margin: '15px'}}>
      <h2> Custom Hooks </h2>
      <hr />
      <button
        style={{ marginRight: '15px' }}
        onClick={handleClick}
      >
        +1
      </button>
      <small style={{ marginRight: '5px' }}> Counter useCounter: </small>
      <small ref={ elementToAnimate }>{counter}</small>
      <hr />
    </div>
  )
}
