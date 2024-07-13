import { View, Text } from 'react-native'
import React from 'react'
import { Colors } from '../constants/colors'

const EmptyState = ({ isDarkMode }) => {
    return (
        <View style={{
            alignItems: "center",
            justifyContent: "center",
        }}>
            <Text style={{
                marginVertical: 100,
                fontSize: 22,
                fontWeight: 500,
                opacity: 0.5,
                color: (isDarkMode ? Colors.dark : Colors.light).mainColor,
            }}>No Repositories To Show</Text>
        </View>
    )
}

export default EmptyState