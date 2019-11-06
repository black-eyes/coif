import React, {useState} from 'react'
import { 
    View, 
    Text,
    TextInput, 
    Image, 
    Button, 
    FlatList, 
    StyleSheet,
    Platform,
    ActivityIndicator
} from 'react-native'

const Input = props => {
    return (
        <View style = {styles.container}>
            <Text style = {styles.title}>{props.title}</Text>
                <TextInput 
                    {...props}
                    style = {styles.input}
                    //label="Phone number"
                    placeholder = 'Title'
                    underlineColorAndroid = 'rgba(0,0,0,0)'
                    placeholderTextColor = 'black'    
                    value = {props.value}    
                />
        </View>
    )
}

const styles = StyleSheet.create({
    screen : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center'
    },
    container : {
        width : '100%',
        paddingVertical : 10,
        // borderBottomColor : 'black',
        // borderBottomWidth : 1
    },
    input : {
        backgroundColor : "#cfcfcf",
        paddingHorizontal : 16,
        borderRadius : 25,
        paddingVertical : 10,
        fontSize : 16,
        fontWeight : '500'
    },
    title : {
        fontWeight : '500',
        paddingBottom : 5
    }
})

export default Input