import { Stack } from "expo-router";
import React from "react";
import { View, Image, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShadowVisible: false,
          headerLeft: () => (
            <Image
              source={require("../assets/images/milango-logo.png")}
              style={{
                marginLeft: 20,
              }}
            />
          ),

          headerRight: () => (
            <Pressable
              style={{
                marginRight: 20,
              }}
            >
              <AntDesign name="search1" size={24} color="black" />
            </Pressable>
          ),

          headerTitle: () => <View></View>,
        }}
      />
    </Stack>
  );
};

export default Layout;
