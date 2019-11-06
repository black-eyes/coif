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
    TouchableOpacity,
    ScrollView,
    ActivityIndicator
} from 'react-native'
import { HeaderButtons, Item} from 'react-navigation-header-buttons'
import HeaderButton from '../components/UI/HeaderButton'

import Input from '../components/UI/Input'
import Colors from '../constants/Colors'

const Mon_Compte_Client = props => {
    return (
        <ScrollView>
            <View style = {styles.screen}>
            <Input 
                title = 'Nom'
                value = 'Nom'
            />
            <Input
                title = 'GSM'
                value = '0653164895'
            />
            <Input
                title = 'Email'
                value = 'mail@mail.com'
            />
            <Input
                title = 'Address'
                value = 'ABC, casablanca'
            />
            <Input
                title = 'Password'
                value = '53164895'
                secureTextEntry
            />
            <TouchableOpacity style = {styles.button}>
                <Text style = {styles.btn}>Modifier</Text>
            </TouchableOpacity>
        </View>
        </ScrollView>
    )
}

Mon_Compte_Client.navigationOptions = navData => {
    return {
        headerTitle : 'Mon Compte',
        headerLeft : <HeaderButtons HeaderButtonComponent = {HeaderButton}>
            <Item 
                title = 'Menu' 
                iconName = { Platform.OS === 'android' 
                ? 'md-menu' 
                : 'ios-menu'}
                onPress = {() => {
                    navData.navigation.toggleDrawer()
                }} />
        </HeaderButtons>,
         headerRight : (
            <View></View>
       // <HeaderButtons HeaderButtonComponent = {HeaderButton}>
       //     <Item 
       //         title = 'Cart' 
       //         iconName = { Platform.OS === 'android' 
       //         ? 'md-cart' 
       //         : 'ios-cart'}
       //         onPress = {() => {
       //             navData.navigation.navigate({
       //                 routeName : 'Cart'
       //             })
       //         }} />
       // </HeaderButtons>
        )
    }

}

const styles = StyleSheet.create({
    screen : {
        flex : 1,
        //justifyContent : 'center',
        alignItems : 'center',
        margin : 10,
    },
    container : {
        width : '100%',
        paddingVertical : 10,
        borderBottomColor : 'black',
        borderBottomWidth : 1
    },
    input : {
        backgroundColor : "#cfcfcf",
        paddingHorizontal : 16,
        borderRadius : 25,
        paddingVertical : 10,
        fontSize : 16,
        fontWeight : '500'
    },
    button : {
        width : '50%',
        height : 40,
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor : 'black',
        borderRadius : 5,
        marginVertical : 15
    }, 
    btn : {
        fontSize : 16,
        color : 'white'
    }
})

export default Mon_Compte_Client