// @flow
import type { State, Action } from './flowTypes'
import {
    CALCULATOR_QUESTION_APPEND,
    CALCULATOR_ANSWER_UPDATE,
} from './actionTypes'

const initialState = {
    question: '',
    answer: 0,
}

export default (state: State = initialState, action: Action) => {
    switch (action.type) {
        case CALCULATOR_QUESTION_APPEND:
            return { ...state, question: `${state.question}${action.payload}` }
        case CALCULATOR_ANSWER_UPDATE:
            return { ...state, answer: action.payload }
        default:
            return state
    }
}
