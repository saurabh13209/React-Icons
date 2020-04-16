import React from 'react';
import { View, Text } from 'react-native';
import { fontCustomSize } from './common/CustomSize';
import { ScrollView } from 'react-native-gesture-handler';

export default Contact = () => {
    return (
        <ScrollView style={{ flex: 1, backgroundColor: 'black' }}>
            <View style={{ padding: 10, flexDirection: 'column' }}>
                <View style={{ flexDirection: 'row', justifyContent: 'center', margin: 40 }}>
                    <Text style={{ fontSize: fontCustomSize(25), fontFamily: 'Bold', color: 'white' }}>
                        REACT ICONS </Text>
                </View>
                <Text style={{ fontSize: fontCustomSize(16), fontFamily: 'Bold', color: 'white' }}>
                    Purpose
                </Text>
                <Text style={{ marginBottom: 20, fontSize: fontCustomSize(13), marginTop: 10, fontFamily: 'Regular', color: 'white' }}>
                    This app will help you to find fonts from more than 8000 vector icons. it was very difficult for us to search for an icon from these icons, so we decided to develop this app
                    {"\n\n"}Please give us your precious feedback. Do let us know if we can add any other feature in it
                </Text>
                <Text style={{ fontSize: fontCustomSize(16), fontFamily: 'Bold', color: 'white' }}>
                    Contact Us
                </Text>
                <Text style={{ marginBottom: 20, fontSize: fontCustomSize(13), marginTop: 10, fontFamily: 'Regular', color: 'white' }}>
                    Dimensions{"\n"}dimensionsdotorg@gmail.com
                </Text>
                <Text style={{ fontSize: fontCustomSize(16), fontFamily: 'Bold', color: 'white' }}>
                    Contact Developer
                </Text>
                <Text style={{ fontSize: fontCustomSize(13), marginTop: 10, fontFamily: 'Regular', color: 'white' }}>
                    Saurabh Agrawal{"\n"}agrawal99saurabh@gmail.com
                </Text>

            </View>
        </ScrollView>
    );
}