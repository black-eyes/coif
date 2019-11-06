import React, { useState } from 'react'
import { View, Text, Button, TextInput, FlatList, Dimensions, Platform, StyleSheet} from 'react-native'
import Modal from "react-native-modal"
import ItemList from '../ItemList'
//import { Dimensions } from 'react-native-extra-dimensions-android'
import MultiSelect from 'react-native-multiple-select'
import { useDispatch } from 'react-redux'
import * as prestActions from '../../store/actions/Prestation'


const Modal_RDV = props => {
    const [modalVisible, setIsModalVisible] = useState(false)

    // const deviceWidth = Dimensions.get("window").width;
    // const deviceHeight = Dimensions.get("window").height
    // console.log(Math.round(deviceWidth))
    // console.log(Math.round(deviceHeight))

    const [selectedItems, setSelectedItems] = useState([])
    const dispatch = useDispatch()

    // const onSelectedItemsChange = selectedItem => {
    //     setSelectedItems(selectedItem)
    //     console.log(selectedItems)
    //   };

    const items = [{
        id: '92iijs7yta',
        name: 'Ondo',
      }, {
        id: 'a0s0a8ssbsd',
        name: 'Ogun',
      }, {
        id: '16hbajsabsd',
        name: 'Calabar',
      }, {
        id: 'nahs75a5sg',
        name: 'Lagos',
      }, {
        id: '667atsas',
        name: 'Maiduguri',
      }, {
        id: 'hsyasajs',
        name: 'Anambra',
      }, {
        id: 'djsjudksjd',
        name: 'Benue',
      }, {
        id: 'sdhyaysdj',
        name: 'Kaduna',
      }, {
        id: 'suudydjsjd',
        name: 'Abuja',
      }];

    return (
        <View style={styles.screen}>
            <View style = {styles.viewTitle}>
                <Text 
                    style = {styles.text} 
                    onPress={() => setIsModalVisible(true)}>
                    Select Service</Text>
            </View>
            <Modal 
                isVisible={modalVisible}
                // deviceWidth={deviceWidth}
                // deviceHeight={deviceHeight}          
            >
            <View style={styles.container}>
                <FlatList
                    style = {styles.containerFlat}
                    data = {props.products}
                    keyExtractor = {item => item.id}
                    renderItem = {itemData => 
                    <ItemList 
                        image={itemData.item.imageUrl}
                        title={itemData.item.title}
                        address={itemData.item.address}
                        onViewDetail={() => {
                            dispatch(prestActions.addToItems(
                                itemData.item
                                ))
                            console.log(itemData.item.address+' addresssss')
                        }}
                    /> }
                />
                <Button title="Hide modal" onPress={() => setIsModalVisible(false)} />
            </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    screen : { 
        flex: 1,
        alignItems : 'center'
    },
    container : {
        //flex: 2,
        height : '80%',
        padding : 5, 
        borderRadius : 5,
        backgroundColor : 'white' 
    },
    viewTitle : {
        width : '80%',
        backgroundColor : '#ccc',
        paddingVertical : 10,
        paddingHorizontal : 16,
        borderRadius : 25
    },
    text : {
        width : '100%',
        //height : 30,
        color : 'black',
        paddingVertical : 5
    }
})

export default Modal_RDV