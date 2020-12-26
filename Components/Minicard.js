import React from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native'
import {useNavigation} from "@react-navigation/native";


function Minicard(props) {
    const navigation= useNavigation();
    return (
        <TouchableOpacity onPress={()=> navigation.navigate("Videoplayer",{videoId:props.videoId , title:props.title})}>
            <View style={styles.container} >
                <Image
                    source={{ uri:`https://i.ytimg.com/vi/${props.videoId}/hqdefault.jpg`}}
                    style={styles.Image}
                />
                <View>
                    <Text
                        ellipsizeMode="tail"
                        numberOfLines={2}
                        style={styles.Text}
                    >{props.title}</Text>
                    <Text style={styles.text}>{props.channel}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    Image: {
        height: 100,
        width:"45%"
    },
    container: {
        flexDirection: "row",
        padding:10
    },
    Text: {
        fontSize: 20,
        width:Dimensions.get("screen").width/2,
        padding:2

    },
    text:{
        width:Dimensions.get("screen").width/2,
        padding:2
    }
})

export default Minicard
