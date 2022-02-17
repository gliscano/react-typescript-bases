import { CounterAction } from "../actions/actions";
import { CounterState } from "../interfaces/interfaces";

export const INITIAL_STATE = {
    counter: 10,
    previous: 15,
    changes: 20
  };

export const counterReducer = (state: CounterState, action: CounterAction): CounterState => {
    switch (action.type) {
      case 'reset':
        return {
          counter: 0,
          changes: 0,
          previous: 0
        }
  
      case 'increaseBy':
        const value = action.payload.value;
        return {
          counter: state.counter + value,
          changes: state.changes + 1,
          previous: state.counter
        };
    
      default:
        return state;
    }
  };