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
import ItemRDV from '../components/ItemRDV'

const Prendre_un_rendez_vous_client = props => {

    const items = [{
        id: '92iijs7yta',
        prestation: 'shampoing Brushing',
        name : 'Amal',
        date : '11/12/2019'
      }, {
        id: 'a0s0a8ssbsd',
        prestation: 'shampoing Brushing',
        name : 'Amal',
        date : '11/15/2019'
      }, {
        id: '16hbajsabsd',
        prestation: 'shampoing Brushing',
        name : 'Amal',
        date : '11/10/2019'
      }];

    return (
        <View style = {styles.screen}>
            <FlatList 
            style = {styles.flatlist}
            data = {items}
            keyExtractor = {item => item.id}
            renderItem = {itemDate => <ItemRDV 
            prestation = {itemDate.item.prestation}
            name = {itemDate.item.name}
            date = {itemDate.item.date}
            />
        }
            />
        </View>
    )
}

Prendre_un_rendez_vous_client.navigationOptions = navData => {
    return {
        headerTitle : 'Prendre un rendez vous client',
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
        alignItems : 'center'
    },
    flatlist : {
        width : '100%'
    }
})

export default Prendre_un_rendez_vous_client