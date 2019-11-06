import React from 'react'
import { 
    View, 
    Text, 
    StyleSheet,
    TouchableOpacity,
    TouchableNativeFeedback,
Platform} from 'react-native'
import { Ionicons } from '@expo/vector-icons'


const CartItem = props => {
    let TouchableCmd = TouchableOpacity
    if(Platform.OS === 'android' && Platform.Version >= 21){
        TouchableCmd = TouchableNativeFeedback
    }
    return (
        <View style = {styles.cartItem}>
            <Text style = {styles.itemData}>
                <Text style = {styles.quantity}>30 min </Text> 
                <Text style = {styles.mainText}>{props.title}</Text>
            </Text>
            <View style = {styles.itemData}>
                {<TouchableOpacity onPress = {props.onRemove} style = {styles.deleteButton}>
                    <Ionicons 
                        name = {Platform.OS === 'android'
                        ? 'md-trash'
                        : 'ios-trash'} 
                        size = {23}
                        color = 'red'
                        />
                </TouchableOpacity>}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cartItem : {
        padding : 10,
        backgroundColor : 'white',
        flexDirection : 'row',
        justifyContent : 'space-between',
        marginHorizontal : 20,
    },
    itemData : {
        flexDirection : 'row',
        alignItems : 'center'
    },
    quantity : {
        color : '#888',
        fontSize : 16
    },
    mainText : {
        fontSize : 16
    },  
    deleteButton : {
        marginLeft : 20
    },
})

export default CartItem
