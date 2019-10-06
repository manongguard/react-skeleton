import { createAction } from "redux-actions"

export const clickButton = createAction('CLICK_BUTTON');
export const clearAll = createAction('CLEAR_ALL')

const sagaCall = {
  onClickButton: createAction('ON_CLICK_BUTTON'),
  onClearAll: createAction('ON_CLEAR_ALL'),
}

export default sagaCall