import { StyleSheet, Dimensions, Platform } from 'react-native'

export const colors = {
    background: '#000',
    grey: '#111',
}

const touchableHighlightSize = Dimensions.get('window').width / 4

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        backgroundColor: colors.background,
    },

    question: {
        fontSize: 36,
        color: 'white',
        width: '100%',
        textAlign: 'right',
        paddingHorizontal: 24,
    },

    answer: {
        // adjustsFontSizeToFit is an iOS only property
        height: Platform.OS === 'android' ? 44 : 144,
        fontSize: Platform.OS === 'android' ? 36 : 144,
        color: 'white',
        textAlign: 'right',
        width: '100%',
        paddingHorizontal: 24,
    },

    buttonContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },

    touchableHighlight: {
        width: touchableHighlightSize,
        height: touchableHighlightSize,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.background,
    },

    touchableHighlightText: {
        color: 'white',
        fontSize: 64,
    }
})
