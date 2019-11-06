import React from 'react'
import { createAppContainer, createSwitchNavigator} from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createDrawerNavigator, DrawerNavigatorItems} from 'react-navigation-drawer'
import { Platform, SafeAreaView, Button, View, StyleSheet } from 'react-native'
//import { useDispatch } from 'react-redux'

import Screen1 from '../screens/screen1'
import ProductDetail from '../screens/ProductDetail'
import Prendre_un_rendez_vous_client from '../screens/Prendre_un_rendez_vous_client'
import Mes_RDV_Client from '../screens/Mes_RDV_Client'
import Offre from '../screens/Offre'
import Mon_Compte_Client from '../screens/Mon_Compte_Client'

import { Ionicons } from '@expo/vector-icons'
import Colors from '../constants/Colors'

const defaultNavOptions = {
    headerStyle : {
        backgroundColor : Platform.OS === 'android' ? 'black' : '',
    },
    headerTitleStyle : {
        //fontFamily : 'open-sans-bold'
        textAlign:"center", 
        flex : 1 
    },
    // headerBackTitleStyle : {
    //     fontFamily : 'open-sans'
    // },
    headerTintColor : Platform.OS === 'android' ? 'white' : 'black'
}

const Screen = createStackNavigator({
    Screen : Screen1,
    ProductDetails : ProductDetail
}, {
        navigationOptions : {
            drawerIcon : drawerConfig => <Ionicons 
            name = {Platform.OS === 'android'
                    ? 'md-bookmarks'
                    : 'ios-bookmarks'}
            size = {23}
            color = {drawerConfig.tintColor}
            />
        },
    defaultNavigationOptions : defaultNavOptions
})

const PrendreRevClient = createStackNavigator({
    PrendreRevClient : Prendre_un_rendez_vous_client
}, {
    navigationOptions : {
        drawerIcon : drawerConfig => <Ionicons 
        name = {Platform.OS === 'android'
                ? 'md-calendar'
                : 'ios-calendar'}
        size = {23}
        color = {drawerConfig.tintColor}
        />
    },
    defaultNavigationOptions : defaultNavOptions
})

const MesRDVClient = createStackNavigator({
    MesRDVClient : Mes_RDV_Client
}, {
    navigationOptions : {
        drawerIcon : drawerConfig => <Ionicons 
        name = {Platform.OS === 'android'
                ? 'md-compass'
                : 'ios-compass'}
        size = {23}
        color = {drawerConfig.tintColor}
        />
    },
    defaultNavigationOptions : defaultNavOptions
})

const Offre_Client = createStackNavigator({
    Offre_Client : Offre
}, {
    navigationOptions : {
        drawerIcon : drawerConfig => <Ionicons 
        name = {Platform.OS === 'android'
                ? 'md-notifications'
                : 'ios-notifications'}
        size = {23}
        color = {drawerConfig.tintColor}
        />
    },
    defaultNavigationOptions : defaultNavOptions
})

const Mon_Compte_Cli = createStackNavigator({
    Mon_Compte_Cli : Mon_Compte_Client
}, {
    navigationOptions : {
        drawerIcon : drawerConfig => <Ionicons 
        name = {Platform.OS === 'android'
                ? 'md-person'
                : 'ios-person'}
        size = {23}
        color = {drawerConfig.tintColor}
        />
    },
    defaultNavigationOptions : defaultNavOptions
})

// const ClientNav = createStackNavigator({
//     Screen : Screen1,
//     PrendreRevClient : Prendre_un_rendez_vous_client,
//     MesRDVClient : Mes_RDV_Client,
//     Offre_Client : Offre,
//     Mon_Compte_Cli : Mon_Compte_Client
// })

const ClientNavigator = createDrawerNavigator({
    Screen : {
        screen: Screen,
        navigationOptions: {
          drawerLabel: "Dashboard"
        }
    },
    PrendreRevClient : {
        screen: PrendreRevClient,
        navigationOptions: {
          drawerLabel: "Prendre un rendez vous"
        }
    },
    MesRDVClient : {
        screen: MesRDVClient,
        navigationOptions: {
          drawerLabel: "Mes RDV"
        }
    },
    Offre_Client : {
        screen: Offre_Client,
        navigationOptions: {
          drawerLabel: "Offre"
        }
    },
    Mon_Compte_Cli : {
        screen: Mon_Compte_Cli,
        navigationOptions: {
          drawerLabel: "Mon Compte"
        }
    },
}, {
    contentOptions : {
        activeTintColor : 'black'
    }
})

export default createAppContainer(ClientNavigator)