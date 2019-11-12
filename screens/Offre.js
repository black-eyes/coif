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
import ItemOffer from '../components/itemOffer'

const Offre = props => {

    const items = [{
        id: '92iijs7yta',
        title: 'Offer 1',
        description : "What the content is? Why would that matter? It's a limited edition!",
        imageUrl: 'https://images.pexels.com/photos/160834/coffee-cup-and-saucer-black-coffee-loose-coffee-beans-160834.jpeg?cs=srgb&dl=bean-beans-black-coffee-160834.jpg&fm=jpg',
        date : 'Reste DD:HH:MM:SS'
      }, {
        id: 'a0s0a8ssbsd',
        title: 'Offre 2',
        description : "What the content is? Why would that matter? It's a limited edition!",
        imageUrl: 'https://images.pexels.com/photos/160834/coffee-cup-and-saucer-black-coffee-loose-coffee-beans-160834.jpeg?cs=srgb&dl=bean-beans-black-coffee-160834.jpg&fm=jpg',
        date : 'Reste DD:HH:MM:SS'
      }, {
        id: '16hbajsabsd',
        title: 'Offer 3',
        description : "What the content is? Why would that matter? It's a limited edition!",
        imageUrl: 'https://images.pexels.com/photos/160834/coffee-cup-and-saucer-black-coffee-loose-coffee-beans-160834.jpeg?cs=srgb&dl=bean-beans-black-coffee-160834.jpg&fm=jpg',
        date : 'Reste DD:HH:MM:SS'
      }];

    return (
        <View style = {styles.screen}>
            <FlatList
            style = {styles.flatlist}
            data = {items}
            keyExtractor = {item => item.id}
            renderItem = {itemData => <ItemOffer 
            title = {itemData.item.title}
            image = {itemData.item.imageUrl}
            discription = {itemData.item.description}
            date = {itemData.item.date}
            onViewDetail = {() => {
                props.navigation.navigate('OfferDetails', {
                    offerId: itemData.item.id,
                    offerTitle: itemData.item.title,
                    offerImage : itemData.item.imageUrl,
                    offerDescription : itemData.item.description,
                    offerDate : itemData.item.date

                  });
            }}
            />}
            />
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
        //justifyContent : 'center',
        alignItems : 'center'
    },
    flatlist : {
        flex : 1,
        marginHorizontal : 5,
        //backgroundColor : 'red',
        width : '100%'
    }
})

export default Offre