import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/HomeScreen';
import { fontCustomSize } from './src/common/CustomSize';

const StackNavigator = createStackNavigator();

export default App = () => {
  return (
    <NavigationContainer>
      <StackNavigator.Navigator>
        <StackNavigator.Screen component={HomeScreen} name="Home" options={{ title: "React Icons", headerTintColor: "#fff", headerStyle: { backgroundColor: "#1F1F1F", elevation: fontCustomSize(8) } }} />
      </StackNavigator.Navigator>
    </NavigationContainer>
  );
}