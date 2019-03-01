import { ALERT_POP } from "../../../../src/redux/actions/alert"
import * as actions from "../../../../src/redux/actions/alert"

describe('test alert action', ()=>{
  it('should test alert function', ()=>{
    expect(actions.alert()).toEqual({type:ALERT_POP})
  })
})
