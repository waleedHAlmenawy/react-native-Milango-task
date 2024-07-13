import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'

const LoadingState = ({ isDarkMode }) => {
    return (
        <View style={{
            backgroundColor: isDarkMode ? "black" : "white",
            justifyContent: "center",
            alignItems: "center",
            flex: 1
        }}>
            <ActivityIndicator size="large" color={isDarkMode ? "#68DDBA" : "#2B1190"} />
        </View>
    )
}

export default LoadingState