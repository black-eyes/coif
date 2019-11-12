import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Colors from '../constants/Colors';

const ItemRDV = props => {
  return (
    <TouchableOpacity onPress={props.onViewDetail} style={styles.placeItem}>
      <Text style = {styles.date}>{props.date}</Text>
      <Text style = {styles.prestation}>{props.prestation}</Text>
      <View>
          <Text style = {styles.with}>avec 
              <Text style = {styles.name}> {props.name}</Text>
          </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    placeItem: {
      width:'100%',
      height: 100,
      borderColor: '#ccc',
      borderWidth: 1,
      marginVertical : 5,
      flexDirection: 'column',
      justifyContent : 'center',
      //alignItems: 'center'
      paddingHorizontal : 5
    },
    date : {
        fontSize : 18,
        marginBottom : 5,
        color : 'gray'
    },
    prestation : {
        fontWeight : '600',
        color : 'black',
        marginBottom : 5,
        fontSize : 16
    },
    with : {
        color : 'black',
        marginBottom : 5
    },
    name : {
        fontSize : 18,
        color : 'black',
        paddingRight : 5,
        fontWeight : '600'
    }
    
  });

export default ItemRDV;
