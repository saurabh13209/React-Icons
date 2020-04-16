import React, { useEffect, useState } from 'react';
import { View, Text, StatusBar, Dimensions, BackHandler } from 'react-native';
import { TextInput, FlatList, TouchableNativeFeedback } from 'react-native-gesture-handler';
import { fontCustomSize } from './common/CustomSize';
import IconData from './common/IconData';
import { SectionGrid } from 'react-native-super-grid';
import { IconType } from './common/SetIcon';
import Icon from 'react-native-vector-icons/Entypo';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import MaterialComIcon from 'react-native-vector-icons/MaterialCommunityIcons'

export default TitleIconScreen = (props) => {

    const [searchText, setSearchText] = useState("");
    const [searchData, setSearchData] = useState([]);
    const [searcType, setSearchType] = useState(true);

    useEffect(() => {
        var tempArray = [];
        var containKey = [];
        if (props.route.params.title == "All") {
            Object.keys(IconData).forEach(title => {
                Object.keys(IconData[title]).forEach(item => {
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
                })
            })
        } else {
            Object.keys(IconData[props.route.params.title]).forEach(item => {
                if (containKey.includes(props.route.params.title)) {
                    tempArray.forEach((obj, index) => {
                        if (obj.title == [props.route.params.title]) {
                            tempArray[index]["data"].push(item)
                            return
                        }
                    })
                } else {
                    tempArray.push({
                        title: props.route.params.title,
                        data: [item]
                    })
                    containKey.push(props.route.params.title)
                }
            })
        }
        setSearchData(tempArray);
    }, [])

    useEffect(() => {
        if (searchText.search(/[\[\]?*+|{}\\()@.\n\r]/) != -1) {
            return
        }
        if (searchText == "") { return }
        var tempArray = [];
        var containKey = [];

        if (props.route.params.title == "All") {
            Object.keys(IconData).forEach(title => {
                Object.keys(IconData[title]).forEach(item => {
                    if (searcType) {
                        if (item.search(searchText) >= 0) {
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
                    } else {
                        item.split("-").forEach(word => {
                            if (word == searchText) {
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
                                return
                            }
                        })
                    }
                })
            })
        } else {
            Object.keys(IconData[props.route.params.title]).forEach(item => {
                if (searcType) {
                    if (item.search(searchText) >= 0) {
                        if (containKey.includes(props.route.params.title)) {
                            tempArray.forEach((obj, index) => {
                                if (obj.title == [props.route.params.title]) {
                                    tempArray[index]["data"].push(item)
                                    return
                                }
                            })
                        } else {
                            tempArray.push({
                                title: props.route.params.title,
                                data: [item]
                            })
                            containKey.push(props.route.params.title)
                        }
                    }
                } else {
                    item.split("-").forEach(word => {
                        if (word == searchText) {
                            if (containKey.includes(props.route.params.title)) {
                                tempArray.forEach((obj, index) => {
                                    if (obj.title == [props.route.params.title]) {
                                        tempArray[index]["data"].push(item)
                                        return
                                    }
                                })
                            } else {
                                tempArray.push({
                                    title: props.route.params.title,
                                    data: [item]
                                })
                                containKey.push(props.route.params.title)
                            }
                            return
                        }
                    })
                }
            })
        }
        setSearchData(tempArray);
    }, [searchText, searcType])



    return (
        <View style={{ flexDirection: 'column', backgroundColor: "#121212", flex: 1 }}>
            <StatusBar barStyle="light-content" backgroundColor="black" />

            <View style={{ flexDirection: 'row', justifyContent: 'center', margin: 10, marginTop: 20, backgroundColor: 'white' }}>
                <TextInput
                    autoCapitalize="none"
                    placeholder="Search icon"
                    placeholderTextColor="#aaa"
                    value={searchText}
                    onChangeText={res => {
                        setSearchText(res)
                    }}
                    keyboardAppearance="dark"
                    autoFocus={true}
                    style={{ fontFamily: 'Regular', color: 'black', flex: 1, fontSize: fontCustomSize(14) }} />
                <MaterialComIcon
                    onPress={() => {
                        setSearchType(true)
                    }}
                    name="format-text-variant"
                    style={{ backgroundColor: searcType == true ? '#e4e4e4' : "white", alignSelf: 'center', padding: 10, }} size={fontCustomSize(16)} color="black" />

                <MaterialIcon
                    onPress={() => {
                        setSearchType(false)
                    }}
                    name="format-color-text"
                    style={{ backgroundColor: searcType == false ? '#e4e4e4' : "white", alignSelf: 'center', padding: 10 }} size={fontCustomSize(16)} color="black" />

                <Icon
                    onPress={() => {
                        setSearchText("")
                    }}
                    name="cross"
                    style={{ backgroundColor: 'white', alignSelf: 'center', padding: 10 }} size={fontCustomSize(20)} color="black" />
            </View>
            <SectionGrid
                itemDimension={Dimensions.get("window").width / 4}
                sections={searchData}
                renderItem={({ item, section, index }) => (
                    <TouchableNativeFeedback
                        background={TouchableNativeFeedback.Ripple("#000")}
                        onPress={() => {
                            props.navigation.navigate("IconInfo", { item: item, section: section });
                        }}
                    >
                        <View style={{
                            backgroundColor: "#1E1E1E", padding: fontCustomSize(10),
                            justifyContent: 'center', alignItems: 'center'
                        }}>
                            <IconType item={item} section={section} index={index} size={fontCustomSize(40)} />
                            <Text style={{
                                marginTop: 10, fontSize: fontCustomSize(14),
                                fontFamily: "Regular", color: "white"
                            }}>{item}</Text>
                        </View>
                    </TouchableNativeFeedback>
                )}
                renderSectionHeader={({ section }) => ([props.route.params.title] == "All" ? <Text style={{ backgroundColor: "#000", paddingBottom: 10, paddingTop: 10, paddingLeft: 10, fontFamily: "Bold", color: "white", fontSize: fontCustomSize(16) }} >{section.title}</Text> : null)}
            />
        </View>
    );
}