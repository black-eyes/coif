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

const Offre = props => {
    return (
        <View style = {styles.screen}>
            <Text>Offre</Text>
        </View>
    )
}

Offre.navigationOptions = navData => {
    return {
        headerTitle : 'Offre',
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
        justifyContent : 'center',
        alignItems : 'center'
    }
})

export default Offre