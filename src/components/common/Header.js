import React from 'react';
import { Text, View } from 'react-native'

const styles = {
    textStyle: {
        fontSize: 22,
        color: "black"
    },
    viewStyle: {
        backgroundColor: '#F8F8F8',
        alignItems: "center",
        justifyContent: "center",
        height: 60,
        paddingTop: 8,
        marginBottom: 8,
        shadowColor: "#000",
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        shadowRaduis: 2,
        elevation: 2,
        position: "relative",
    }
}

const Header = ({title}) => {
    const { textStyle, viewStyle } = styles
    return (
    <View style={ viewStyle }>
     <Text style={ textStyle }>{title}</Text>
     </View>
    )
}

export { Header };