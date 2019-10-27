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

const screen1 = props => {
    return (
        <View style = {styles.screen}>
            <Text>test screen1</Text>
        </View>
    )
}

screen1.navigationOptions = navData => {
    return {
        headerTitle : 'Dashboard',
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

export default screen1