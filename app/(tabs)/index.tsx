import {
  Button,
  Dimensions,
  Modal,
  ScrollView,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import RepoCard from "@/components/RepoCard";

const Page = () => {
  const windowWidth = Dimensions.get("window").width - 60;
  const windowHeight = Dimensions.get("window").height;
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

        <View>
          <Button title="View" onPress={() => setModalVisible(!modalVisible)} />
        </View>
      </View>

      <Modal
        animationType="slide"
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
                backgroundColor: "red",
              }}
            ></View>
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
