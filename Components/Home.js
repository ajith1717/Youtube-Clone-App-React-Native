import React from 'react'
import { View ,StyleSheet,FlatList,ScrollView} from 'react-native'
import Card from './Card'
import Header from "./SearchHeader";
import {useSelector} from "react-redux";

function Home() {
    const cardData = useSelector(state=>{
        return state
    })
    return (
        <View  style={styles.container} >
            <Header />
            <ScrollView>
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
    }
})

export default Home
