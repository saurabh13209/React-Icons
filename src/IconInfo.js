import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { IconType } from './common/SetIcon';
import { fontCustomSize } from './common/CustomSize';
import IconData from './common/IconData';

export default IconInfo = (props) => {

    getIconName = () => {
        var iconName = props.route.params.section.title == Object.keys(IconData)[0] ? ["AntIcon", 'react-native-vector-icons/AntDesign'] :
            props.route.params.section.title == Object.keys(IconData)[1] ? ["EntypoIcon", 'react-native-vector-icons/Entypo'] :
                props.route.params.section.title == Object.keys(IconData)[2] ? ["EvilIcons", 'react-native-vector-icons/EvilIcons'] :
                    props.route.params.section.title == Object.keys(IconData)[3] ? ["FeatherIcons", 'react-native-vector-icons/Feather'] :
                        props.route.params.section.title == Object.keys(IconData)[4] ? ["FontAwesomeIcons", 'react-native-vector-icons/FontAwesome'] :
                            props.route.params.section.title == Object.keys(IconData)[5] ? ["FontistoIcons", 'react-native-vector-icons/Fontisto'] :
                                props.route.params.section.title == Object.keys(IconData)[6] ? ["Foundation", 'react-native-vector-icons/Foundation'] :
                                    props.route.params.section.title == Object.keys(IconData)[7] ? ["Ionicans", 'react-native-vector-icons/Ionicons'] :
                                        props.route.params.section.title == Object.keys(IconData)[8] ? ["MaterialIcons", 'react-native-vector-icons/MaterialIcons'] :
                                            props.route.params.section.title == Object.keys(IconData)[9] ? ["MaterialComunityIcons", 'react-native-vector-icons/MaterialCommunityIcons'] :
                                                props.route.params.section.title == Object.keys(IconData)[10] ? ["OcticonsIcon", 'react-native-vector-icons/Octicons'] :
                                                    props.route.params.section.title == Object.keys(IconData)[11] ? ["SimpleLineIconsIcons", 'react-native-vector-icons/SimpleLineIcons'] :
                                                        props.route.params.section.title == Object.keys(IconData)[12] ? ["ZocialIcons", 'react-native-vector-icons/Zocial'] : "";

        return iconName;
    }

    return (
        <ScrollView style={{ backgroundColor: "#121212", flex: 1 }}>
            <View style={{ flexDirection: 'column', padding: 10 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10, backgroundColor: 'black', padding: 20, borderRadius: 10 }}>
                    <IconType item={props.route.params.item} section={props.route.params.section} index={0} size={fontCustomSize(60)} />
                    <View style={{ flexDirection: 'column', marginLeft: 20 }}>
                        <Text style={{ fontFamily: "Bold", color: "white", fontSize: fontCustomSize(16) }}>{props.route.params.section.title}</Text>
                        <Text style={{ fontFamily: "Regular", color: "white", fontSize: fontCustomSize(16), marginTop: 10 }}>{props.route.params.item}</Text>
                    </View>
                </View>
                <View style={{
                    flexDirection: 'column', marginTop: 10, backgroundColor: '#252525',
                    padding: 20, borderRadius: fontCustomSize(7)
                }}>
                    <Text style={[styles.codeStyle, { marginBottom: 10 }]}>import React from 'react'</Text>
                    <Text style={styles.codeStyle}>import {getIconName()[0]} from {getIconName()[1]}</Text>
                    <Text style={[styles.codeStyle, { marginTop: 10 }]}>export default App = () => {"{\n\t\t\t\t\t"}return ({"\n\t\t\t\t\t\t\t\t\t\t"}{"<" + getIconName()[0] + " name=\"" + props.route.params.item}" color="white" size={"{40} />\n\t\t\t\t\t)\n}"}  </Text>
                </View>
                <View style={{
                    flexDirection: 'column', marginTop: 10, backgroundColor: '#252525',
                    padding: 10, borderRadius: fontCustomSize(7)
                }}>
                    <Text style={{ fontFamily: 'Regular', color: 'white', fontSize: fontCustomSize(16), marginBottom: 10 }}>Installation </Text>
                    <Text style={[styles.codeStyle, { paddingLeft: 15, paddingRight: 15, paddingBottom: 10 }]}>yarn add react-native-vector-icons</Text>
                </View>
            </View >
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    codeStyle: { fontFamily: 'CodeRegular', color: 'white', fontSize: fontCustomSize(16) }
})