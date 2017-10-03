// @flow
import React, { Component } from 'react'
import { Text, TouchableHighlight } from 'react-native'

import styles, { colors } from './styles'

export default class ButtonComponent extends Component {
    props: {
        onPress: () => void,
        title: string,
        style?: *,
        textStyle?: *,
    }

    render() {
        const { style, textStyle } = this.props

        return (
            <TouchableHighlight
                activeOpacity={0.8}
                style={style || styles.touchableHighlight}
                underlayColor={colors.grey}
                onPress={this.props.onPress}>
                <Text style={textStyle || styles.touchableHighlightText}>
                    {this.props.title}</Text>
            </TouchableHighlight>
        )
    }
}
