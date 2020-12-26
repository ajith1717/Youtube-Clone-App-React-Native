import React from 'react'
import { Text, View, StyleSheet, Image, Modal, TouchableWithoutFeedback, Keyboard, TextInput, TouchableOpacity, Dimensions } from 'react-native'
import Header from "./SearchHeader"



const Suscribe = () => {
return(
    <View style={styles.container}>
        <Header />
        <Text style={styles.text}>Suscribe screen</Text>
    </View>
)
}


const styles = StyleSheet.create({
    text:{
        textAlign:"center",
        fontSize:50,
        justifyContent:"center",
    },
    container:{
        flex:1,
        

    }
})

export default Suscribe