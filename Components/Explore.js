import React from 'react'
import { Text, View, StyleSheet, FlatList} from 'react-native'
import Header from "./SearchHeader";
import Card from "./Card";
import {useSelector } from "react-redux";
import { ScrollView } from 'react-native-gesture-handler';


const Little = ({name})=>{
    return (
        <View style={styles.littleCard}>
            <Text style={styles.text}>{name}</Text>
        </View>
    )
}

const Explore = () => {
    const cardData =  useSelector(state=> {
        return state
    })
return(
    <View style={styles.container}>
        <Header />
        <ScrollView>
        <View style={styles.smallContainer}>
            <Little name="games" />
            <Little name="songs" />
            <Little name="news" />
            <Little name="live" />
            <Little name="videos" />
            <Little name="reels" />
        </View>
        <Text style={styles.Trending}>Trending Videos</Text>
        <FlatList 
                data={cardData}
                renderItem={({item})=> {
                    return(
                        <Card
                            videoId = {item.id.videoId}
                            title = {item.snippet.title}
                            channel={item.snippet.channelTitle}
                         />
                    )
                }}
                keyExtractor={item=> item.id.videoId}
            />
        </ScrollView>
    </View>
)
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    littleCard:{
        backgroundColor:"red",
        height:70,
        width:180,
        borderRadius:6,
        marginTop:10
    },
    text:{
        textAlign:"center",
        color:"white",
        fontSize:22,
        marginTop:15
    },
    smallContainer:{
        flexDirection:"row",
        flexWrap:"wrap",
        justifyContent:"space-around"
    },
    Trending:{
        margin:10,
        fontSize:20,
        borderBottomWidth:3
    }

})


export default Explore