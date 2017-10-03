// @flow
import { connect } from 'react-redux'
import Calculator from './Calculator'

import { questionAppend, answerUpdate } from './actions'
import { Action } from './flowTypes'

export default connect(
    ({ calculator }) => ({ calculator }),
    (dispatch: (action: Action) => void) => ({
        questionAppend: (payload: string) => dispatch(questionAppend(payload)),
        answerUpdate: (payload: number) => dispatch(answerUpdate(payload)),
    })
)(Calculator)
