import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './Components/Home';
import  Search  from './Components/Search';
import Videoplayer from './Components/Videoplayer'
import { MaterialIcons } from '@expo/vector-icons';
import {NavigationContainer , DarkTheme , DefaultTheme} from "@react-navigation/native" ;
import {createStackNavigator} from "@react-navigation/stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import Explore from './Components/Explore';
import Suscribe from './Components/Suscribe';
import {Provider} from "react-redux";
import {createStore} from "redux";
import {Reducer} from "./Components/reducer"

const customDarkTheme={
  ...DarkTheme,
  colors:{
    ...DarkTheme.colors,
    headerColor:"#404040"
  }
}

const customDefaultTheme={
  ...DefaultTheme,
  colors:{
    ...DefaultTheme.colors,
    headerColor:"white"
  }
}

const Stack = createStackNavigator()
const Tabs = createBottomTabNavigator()
const store = createStore(Reducer)

const RootHome = () =>{
  return(
    <Tabs.Navigator 
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = "home"
        } else if (route.name === 'Explore') {
          iconName = "explore"
        }else if (route.name === "Suscribe"){
          iconName = "subscriptions"
        }

        // You can return any component that you like here!
        return <MaterialIcons name={iconName} size={32} color={color} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: 'red',
      inactiveTintColor: 'gray',
    }}
  >
      <Tabs.Screen name="Home" component={Home}/>
      <Tabs.Screen name="Explore" component={Explore}/>
      <Tabs.Screen name="Suscribe" component={Suscribe}/>
    </Tabs.Navigator>
  )
}
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer >
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="rootHome" component={RootHome}/>
          <Stack.Screen name="Search" component={Search}/>
          <Stack.Screen name="Videoplayer" component={Videoplayer}/>
        </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}
  

//theme={customDarkTheme}