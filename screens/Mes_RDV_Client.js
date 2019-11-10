import React, {useState, useEffect, useCallback} from 'react'
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
    TouchableOpacity,
    TouchableHighlight,
    Alert,
    ActivityIndicator
} from 'react-native'
import Modal from "react-native-modal"
import { HeaderButtons, Item} from 'react-navigation-header-buttons'
import HeaderButton from '../components/UI/HeaderButton'
import OperatorItem from '../components/ItemClient/OperatorItem'
import { useSelector, useDispatch } from 'react-redux'
import Modals from '../components/UI/Modal_RDV'
import ModalsOpt from '../components/UI/Modal_Ope'
import ModalsTime from '../components/UI/Modal_time'
import PrestItem from '../components/ItemClient/prestItems'
import * as prestActions from '../store/actions/Prestation'
import DateTimePicker from "react-native-modal-datetime-picker";
import moment from 'moment'
import DATETAIME from '../data/datatime'

const Mes_RDV_Client = props => {
    const products = useSelector(state => state.product.availableProducts)
    const [isVisible, setIsVisible] = useState(false)
    const [isVisibleTime, setIsVisibleTime] = useState(false)
    const [chosenDate, setChosenDate] = useState()
    const [selected, setSelected] = useState(new Map());
    const [isData, setIsData] = useState([])

  const showDateTimePicker = () => {
    setIsVisible(true)
  };

  const hideDateTimePicker = () => {
    setIsVisible(false)
  };

  let datep = ""

  const handleDatePicked = date => {
    console.log("A date has been picked: ", date);
    hideDateTimePicker();
    setIsVisibleTime(true)
    datep = moment(date).format('MMMM Do YYYY')
    setChosenDate(date)
    console.log(datep+' test date')
    dispatch(prestActions.addDateRDV(moment(date).format('MMMM Do YYYY')))
    console.log(prestationState)
  };

  const handlerDateTime = (time) => {
    console.log(datep+time +' gogo')
    dispatch(prestActions.addTimeRDV(time))
  }
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

    const onSelect = useCallback(
        dataItem => {
        const newSelected = new Map(selected);
        newSelected.set(dataItem.id, !selected.get(dataItem.id));
        console.log('selected'+ selected.size)
        console.log('newSelected.id' + newSelected.id)
        setSelected(newSelected);
        },
        [selected],
    );

    const Item = ({ id, time, selected, onSelect, dataItem }) => {
        return (
          <TouchableOpacity
            onPress={() => {
                onSelect(dataItem)
                handlerDateTime(time)
            }}
            style={[
                styles.gridItem,
              { backgroundColor: selected ? '#ccc' : '#000' },
            ]}
          >
            <View>
                <Text style = {styles.textTime}>{time}</Text>
            </View>
          </TouchableOpacity>
        );
      }

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
                mode={'date'}
                is24Hour={false}
                color = 'black'
                datePickerModeAndroid={'calendar'}
            />

            <Modal isVisible={isVisibleTime} >
                <View style={styles.container}>
                    <FlatList
                        style = {styles.containerFlat}
                        data = {DATETAIME}
                        keyExtractor = {item => item.id}
                        onSelect={onSelect}
                        renderItem = {itemData => <Item
                            id={itemData.item.id}
                            time={itemData.item.time}
                            dataItem = {itemData.item}
                            selected={!!selected.get(itemData.item.id)}
                            onSelect={onSelect}
                          />
                        }
                        numColumns = {2}
                        extraData={selected}
                    />
                    <Button title="Hide modal" onPress={() => setIsVisibleTime(false)} />
                </View>
            </Modal>         

            <View style = {{ width : '100%', justifyContent : 'center', alignItems : 'center'}}>
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
            <Text>{prestationState.dateRDV.date + ' ' + prestationState.dateRDV.time}</Text>
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
    },
    containerFlat : {
        backgroundColor : 'white',
        maxHeight : '80%',
        minHeight : '60%'
    },
    gridItem : {
        flex : 1,
        alignItems : "center",
        justifyContent : "center",
        margin : 5,
        height : 50,
        backgroundColor : 'black',
        borderRadius : 8
    },
    textTime : {
        color : 'white',
        fontWeight : 'bold',
        fontSize : 16
    }
})

export default Mes_RDV_Client