import { initialState } from '../../../../src/redux/reducers/alert';
import reducer from '../../../../src/redux/reducers/alert';
import {
  ALERT_POP
} from '../../../../src/redux/actions/alert'

describe('Test alert reducer', ()=> {
  it('should render initial state when state is undifined', () => {
    expect(reducer(undefined, {})).toEqual(initialState)
  })
  it('should render initial state when action is not pass', () => {
    expect(reducer(initialState, {})).toEqual(initialState)
  })

  it('should test ALERT_POP', () => {
    expect(reducer({
      message: 'A random message'
    }, {
      type: ALERT_POP,
      message: 'An other random message'
    })).toEqual({
      message: 'An other random message'
    })
  })
})
