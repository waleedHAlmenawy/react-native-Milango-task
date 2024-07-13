import React, { useEffect } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ExploreScreen from '../screens/Explore';
import RepoScreen from '../screens/Repositories';
import { Colors } from '../constants/colors';

const Tab = createMaterialTopTabNavigator();

function MyTabs({ isDarkMode }) {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: (isDarkMode ? Colors.dark : Colors.light).titleText,
                tabBarInactiveTintColor: (isDarkMode ? Colors.dark : Colors.light).tint,
                tabBarLabelStyle: {
                    fontSize: 14,
                    fontWeight: "500",
                    textTransform: "capitalize",
                },
                tabBarIndicatorStyle: {
                    backgroundColor: "#68DDBA",
                    height: 1.5,
                },
                tabBarItemStyle: {
                    width: 120,
                },
                tabBarStyle: {
                    margin: 20,
                    elevation: 0,
                },
                tabBarStyle: {
                    backgroundColor: (isDarkMode ? Colors.dark : Colors.light).background,
                },
            }}
            style={{
                backgroundColor: (isDarkMode ? Colors.dark : Colors.light).background,
            }}
        >
            <Tab.Screen name="Explore">
                {props => <ExploreScreen {...props} isDarkMode={isDarkMode} />}
            </Tab.Screen>
            <Tab.Screen name="Repo">
                {props => <RepoScreen {...props} isDarkMode={isDarkMode} />}
            </Tab.Screen>
        </Tab.Navigator>
    );
}

export default MyTabs;