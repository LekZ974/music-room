import { ALERT_POP } from '../actions/alert'

export default alertReducer = (state = {} , action) => {
  switch(action.type){
    case ALERT_POP:
      return { message: action.message }
    default:
      return state
  }
}