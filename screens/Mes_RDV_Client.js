import React, {useState} from 'react'
import { 
    View, 
    Text, 
    Image, 
    Button, 
    FlatList, 
    StyleSheet,
    Platform,
    ActivityIndicator
} from 'react-native'
import { HeaderButtons, Item} from 'react-navigation-header-buttons'
import HeaderButton from '../components/UI/HeaderButton'

const Mes_RDV_Client = props => {
    return (
        <View style = {styles.screen}>
            <Text>Mes RDV Client</Text>
        </View>
    )
}

Mes_RDV_Client.navigationOptions = navData => {
    return {
        headerTitle : 'Mes RDV',
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
        // headerRight : (
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
        // )
    }

}

const styles = StyleSheet.create({
    screen : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center'
    }
})

export default Mes_RDV_Client