// @flow
import React, { PureComponent } from 'react'
import { Text } from 'react-native'

import styles from './styles'

export default class QuestionComponent extends PureComponent {
    props: {
        question: string,
    }

    render() {
        return (
            <Text style={styles.question}
                numberOfLines={2}
                ellipsizeMode={'tail'}>{this.props.question}</Text>
        )
    }
}
