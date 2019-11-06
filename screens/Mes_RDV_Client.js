import React, {useState, useEffect} from 'react'
import { 
    View, 
    Text, 
    Image, 
    Button, 
    FlatList,
    ScrollView, 
    StyleSheet,
    Platform,
    //Modal,
    TouchableHighlight,
    Alert,
    ActivityIndicator
} from 'react-native'
import { HeaderButtons, Item} from 'react-navigation-header-buttons'
import HeaderButton from '../components/UI/HeaderButton'
import OperatorItem from '../components/ItemClient/OperatorItem'
import { useSelector, useDispatch } from 'react-redux'
import Modals from '../components/UI/Modal_RDV'
import ModalsOpt from '../components/UI/Modal_Ope'
import PrestItem from '../components/ItemClient/prestItems'
import * as prestActions from '../store/actions/Prestation'
import DateTimePicker from "react-native-modal-datetime-picker";
import moment from 'moment'

const Mes_RDV_Client = props => {
    const products = useSelector(state => state.product.availableProducts)
    const [isVisible, setIsVisible] = useState(false)
    const [chosenDate, setChosenDate] = useState('')

  const showDateTimePicker = () => {
    setIsVisible(true)
  };

  const hideDateTimePicker = () => {
    setIsVisible(false)
  };

  const handleDatePicked = date => {
    console.log("A date has been picked: ", date);
    hideDateTimePicker();
    setChosenDate(moment(date).format('MMMM Do YYYY HH:mm'))
    console.log(chosenDate+' test date')
    dispatch(prestActions.addDateRDV(moment(date).format('MMMM Do YYYY HH:mm')))
    console.log(prestationState)
  };
    const prestItem = useSelector(state => {
        const tarnPrestItem = []
        for (const key in state.prestation.items) {
            tarnPrestItem.push({
                prestId : key,
                prestTitle : state.prestation.items[key].prestationTitle,
                prestDescription : state.prestation.items[key].prestationDescription
            })
        }
        return tarnPrestItem
    })
    const operatorItem = useSelector(state => state.prestation.operator)
    const prestationState = useSelector(state => state.prestation)

    if(operatorItem.name != null){
        //setIsVisible(true)
        console.log(operatorItem.name)
    } else {
        //setIsVisible(false)
    }
    const dispatch = useDispatch()

    useEffect(() => {
        console.log(prestationState+' useEffect')
    }, [dispatch])

    return (
        <ScrollView>
        <View style = {styles.screen}>
            <View style = {{width : '100%', height : 80}}>
                <Text>Mes RDV Client</Text>
                <Modals 
                products = {products}
                />
            </View>
            <View style = {{width : '100%', height : 80}}>
                <Text>Mes RDV Client</Text>
                <ModalsOpt />
            </View>
            <View style = {{width : '100%', height : 80}}>
                <Text>Mes RDV Client</Text>
                <View style = {{ flex: 1, alignItems : 'center', marginBottom : 10}}>
                    <View style = {styles.viewTitle}>
                    <Text 
                        style = {styles.text} 
                        onPress={showDateTimePicker}>
                        Select Service</Text>
                    </View>
                </View>
            </View>
            <DateTimePicker
                isVisible={isVisible}
                onConfirm={handleDatePicked}
                onCancel={hideDateTimePicker}
                mode={'datetime'}
                is24Hour={false}
                color = 'black'
                datePickerModeAndroid={'calendar'}
            />

            <View style = {{width : '100%', justifyContent : 'center', alignItems : 'center'}}>
            <Text>Votre Prestations </Text>
            <FlatList
                    data = {prestItem}
                    keyExtractor = {item => item.prestId}
                    renderItem = {itemData => <PrestItem
                        title = {itemData.item.prestTitle}
                        onRemove = {() => {
                            dispatch(prestActions.removeItem(itemData.item.prestId))
                        }}
                        /> }
                />
            </View>
            <Text>Votre Operator </Text>
            <OperatorItem 
                        title = {operatorItem.name}
                        address = {null}
                        image = {operatorItem.imageUrl}
                        onSelect = {() => {console.log(prestationState)}}
                    />
            <Text>{chosenDate}</Text>
            <Button title = 'show State' onPress = {() => {console.log(prestationState)}} />
        </View>
        </ScrollView>
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
        marginHorizontal : 10,
        marginVertical : 5,
        //justifyContent : 'center',
        alignItems : 'center',
        //backgroundColor : 'blue'
    },
    modal : {
        flex : 1,
        //backgroundColor: 'red',
        margin: 0, 
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalContent: {
        height: 100,
        //backgroundColor: "red",
        padding: 22,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 4,
        borderColor: "rgba(0, 0, 0, 0.1)"
    },
    viewTitle : {
        width : '80%',
        //alignItems: 'center',
        backgroundColor : '#ccc',
        paddingVertical : 10,
        paddingHorizontal : 16,
        borderRadius : 25
    },
    text : {
        color : 'black',
        paddingVertical : 5
    }
})

export default Mes_RDV_Client