import React, { useEffect, useState } from 'react';
import { View, Text, StatusBar, Dimensions, BackHandler } from 'react-native';
import { TextInput, FlatList, TouchableNativeFeedback } from 'react-native-gesture-handler';
import { fontCustomSize } from './common/CustomSize';
import IconData from './common/IconData';
import { SectionGrid } from 'react-native-super-grid';
import { IconType } from './common/SetIcon';
import Store from './Mobx/Store';

export default HomeScreen = ({ navigation }) => {

    const [searchText, setSearchText] = useState("");
    const [searchData, setSearchData] = useState([]);


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
            <View style={{ padding: fontCustomSize(10), width: Dimensions.get("window").width }}>
                <TextInput
                    autoCapitalize="none"
                    placeholder="Search icon"
                    placeholderTextColor="#aaa"
                    value={searchText}
                    onChangeText={res => {
                        setSearchText(res)
                        if (res.search(/[\[\]?*+|{}\\()@.\n\r]/) != -1) {
                            return
                        }
                        var tempArray = [];
                        var containKey = [];
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
                        setSearchData(tempArray);
                    }}
                    keyboardAppearance="dark"
                    autoFocus={true}
                    style={{ borderColor: "white", fontFamily: 'Regular', color: 'white', fontSize: fontCustomSize(16), borderBottomColor: "white", borderBottomWidth: 1 }} />
            </View>
            <DynamicView />
        </View>
    );
}