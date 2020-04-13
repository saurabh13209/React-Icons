import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/HomeScreen';
import { fontCustomSize } from './src/common/CustomSize';
import IconInfo from './src/IconInfo';
import TitleIcon from './src/TitleIcon';
import Store from './src/Mobx/Store';
import { Observer } from 'mobx-react';

const StackNavigator = createStackNavigator();

export default App = () => {
  return (
    <Observer>
      {
        () => (
          <NavigationContainer>
            <StackNavigator.Navigator>
              <StackNavigator.Screen component={HomeScreen} name="Home" options={{ title: "React Icons", headerTintColor: "#fff", headerStyle: { backgroundColor: "#1F1F1F", elevation: fontCustomSize(8) } }} />
              <StackNavigator.Screen component={IconInfo} name="IconInfo" options={{ title: "Icon Info", headerTintColor: "#fff", headerStyle: { backgroundColor: "#1F1F1F", elevation: fontCustomSize(8) } }} />
              <StackNavigator.Screen component={TitleIcon} name="TitleInfo" options={{ title: Store.chatArray, headerTintColor: "#fff", headerStyle: { backgroundColor: "#1F1F1F", elevation: fontCustomSize(8) } }} />
            </StackNavigator.Navigator>
          </NavigationContainer>
        )
      }
    </Observer>

  );
}