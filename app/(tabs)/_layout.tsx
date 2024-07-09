import { View, Text } from "react-native";
import React from "react";
import {
  createMaterialTopTabNavigator,
  MaterialTopTabNavigationOptions,
  MaterialTopTabNavigationEventMap,
} from "@react-navigation/material-top-tabs";

import { withLayoutContext } from "expo-router";
import { ParamListBase, TabNavigationState } from "@react-navigation/native";
import { Provider } from "react-redux";
import store from "../store";

const { Navigator } = createMaterialTopTabNavigator();

export const MaterialTopTabs = withLayoutContext<
  MaterialTopTabNavigationOptions,
  typeof Navigator,
  TabNavigationState<ParamListBase>,
  MaterialTopTabNavigationEventMap
>(Navigator);

const Layout = () => {
  return (
    <Provider store={store}>
      <MaterialTopTabs
        screenOptions={{
          tabBarActiveTintColor: "#2B1190",
          tabBarInactiveTintColor: "#7B848D",
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
        }}
        style={{
          backgroundColor: "white",
        }}
      >
        <MaterialTopTabs.Screen
          name="index"
          options={{
            title: "Explore",
          }}
        />
      </MaterialTopTabs>
    </Provider>
  );
};

export default Layout;
