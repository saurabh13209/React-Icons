import React from 'react';
import AntIcon from 'react-native-vector-icons/AntDesign';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import FeatherIcons from 'react-native-vector-icons/Feather';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome';
import FontistoIcons from 'react-native-vector-icons/Fontisto';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicans from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialComunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import OcticonsIcon from 'react-native-vector-icons/Octicons';
import SimpleLineIconsIcons from 'react-native-vector-icons/SimpleLineIcons';
import ZocialIcons from 'react-native-vector-icons/Zocial';

export const IconType = ({ item, section, index, size }) => {
    if (section["title"] == Object.keys(IconData)[0]) {
        return (<AntIcon name={item} color="white" size={size} />)
    } else if (section["title"] == Object.keys(IconData)[1]) {
        return (<EntypoIcon name={item} color="white" size={size} />)
    } else if (section["title"] == Object.keys(IconData)[2]) {
        return (<EvilIcons name={item} color="white" size={size} />)
    } else if (section["title"] == Object.keys(IconData)[3]) {
        return (<FeatherIcons name={item} color="white" size={size} />)
    } else if (section["title"] == Object.keys(IconData)[4]) {
        return (<FontAwesomeIcons name={item} color="white" size={size} />)
    } else if (section["title"] == Object.keys(IconData)[5]) {
        return (<FontistoIcons name={item} color="white" size={size} />)
    } else if (section["title"] == Object.keys(IconData)[6]) {
        return (<Foundation name={item} color="white" size={size} />)
    } else if (section["title"] == Object.keys(IconData)[7]) {
        return (<Ionicans name={item} color="white" size={size} />)
    } else if (section["title"] == Object.keys(IconData)[8]) {
        return (<MaterialIcons name={item} color="white" size={size} />)
    } else if (section["title"] == Object.keys(IconData)[9]) {
        return (<MaterialComunityIcons name={item} color="white" size={size} />)
    } else if (section["title"] == Object.keys(IconData)[10]) {
        return (<OcticonsIcon name={item} color="white" size={size} />)
    } else if (section["title"] == Object.keys(IconData)[11]) {
        return (<ZocialIcons name={item} color="white" size={size} />)
    } else if (section["title"] == Object.keys(IconData)[12]) {
        return (<SimpleLineIconsIcons name={item} color="white" size={size} />)
    }
}