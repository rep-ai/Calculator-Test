// @flow
import React, { PureComponent } from 'react'
import { Text } from 'react-native'

import styles from './styles'

export default class AnswerComponent extends PureComponent {
    props: {
        answer: string,
    }

    render() {
        return (
            <Text style={styles.answer}
                numberOfLines={1}
                adjustsFontSizeToFit={true}>{this.props.answer}</Text>
        )
    }
}
