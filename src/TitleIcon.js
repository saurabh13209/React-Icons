import React, { useEffect, useState } from 'react';
import { View, Text, StatusBar, Dimensions, BackHandler } from 'react-native';
import { TextInput, FlatList, TouchableNativeFeedback } from 'react-native-gesture-handler';
import { fontCustomSize } from './common/CustomSize';
import IconData from './common/IconData';
import { SectionGrid } from 'react-native-super-grid';
import { IconType } from './common/SetIcon';

export default TitleIconScreen = (props) => {

    const [searchText, setSearchText] = useState("");
    const [searchData, setSearchData] = useState([]);
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

    return (
        <View style={{ flexDirection: 'column', backgroundColor: "#121212", flex: 1 }}>
            <StatusBar barStyle="light-content" backgroundColor="black" />
            <View style={{ padding: fontCustomSize(10), width: Dimensions.get("window").width }}>
                <TextInput
                    autoCapitalize="none"
                    placeholder={"Search icon in " + [props.route.params.title]}
                    placeholderTextColor="#aaa"
                    value={searchText}
                    onChangeText={res => {
                        setSearchText(res)
                        if (res.search(/[\[\]?*+|{}\\()@.\n\r]/) != -1) {
                            return
                        }
                        var tempArray = [];
                        var containKey = [];
                        if (props.route.params.title == "All") {
                            Object.keys(IconData).forEach(title => {
                                Object.keys(IconData[title]).forEach(item => {
                                    if (item.search(res) >= 0) {
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
                        } else {
                            Object.keys(IconData[props.route.params.title]).forEach(item => {
                                if (item.search(res) >= 0) {
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
                            })
                        }
                        setSearchData(tempArray);
                    }}
                    keyboardAppearance="dark"
                    autoFocus={true}
                    style={{ borderColor: "white", fontFamily: 'Regular', color: 'white', fontSize: fontCustomSize(16), borderBottomColor: "white", borderBottomWidth: 1 }} />
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
                renderSectionHeader={({ section }) => ([props.route.params.title] == "All" ? <Text style={{ backgroundColor: "#000", paddingBottom: 10, paddingTop: 10, fontFamily: "Bold", color: "white", fontSize: fontCustomSize(16) }} >{section.title}</Text> : null)}
            />
        </View>
    );
}