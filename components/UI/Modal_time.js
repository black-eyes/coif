import React, { useState } from 'react'
import { View, Text, Button, TextInput, FlatList, Dimensions, Platform, StyleSheet} from 'react-native'
import Modal from "react-native-modal"
import ItemList from '../ItemClient/OperatorItem'
//import { Dimensions } from 'react-native-extra-dimensions-android'
import MultiSelect from 'react-native-multiple-select'
import { useDispatch } from 'react-redux'
import * as operatorActions from '../../store/actions/Prestation'
import DATETAIME from '../../data/datatime'

const Modal_time = props => {
    const [modalVisible, setIsModalVisible] = useState(false)

    // const deviceWidth = Dimensions.get("window").width;
    // const deviceHeight = Dimensions.get("window").height
    // console.log(Math.round(deviceWidth))
    // console.log(Math.round(deviceHeight))

    const [selectedItems, setSelectedItems] = useState([])
    const dispatch = useDispatch()

    setIsModalVisible(props.modalVisible)

    const renderGridItem = (itemData) => {
        return (
            <View>
                <Text>{itemData.item.time}</Text>
            </View>
        )
    }

    return (
        <View style={styles.screen}>
            <Modal 
                isVisible={modalVisible}
                // deviceWidth={deviceWidth}
                // deviceHeight={deviceHeight}          
            >
            <View style={styles.container}>
                <FlatList
                    style = {styles.containerFlat}
                    data = {DATETAIME}
                    keyExtractor = {item => item.id}
                    renderItem = {renderGridItem}
                    numColumns = {2}
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
        //height : '80%',
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

export default Modal_time