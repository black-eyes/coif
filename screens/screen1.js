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
import { useSelector } from 'react-redux'
import ItemList from '../components/ItemList'
const screen1 = props => {
    const products = useSelector(state => state.product.availableProducts)
    return (
        // <View style = {styles.screen}>
        //     <Text>test screen1</Text>
        // </View>
        <FlatList
            style = {styles.container}
            data = {products}
            keyExtractor = {item => item.id}
            renderItem = {itemData => 
            <ItemList 
                image={itemData.item.imageUrl}
                title={itemData.item.title}
                address={itemData.item.address}
                onViewDetail={() => {
                    props.navigation.navigate('ProductDetails', {
                      productId: itemData.item.id,
                      productTitle: itemData.item.title
                    });
                  }}
            /> }
        />
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
    },
    container : {
        margin : 5
    }
})

export default screen1