import React from 'react'
import { Text, View, StyleSheet, FlatList, Dimensions } from 'react-native'
import WebView from 'react-native-webview';
import { useSelector } from "react-redux";
import { ScrollView } from 'react-native-gesture-handler';
import Minicard from './Minicard'




const Videoplayer = ({ route }, props) => {
    const cardData = useSelector(state => {
        return state
    })
    const { videoId, title, channel } = route.params
    const videoIds = route.params.videoId
    const link = `https://www.youtube.com/embed/${videoIds}`
    console.log(link)
    return (
        <View style={styles.container}>
            <View style={styles.Videoplayer}>
                <Text style={{ textAlign: "center", fontSize: 20 }}>Video </Text>
                <WebView
                    javaScriptEnabled={true}
                    source={{
                        uri: `https://www.youtube.com/embed/${videoIds}`
                    }}
                    style={{ marginTop: 40 }}
                />
            </View>
            <Text style={styles.text} numberOfLines={2} ellipsizeMode="tail">
                {title}
            </Text>
            <View style={{ borderBottomWidth: 5 }} />
            <ScrollView>
            <FlatList 
                data={cardData}
                renderItem={({item})=> {
                    return(
                        <Minicard
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
    text: {
        fontSize: 20,
        width: Dimensions.get("screen").width - 50,
        margin: 10,
    },
    container: {
        flex: 1,
    },
    Videoplayer: {
        width: "100%",
        height: 300
    },
    miniVideo: {
        flexDirection: "row"
    },
    miniText: {
        flexDirection: "row"
    }
})

export default Videoplayer