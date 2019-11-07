import { createAction } from "redux-actions"

export const increment = createAction('INCREMENT');
export const decrement = createAction('DECREMENT');
export const incrementAsync = createAction('INCREMENT_ASYNC')

const sagaCall = {
  onIncrement: createAction('ON_INCREMENT'),
  onDecrement: createAction('ON_DECREMENT'),
  onIncrementAsync: createAction('ON_INCREMENT_ASYNC')
}

export default sagaCall