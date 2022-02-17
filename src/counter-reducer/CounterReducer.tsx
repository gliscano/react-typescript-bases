import { useReducer } from "react";
import { doReset, doIncreaseBy } from './actions/actions';
import { counterReducer, INITIAL_STATE } from "./reducer";

export const CounterReducerComponent = () => {
  const [counterState, dispatch] = useReducer(counterReducer, INITIAL_STATE)

  const handleReset = () => {
    dispatch( doReset() );
  };

  const handleIncrease = (value: number) => {
    dispatch( doIncreaseBy(value) );
  };

  return (
    <div style={{ margin: '15px'}}>
      <h2> Reducers </h2>
      <hr />
      <button
        style={{ marginRight: '5px' }}
        onClick={() => handleIncrease(1)}
      >
        +1
      </button>
      <button
        style={{ marginRight: '15px' }}
        onClick={handleReset}
      >
          Reset
      </button>
      <small>
        { JSON.stringify(counterState) }
      </small>
    </div>
  )
}
