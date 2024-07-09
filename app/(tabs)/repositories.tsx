import {
  Button,
  Dimensions,
  FlatList,
  Modal,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
import RepoCard from "@/components/RepoCard";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import DatePicker from "react-native-modern-datepicker";

const Repositories = () => {
  const windowWidth = Dimensions.get("window").width - 60;
  const windowHeight = Dimensions.get("window").height;

  const programmingLanguages = [
    "JavaScript",
    "Python",
    "Java",
    "C#",
    "C++",
    "Ruby",
    "Go",
    "Swift",
    "Kotlin",
    "PHP",
    "TypeScript",
    "Rust",
    "Objective-C",
    "Scala",
    "Perl",
    "R",
    "Dart",
    "Elixir",
    "Haskell",
    "Lua",
    "MATLAB",
    "VBA",
    "Groovy",
    "Clojure",
    "F#",
    "Shell",
    "Erlang",
    "Assembly",
    "SQL",
  ];

  const [lang, setLang] = useState("");
  const [date, setDate] = useState("");

  const [langs, setLangs] = useState([...programmingLanguages]);
  const [langModalVisible, setLangModalVisible] = useState(false);
  const [dateModalVisible, setDateModalVisible] = useState(false);

  const handleFromatDate = (date: string) => {
    const inputDate = new Date(date);

    const day = inputDate.getDate();
    const month = inputDate.toLocaleString("default", { month: "short" });
    const year = inputDate.getFullYear().toString().slice(-2);

    return `${day} ${month} ${year}`;
  };

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
          Repositories
        </Text>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            gap: 10,
          }}
        >
          <Pressable
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems: "center",
              backgroundColor: "white",
              elevation: 5,
              width: 160,
              borderRadius: 9,
              paddingVertical: 5,
              marginTop: 23,
            }}
            onPress={() => setLangModalVisible(!langModalVisible)}
          >
            <Text
              style={{
                color: "#7B848D",
              }}
            >
              Language :{" "}
            </Text>
            <Text>
              {lang
                ? lang.length > 8
                  ? lang.substring(0, 8 - 3) + "..."
                  : lang
                : "Any"}
            </Text>
            <MaterialIcons name="keyboard-arrow-down" size={20} color="black" />
          </Pressable>

          <Pressable
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems: "center",
              backgroundColor: "white",
              elevation: 5,
              width: 160,
              borderRadius: 9,
              paddingVertical: 5,
              marginTop: 23,
            }}
            onPress={() => setDateModalVisible(!dateModalVisible)}
          >
            <Text
              style={{
                color: "#7B848D",
              }}
            >
              Date :{" "}
            </Text>
            <Text>
              {date ? handleFromatDate(date.replaceAll("/", "-")) : "Any"}
            </Text>
            <MaterialIcons name="keyboard-arrow-down" size={20} color="black" />
          </Pressable>
        </View>
      </View>

      <Modal
        animationType="fade"
        transparent={true}
        visible={langModalVisible}
        onRequestClose={() => {
          setLangModalVisible(!langModalVisible);
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
                height: 450,
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
                  Select Language
                </Text>

                <Pressable
                  onPress={() => {
                    setLangModalVisible(!langModalVisible);
                    setLangs([...programmingLanguages]);
                  }}
                >
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
                <TextInput
                  style={{
                    borderWidth: 1,
                    borderColor: "#CCD4DD",
                    borderRadius: 9,
                    paddingHorizontal: 17,
                    paddingVertical: 5,
                    marginBottom: 17,
                  }}
                  placeholder="Filter Languages"
                  onChangeText={(text) => {
                    setLangs(() =>
                      programmingLanguages.filter((item) =>
                        item.toLowerCase().includes(text.toLowerCase())
                      )
                    );
                  }}
                />
              </View>
              <View>
                <FlatList
                  data={langs}
                  renderItem={({ item }) => (
                    <Pressable
                      onPress={() => {
                        setLang(item);
                        setLangs([...programmingLanguages]);
                        setLangModalVisible(!langModalVisible);
                      }}
                    >
                      <Text>{item}</Text>
                    </Pressable>
                  )}
                  ItemSeparatorComponent={() => (
                    <View
                      style={{
                        backgroundColor: "black",
                        height: 0.5,
                        marginVertical: 10,
                        width: "95%",
                        alignSelf: "center",
                      }}
                    />
                  )}
                  style={{
                    height: 300,
                  }}
                />
              </View>
            </View>
          </View>
        </View>
      </Modal>

      <Modal
        animationType="fade"
        transparent={true}
        visible={dateModalVisible}
        onRequestClose={() => {
          setDateModalVisible(!dateModalVisible);
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
                height: 450,
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
                  Select Language
                </Text>

                <Pressable
                  onPress={() => {
                    setDateModalVisible(!dateModalVisible);
                  }}
                >
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
                <DatePicker
                  mode="calendar"
                  selected={date}
                  onDateChange={(dateProps: any) => {
                    setDate(dateProps);
                    setDateModalVisible(!dateModalVisible);
                  }}
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

export default Repositories;
