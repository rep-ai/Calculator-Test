// @flow
export type ActionType = 'CALCULATOR_QUESTION_APPEND'
    | 'CALCULATOR_ANSWER_UPDATE'

export type Action = {
    type: ActionType,
    payload: void | number | string,
}

export type State = {
    question: string,
    answer: number,
}
