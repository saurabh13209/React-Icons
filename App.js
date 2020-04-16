import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/HomeScreen';
import { fontCustomSize } from './src/common/CustomSize';
import IconInfo from './src/IconInfo';
import TitleIcon from './src/TitleIcon';
import Store from './src/Mobx/Store';
import { Observer } from 'mobx-react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Contact from './src/Contact';
import Installation from './src/Installation';

const StackNavigator = createStackNavigator();
const DrawerNavigator = createDrawerNavigator();

export default App = () => {

  const StackNavigationFunc = () => {
    return (
      <StackNavigator.Navigator>
        <StackNavigator.Screen component={HomeScreen} name="Home" options={{ title: "React Icons", headerTintColor: "#fff", headerStyle: { backgroundColor: "#1F1F1F", elevation: fontCustomSize(8) } }} />
        <StackNavigator.Screen component={IconInfo} name="IconInfo" options={{ title: "Icon Info", headerTintColor: "#fff", headerStyle: { backgroundColor: "#1F1F1F", elevation: fontCustomSize(8) } }} />
        <StackNavigator.Screen component={TitleIcon} name="TitleInfo" options={{ title: Store.chatArray, headerTintColor: "#fff", headerStyle: { backgroundColor: "#1F1F1F", elevation: fontCustomSize(8) } }} />
      </StackNavigator.Navigator>
    );
  }

  return (
    <Observer>
      {
        () => (
          <NavigationContainer>
            <DrawerNavigator.Navigator
              drawerContentOptions={{ activeBackgroundColor: "#202020", inactiveBackgroundColor: 'black', labelStyle: { color: "white" }, contentContainerStyle: { backgroundColor: 'black', flex: 1 } }}
            >
              <DrawerNavigator.Screen component={StackNavigationFunc} name="HomeDraw" options={{ title: "Home", headerTintColor: "#fff", headerStyle: { backgroundColor: "#1F1F1F", elevation: fontCustomSize(8) } }} />
              <DrawerNavigator.Screen component={Installation} name="InstallDraw" options={{ title: "Installation", headerTintColor: "#fff", headerStyle: { backgroundColor: "#1F1F1F", elevation: fontCustomSize(8) } }} />
              <DrawerNavigator.Screen component={Contact} name="ContactDraw" options={{ title: "Contact Us", headerTintColor: "#fff", headerStyle: { backgroundColor: "#1F1F1F", elevation: fontCustomSize(8) } }} />
            </DrawerNavigator.Navigator>
          </NavigationContainer>
        )
      }
    </Observer>

  );
}