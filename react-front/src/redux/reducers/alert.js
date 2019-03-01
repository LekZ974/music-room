import { ALERT_POP } from '../actions/alert'

export const initialState = {
  message: ''
}

export default function AlertReducer (state = initialState, action = {}) {
  switch(action.type){
    case ALERT_POP:
      return { message: action.message }
    default:
      return state
  }
}