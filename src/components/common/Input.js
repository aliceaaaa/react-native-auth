import React from 'react';
import { TextInput, View, Text } from 'react-native';

const styles = {
    labelStyle:{
        fontSize: 18,
        paddingLeft: 20,
        flex: 1
    },
    inputStyle:{
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        lineHeight: 23,
        fontSize: 18,
        flex:2
    },
    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: "row",
        alignItems: "center", 
        width: 100
    }
}


const Input = ({label, value, onChangeText, placeholder, secureTextEntry }) => {
    const { inputStyle, labelStyle, containerStyle } = styles;
    return(
    <View style={ containerStyle }>
        <Text style={ labelStyle }>{label}</Text>
        <TextInput 
        secureTextEntry={ secureTextEntry }
        placeholder={ placeholder }
        autoCorrect={ false }
        value={value}
        onChangeText={ onChangeText }
        style={ inputStyle }
        >
        </TextInput>    
    </View>
    )
}

export { Input }