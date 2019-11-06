import React, {useState} from 'react'
import { 
    View, 
    Text, 
    Image, 
    Button, 
    FlatList, 
    StyleSheet,
    Platform,
    ScrollView,
    ActivityIndicator
} from 'react-native'
import { HeaderButtons, Item} from 'react-navigation-header-buttons'
import HeaderButton from '../components/UI/HeaderButton'
import { useSelector } from 'react-redux'

const ProductDetail = props => {
    const productId = props.navigation.getParam('productId');
    const selectedProduct = useSelector(state =>
        state.product.availableProducts.find(prod => prod.id === productId)
    );
    console.log(selectedProduct)
    return (
        <ScrollView>
            <View style = {styles.screen}>
                <Image style = {styles.image} source={{ uri: selectedProduct.imageUrl }} />
                <Text style = {styles.title}>{selectedProduct.title}</Text>
                <Text style = {styles.address}>{selectedProduct.address}</Text>
            </View>
        </ScrollView>
    )
}

ProductDetail.navigationOptions = navData => {
    return {
        headerTitle : 'Detail products',
        // headerLeft : <HeaderButtons HeaderButtonComponent = {HeaderButton}>
        //     <Item 
        //         title = 'Menu' 
        //         iconName = { Platform.OS === 'android' 
        //         ? 'md-menu' 
        //         : 'ios-menu'}
        //         onPress = {() => {
        //             navData.navigation.toggleDrawer()
        //         }} />
        // </HeaderButtons>,
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
        justifyContent : 'flex-start',
        alignItems : 'center',
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: 'white',
        margin : 10,
        paddingHorizontal : 5,
        paddingVertical : 15
    },
    image : {
        width : '100%',
        height : 250
    },
    title : {
        fontSize : 18,
        color : 'black',
        fontWeight : 'bold',
        marginVertical : 10
    },
    address : {
        textAlign : 'center'
    }
})

export default ProductDetail