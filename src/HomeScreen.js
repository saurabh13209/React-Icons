import React, { useEffect, useState } from 'react';
import { View, Text, StatusBar, Dimensions, BackHandler } from 'react-native';
import { TextInput, FlatList, TouchableNativeFeedback } from 'react-native-gesture-handler';
import { fontCustomSize } from './common/CustomSize';
import IconData from './common/IconData';
import { SectionGrid } from 'react-native-super-grid';
import { IconType } from './common/SetIcon';
import Store from './Mobx/Store';
import Icon from 'react-native-vector-icons/Entypo';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import MaterialComIcon from 'react-native-vector-icons/MaterialCommunityIcons'

export default HomeScreen = ({ navigation }) => {

    const [searchText, setSearchText] = useState("");
    const [searchData, setSearchData] = useState([]);
    const [searcType, setSearchType] = useState(true);

    useEffect(() => {
        console.log(searchText);
        if (searchText.search(/[\[\]?*+|{}\\()@.\n\r]/) != -1) {
            return
        }
        var tempArray = [];
        var containKey = [];
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
        setSearchData(tempArray);
    }, [searchText, searcType])


    DynamicView = () => {
        if (searchText == "") {
            var listData = ["All", ...Object.keys(IconData)];
            var totalCount = 0;
            Object.keys(IconData).forEach(eachObj => {
                totalCount += Object.keys(IconData[eachObj]).length;
            })
            return (<FlatList
                data={listData}
                renderItem={({ item }) => (<TouchableNativeFeedback
                    onPress={() => {
                        Store.chatArray = item
                        navigation.navigate('TitleInfo', { title: item })
                    }}
                    background={TouchableNativeFeedback.Ripple("#1f1f1f")}>
                    <View style={{ padding: 10, flexDirection: 'row', justifyContent: 'space-between', marginRight: 10 }} >
                        <Text style={{ fontFamily: 'Bold', color: "#fff", fontSize: fontCustomSize(16) }}>
                            {item}
                        </Text>
                        {item == "All" ? <Text style={{ fontFamily: 'Bold', color: "#fff", fontSize: fontCustomSize(16) }}>
                            {totalCount}
                        </Text> : <Text style={{ fontFamily: 'Bold', color: "#fff", fontSize: fontCustomSize(16) }}>
                                {Object.keys(IconData[item]).length}
                            </Text>}
                    </View>
                </TouchableNativeFeedback>)}
                keyExtractor={(item) => (item)}
            />);
        } else {
            return (<SectionGrid
                itemDimension={Dimensions.get("window").width / 4}
                sections={searchData}
                renderItem={({ item, section, index }) => (
                    <TouchableNativeFeedback
                        background={TouchableNativeFeedback.Ripple("#000")}
                        onPress={() => {
                            navigation.navigate("IconInfo", { item: item, section: section });
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
                renderSectionHeader={({ section }) => (
                    <Text style={{ backgroundColor: "#000", paddingBottom: 10, paddingTop: 10, fontFamily: "Bold", color: "white", fontSize: fontCustomSize(16) }} >{section.title}</Text>
                )}
            />);
        }
    }

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
            <DynamicView />
        </View>
    );
}