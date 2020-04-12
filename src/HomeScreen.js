import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { fontCustomSize } from './common/CustomSize';

export default HomeScreen = () => {
    return (
        <View style={{ flexDirection: 'row', backgroundColor: "#121212", flex: 1 }}>
            <StatusBar barStyle="light-content" backgroundColor="black" />
            <View style={{ padding: fontCustomSize(10) }}>
                <TextInput style={{ borderColor: "white" }} />
            </View>
        </View>
    );
}