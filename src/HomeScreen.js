import React, { useEffect, useState } from 'react';
import { View, Text, StatusBar, Dimensions } from 'react-native';
import { TextInput, FlatList, TouchableNativeFeedback } from 'react-native-gesture-handler';
import { fontCustomSize } from './common/CustomSize';
import IconData from './common/IconData';
import { SectionGrid } from 'react-native-super-grid';

import AntIcon from 'react-native-vector-icons/AntDesign';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import FeatherIcons from 'react-native-vector-icons/Feather';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome';

export default HomeScreen = ({ navigation }) => {

    const [searchText, setSearchText] = useState("");
    const [searchData, setSearchData] = useState([]);


    // {
    //     "forward": {
    //         "Ant Design": [
    //             "fastforward",
    //             "font-forward"
    //         ]
    //     }
    // }


    DynamicView = () => {
        if (searchText == "") {
            return (<FlatList
                data={Object.keys(IconData)}
                renderItem={({ item }) => (<TouchableNativeFeedback
                    background={TouchableNativeFeedback.Ripple("#1f1f1f")}>
                    <View style={{ padding: 10, flexDirection: 'row', justifyContent: 'space-between', marginRight: 10 }} >
                        <Text style={{ fontFamily: 'Bold', color: "#fff", fontSize: fontCustomSize(16) }}>
                            {item}
                        </Text>
                        <Text style={{ fontFamily: 'Bold', color: "#fff", fontSize: fontCustomSize(16) }}>
                            {Object.keys(IconData[item]).length}
                        </Text>
                    </View>
                </TouchableNativeFeedback>)}
                keyExtractor={(item) => (item)}
            />);
        } else {
            return (<SectionGrid
                itemDimension={Dimensions.get("window").width / 4}
                sections={searchData}
                renderItem={({ item, section, index }) => (
                    <View style={{
                        backgroundColor: "#1E1E1E", padding: fontCustomSize(10),
                        justifyContent: 'center', alignItems: 'center'
                    }}>
                        <IconType item={item} section={section} index={index} />
                        <Text style={{
                            marginTop: 10, fontSize: fontCustomSize(14),
                            fontFamily: "Regular", color: "white"
                        }}>{item}</Text>
                    </View>
                )}
                renderSectionHeader={({ section }) => (
                    <Text >{section.title}</Text>
                )}
            />);
        }
    }

    IconType = ({ item, section, index }) => {
        if (section["title"] == Object.keys(IconData)[0]) {
            return (<AntIcon name={item} color="white" size={fontCustomSize(40)} />)
        } else if (section["title"] == Object.keys(IconData)[1]) {
            return (<EntypoIcon name={item} color="white" size={fontCustomSize(40)} />)
        } else if (section["title"] == Object.keys(IconData)[2]) {
            return (<EvilIcons name={item} color="white" size={fontCustomSize(40)} />)
        } else if (section["title"] == Object.keys(IconData)[3]) {
            return (<FeatherIcons name={item} color="white" size={fontCustomSize(40)} />)
        } else if (section["title"] == Object.keys(IconData)[4]) {
            return (<FontAwesomeIcons name={item} color="white" size={fontCustomSize(40)} />)
        }
    }

    return (
        <View style={{ flexDirection: 'column', backgroundColor: "#121212", flex: 1 }}>
            <StatusBar barStyle="light-content" backgroundColor="black" />
            <View style={{ padding: fontCustomSize(10), width: Dimensions.get("window").width }}>
                <TextInput
                    onChangeText={res => {
                        if (res == "") { setSearchText(""); return }
                        var tempArray = [];
                        var containKey = [];
                        Object.keys(IconData).forEach(title => {
                            Object.keys(IconData[title]).forEach(item => {
                                item.split("-").forEach(word => {
                                    if (word.search(res) >= 0) {
                                        if (containKey.includes(title)) {
                                            tempArray.forEach((obj, index) => {
                                                if (obj.title == [title]) {
                                                    tempArray[index]["data"].push(item)
                                                    return
                                                }
                                            })
                                        } else {
                                            tempArray.push({
                                                title: title,
                                                data: [item]
                                            })
                                            containKey.push(title)
                                        }
                                    }
                                })
                            })
                        })
                        console.log(tempArray)
                        setSearchData(tempArray);
                        setSearchText(res)
                    }}
                    keyboardAppearance="dark"
                    autoFocus={true}
                    style={{ borderColor: "white", fontFamily: 'Regular', color: 'white', fontSize: fontCustomSize(16), borderBottomColor: "white", borderBottomWidth: 1 }} />
            </View>
            <DynamicView />
        </View>
    );
}