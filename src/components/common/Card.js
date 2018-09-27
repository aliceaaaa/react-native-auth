import React from 'react';
import { View } from 'react-native';

const styles = {
    containerStyle: {
        border: "1px solid #ddd",
        borderRadius: 2,
        BorderBottomWidth: 0,
        shadowColor: "#000",
        shadowOffset: {widthL: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRaduis: 2,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop:10
    }
}

const Card = (props) => {
    return (
    <View style={styles.containerStyle}> 
    {props.children} 
    </View>
    );
};

export { Card };