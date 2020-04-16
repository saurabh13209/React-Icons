import 'react-native-get-random-values';
import React from 'react';
import { WebView } from 'react-native-webview';

export default MyWebComponent = () => {
    return (
        <WebView source={{ uri: 'https://github.com/oblador/react-native-vector-icons' }} />
    )
}