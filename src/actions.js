// @flow
import type { Action } from './flowTypes'
import {
    CALCULATOR_QUESTION_APPEND,
    CALCULATOR_ANSWER_UPDATE,
} from './actionTypes'

export const questionAppend = (payload: string): Action => ({
    type: CALCULATOR_QUESTION_APPEND,
    payload,
})

export const answerUpdate = (payload: number): Action => ({
    type: CALCULATOR_ANSWER_UPDATE,
    payload,
})
