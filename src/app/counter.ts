// counter.ts
import { Action, State } from '@ngrx/store';

/**
 * Actions
 */
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';
export const LOAD = 'LOAD';



export const initialState = {
  count: 0,
  load: false
};

/**
 * Reducer
 * @param state 
 * @param action 
 */
export function counterReducer(state = initialState, action: Action) {
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + 1, load : state.load = false
      };

    case DECREMENT:
       return { count: state.count - 1, load : state.load = false
      };
    case RESET:
      return initialState;

    case LOAD:
    return { count: state.count = 0 , load : state.load = true
    };

    default:
      return state;
  }
}
