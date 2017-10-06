// @flow
import React, { PureComponent } from 'react'
import { View, StatusBar } from 'react-native'

import styles from './styles'
import QuestionComponent from './QuestionComponent'
import AnswerComponent from './AnswerComponent'
import ButtonComponent from './ButtonComponent'

export default class Calculator extends PureComponent {
    props: {
        calculator: {
            answer: number,
            question: string,
        },
        answerUpdate: (payload: number) => void,
        questionAppend: (payload: string) => void,
    }

    buttonValues: mixed[] = [
        7, 8, 9, '÷',
        4, 5, 6, '×',
        1, 2, 3, '−',
        0, '·', '=', '+'
    ]

    valueMap: {
        [key: string]: string
    } = {
        ['÷']: '/',
        ['×']: '*',
        ['−']: '-',
        ['+']: '+',
        ['·']: '.',
    }

    evalQuestion = (question) => {
        this.props.answerUpdate(
            eval(
                Object.keys(this.valueMap).reduce(
                    (accum: string, key: string) => (
                        accum.split(key).join(this.valueMap[key])
                    ), question
                )
            ) || 0
        )
    }

    handleEquals = () => {
        const { calculator: { question } } = this.props

        // NOTE: Handles questions that end with invalid values such
        // as "." or "/" that would make the eval throw an error.
        if (Object.keys(this.valueMap)
            .includes(question[question.length - 2])) {
            this.evalQuestion(question.substring(0, question.length - 2))
        } else {
            this.evalQuestion(question)
        }
    }

    handlePress = (value: mixed) => () => {
        const { questionAppend } = this.props

        if (value === '=') {
            this.handleEquals()
        } else if (Object.keys(this.valueMap).includes(value)) {
            questionAppend(` ${value} `)
        } else {
            questionAppend(value)
        }
    }

    render() {
        const {
            calculator: {
                answer,
                question,
            },
        } = this.props

        return (
            <View style={styles.container}>
                <StatusBar
                    backgroundColor="transparent"
                    barStyle="light-content"
                />
                
                <QuestionComponent question={question} />
                <AnswerComponent answer={answer} />

                <View style={styles.buttonContainer}>
                    {this.buttonValues.map((title: mixed) => (
                        <ButtonComponent
                            key={title.toString()}
                            onPress={this.handlePress(title)}
                            title={title}
                        />
                    ))}
                </View>
            </View>
        )
    }
}
