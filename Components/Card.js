import React from 'react'
import { View, Text, Image, StyleSheet,Dimensions ,TouchableOpacity} from 'react-native';
import axios from 'axios';
import { MaterialIcons } from "@expo/vector-icons";
import {useNavigation} from "@react-navigation/native";


function Body(props) {
    const navigation= useNavigation();
    return (
        <View >
            <TouchableOpacity onPress={()=> navigation.navigate("Videoplayer",{videoId:props.videoId , title:props.title})}>
                <Image
                    source={{ uri:`https://i.ytimg.com/vi/${props.videoId}/hqdefault.jpg` }}
                    style={styles.Image}
                />
            </TouchableOpacity>
            <View style={styles.container}>
                <MaterialIcons name="account-circle" size={48}  style={styles.icon}/>
                <View>
                    <Text 
                        ellipsizeMode="tail"
                        numberOfLines={2}
                        style={styles.Text}
                    >{props.title}</Text>
                    <Text>{props.channel}</Text>
                </View>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    Image: {
        height: 200,
    },
    container: {
        flexDirection: "row"
    },
    Text:{
        fontSize:20,
        width:Dimensions.get("screen").width - 50
    },
    icon:{
        marginTop:8
    }

})
export default Body
