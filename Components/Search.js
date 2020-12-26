import React, { useState ,useEffect} from 'react'
import {  View, StyleSheet,TextInput, Dimensions, FlatList, ActivityIndicator } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import Minicard from './Minicard';
import {useDispatch,useSelector} from "react-redux";
import { LogBox } from 'react-native';


function Search({navigation}) {
    useEffect(() => {
        LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    }, [])    
    const [value, setValue] = useState("")
    const miniCardData = useSelector(state=>{
        return state
    })
    const dispatch = useDispatch()
    const [loading , setLoading] = useState(false)

    const fetchData = () => {
        setLoading(true)
        console.log(value, "aaaaaaaaaaa")
        fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${value}&type=video&key=AIzaSyD-730ZGQTSV5Jl5G5zv2_pmxputkONMLw`)
        .then(res=>res.json())
        .then(data=>{
            setLoading(false)
            dispatch({type:"add" , payload:data.items})
        })
    }
    return (
        <View >
            <View style={styles.container}>
                <Ionicons name="arrow-back-sharp" size={38} color="black" style={styles.icon} onPress={()=> navigation.goBack()} />
                <TextInput
                    placeholder="enter....."
                    style={styles.Text}
                    onChangeText={(a) => setValue(a)}
                    value={value}
                />
                <Ionicons onPress={()=> fetchData()} name="md-send-sharp" size={38} color="black" style={styles.icon} />
            </View>
            {/* {loading ? <ActivityIndicator style={{margin:"10"}} size="large" color="red" /> : null} */}
            {/* <SafeAreaView style={{flex: 1}}> */}
            <FlatList 
                data={miniCardData}
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
            {/* </SafeAreaView> */}
        </View>
    )



}


const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-around",
        height: 70,
        marginTop:50
    },
    Text: {
        width: Dimensions.get("screen").width-100,
        fontSize: 20,
        // marginLeft:10,
        backgroundColor:"#B2BEB5",
        padding:10
    },
    icon:{
        margin:10
    }
})
export default Search