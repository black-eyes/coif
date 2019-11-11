import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Colors from '../constants/Colors';

const PlaceItem = props => {
  return (
    <TouchableOpacity onPress={props.onViewDetail} style={styles.placeItem}>
        <View style = {styles.container}>
          <Text style={styles.title}>{props.title}</Text>
          <Image style={styles.image} source={{ uri: props.image }} />
        </View>
      <View style={styles.infoContainer}>
          <Text style = {styles.date}>{props.date}</Text>
          <Text style={styles.discription} numberOfLines={5}>{props.discription}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    placeItem: {
      width:'100%',
      height: 150,
      borderColor: '#ccc',
      borderWidth: 1,
      marginVertical : 5,
      flexDirection: 'row',
      paddingHorizontal : 5
      //justifyContent : 'center',
      //backgroundColor : 'blue'
      //alignItems: 'center'
    },
    container : {
        //backgroundColor : '#FCFCFC',
        justifyContent : 'center'
    },
    image: {
      width: 100,
      height: 100,
      //borderRadius: 35,
      backgroundColor: '#ccc',
      //borderColor: Colors.primary,
      borderWidth: 1
    },
    infoContainer: {
      marginVertical: 10,
      marginHorizontal : 10,
      width: '70%',
      //justifyContent: 'center',
      alignItems: 'flex-start',
      //backgroundColor : '#ccc'
    },
    title: {
      color: 'black',
      textAlign : 'center',
      fontSize: 16,
      fontWeight : 'bold',
      marginBottom: 5
    },
    date : {
        textAlign : 'right', 
        width : '100%'
    },
    discription: {
      color: '#666',
      fontSize: 16
    }
  });

export default PlaceItem;
