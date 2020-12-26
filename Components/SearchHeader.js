import React, { useState } from 'react'
import { Text, View, StyleSheet, Image, Modal, TouchableWithoutFeedback, Keyboard, TextInput, TouchableOpacity, Dimensions } from 'react-native'
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import Body from './Card';
import { useNavigation , useTheme } from "@react-navigation/native"
function Header() {
    const navigation = useNavigation();
    const [modalOpen, setModalOpen] = useState(false)
    const [search, setSearch] = useState("");
    const [ser, setSer] = useState(false)
    // const {colors} = useTheme()
    const mycolor = "#212121"
        const changehandler = () => {
        console.log(search, "bbbb")
        setSer(true);
        setModalOpen(false)
    }
    return (
         <View style={styels.container}>
            {/* <Modal
                visible={modalOpen}
                animationType="slide"
            >
                <View>  
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}></TouchableWithoutFeedback>
                    <View >
                        <MaterialIcons
                            name="close"
                            size={24}
                            onPress={() => setModalOpen(false)}
                            onChangeText
                        />
                        <View>
                            <TextInput
                                placeholder="enter"
                                onChangeText={(a)=>setSearch(a)}
                            />
                            <TouchableOpacity onPress={changehandler}>
                                <Text>ss</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal> */}
            <View style={styels.Search}>

                <Ionicons name="ios-logo-youtube" size={56} color="red" style={styels.you}  />
                <Text style={styels.text}>YouTube</Text>
                <View style={{ flexDirection: "row"}}>
                    <MaterialIcons name="search" size={48} style={styels.Icon} onPress={() => navigation.navigate("Search")}  color={mycolor}/>
                    <MaterialIcons name="account-circle" size={48} style={styels.Icon} color={mycolor}  />
                </View>


            </View>

        </View>
    )
}


const styels = StyleSheet.create({
    Search: {
        // backgroundColor:colors.headerColor,
        height: 80,
        flexDirection: "row",
        width: "100%",
        borderWidth: 2,
        borderBottomColor: "#000",
        // flex: 1,
        marginTop: 20

    },
    you: {
        marginLeft: 12,
        marginTop: 5,

    },
    text: {
        fontSize: 40,
        margin: 8,
        marginRight:40

    },
    Icon: {
        marginTop: 18,
        justifyContent: "space-around"
    },
    container: {
        // flex: 1,
        backgroundColor: '#fff',
        // justifyContent: 'center',
        flexDirection: "row",
        paddingTop: 10,
        // marginTop:20
    },
})
export default Header
