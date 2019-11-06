import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Colors from '../constants/Colors';

const PlaceItem = props => {
  return (
    <TouchableOpacity onPress={props.onViewDetail} style={styles.placeItem}>
      <Image style={styles.image} source={{ uri: props.image }} />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.address} numberOfLines={6}>{props.address}</Text>
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
      justifyContent : 'center',
      //alignItems: 'center'
    },
    image: {
      width: "40%",
      height: '100%',
      //borderRadius: 35,
      backgroundColor: '#ccc',
      //borderColor: Colors.primary,
      borderWidth: 1
    },
    infoContainer: {
      marginVertical: 10,
      marginHorizontal : 10,
      width: '55%',
      //justifyContent: 'center',
      alignItems: 'flex-start'
    },
    title: {
      color: 'black',
      fontSize: 20,
      fontWeight : 'bold',
      marginBottom: 5
    },
    address: {
      color: '#666',
      fontSize: 16
    }
  });

export default PlaceItem;
