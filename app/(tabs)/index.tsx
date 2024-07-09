import {
  Button,
  Dimensions,
  FlatList,
  Modal,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import RepoCard from "@/components/RepoCard";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const Page = () => {
  const windowWidth = Dimensions.get("window").width - 60;
  const windowHeight = Dimensions.get("window").height;

  const [view, setView] = useState(10);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <ScrollView
      style={{
        backgroundColor: "white",
      }}
    >
      <View
        style={{
          width: windowWidth,
          alignSelf: "center",
          marginVertical: 28,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: 600,
          }}
        >
          Explore popular
        </Text>

        <Pressable
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
            backgroundColor: "white",
            elevation: 5,
            borderRadius: 9,
            width: 140,
            paddingVertical: 5,
            marginTop: 23,
          }}
          onPress={() => setModalVisible(!modalVisible)}
        >
          <Text
            style={{
              color: "#7B848D",
            }}
          >
            View :{" "}
          </Text>
          <Text>Top {view}</Text>
          <MaterialIcons name="keyboard-arrow-down" size={20} color="black" />
        </Pressable>
      </View>

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View
          style={{
            position: "relative",
          }}
        >
          <View
            style={{
              backgroundColor: "black",
              width: windowWidth + 60,
              height: windowHeight,
              opacity: 0.5,
            }}
          ></View>

          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              width: windowWidth + 60,
              height: windowHeight,
              position: "absolute",
              bottom: 0,
              left: 0,
            }}
          >
            <View
              style={{
                height: 250,
                width: windowWidth,
                backgroundColor: "white",
                borderRadius: 13,
                padding: 21,
              }}
            >
              <View
                style={{
                  marginBottom: 21,
                  justifyContent: "space-between",
                  flexDirection: "row",
                }}
              >
                <Text
                  style={{
                    fontWeight: 500,
                  }}
                >
                  View
                </Text>

                <Pressable onPress={() => setModalVisible(!modalVisible)}>
                  <View
                    style={{
                      backgroundColor: "#CCD4DD",
                      borderRadius: 50,
                      padding: 2,
                    }}
                  >
                    <Feather name="x" size={18} color="white" />
                  </View>
                </Pressable>
              </View>
              <View>
                <FlatList
                  data={[10, 50, 100]}
                  renderItem={({ item }) => (
                    <Pressable
                      onPress={() => {
                        setView(item);
                        setModalVisible(!modalVisible);
                      }}
                    >
                      <Text>
                        Top:{" "}
                        <Text
                          style={{
                            fontWeight: "bold",
                          }}
                        >
                          {item}
                        </Text>
                      </Text>
                    </Pressable>
                  )}
                  ItemSeparatorComponent={() => (
                    <View
                      style={{
                        backgroundColor: "black",
                        height: 0.5,
                        marginVertical: 20,
                      }}
                    />
                  )}
                />
              </View>
            </View>
          </View>
        </View>
      </Modal>

      <RepoCard
        windowWidth={windowWidth}
        image={"../../assets/images/70931.jpg"}
      />
      <RepoCard windowWidth={windowWidth} image={""} />
    </ScrollView>
  );
};

export default Page;
