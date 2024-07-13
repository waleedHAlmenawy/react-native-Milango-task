import { Feather, MaterialIcons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import {
    ActivityIndicator,
    Dimensions,
    FlatList,
    Modal,
    Pressable,
    Text,
    TextInput,
    View
} from "react-native";
import DatePicker from "react-native-modern-datepicker";
import { useDispatch, useSelector } from 'react-redux';
import RepoCard from "../components/RepoCard";
import { fetchRepositories } from '../redux/actions';
import EmptyState from "../components/EmptyState";
import LoadingState from "../components/LoadingState";
import { Colors } from "../constants/colors";

const RepoScreen = ({ isDarkMode }) => {
    const windowWidth = Dimensions.get("window").width - 60;
    const windowHeight = Dimensions.get("window").height;

    const [lang, setLang] = useState("");
    const [date, setDate] = useState("");

    const [langs, setLangs] = useState([]);
    const [programmingLanguages, setProgrammingLanguages] = useState([]);
    const [langModalVisible, setLangModalVisible] = useState(false);
    const [dateModalVisible, setDateModalVisible] = useState(false);

    const [repos, setRepos] = useState([]);

    const handleFromatDate = (date) => {
        const inputDate = new Date(date);

        const day = inputDate.getDate();
        const month = inputDate.toLocaleString("default", { month: "short" });
        const year = inputDate.getFullYear().toString().slice(-2);

        return `${day} ${month} ${year}`;
    };

    const dispatch = useDispatch();
    const { loading, repositories, error } = useSelector(state => state.repositories);

    useEffect(() => {
        dispatch(fetchRepositories(100, date.replaceAll("/", "-")));
    }, [date]);

    useEffect(() => {
        setProgrammingLanguages(() => [...new Set(repositories.map((item) => {
            if (item.language) return item.language
        }))].filter((lang) => lang));
        setLang("");
        setRepos([...repositories]);
    }, [repositories])

    useEffect(() => {
        setRepos(repositories.filter((repo) => repo.language === lang));
    }, [lang])

    if (loading) {
        return <LoadingState isDarkMode={isDarkMode} />;
    }

    if (error) {
        return <Text>Error: {error.message}</Text>;
    }

    return (
        <View
            style={{
                backgroundColor: isDarkMode ? "black" : "white",
                flex: 1
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
                        color: (isDarkMode ? Colors.dark : Colors.light).text,
                    }}
                >
                    Repositories
                </Text>

                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-around",
                        gap: 10,
                    }}
                >
                    <Pressable
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-evenly",
                            alignItems: "center",
                            backgroundColor: (isDarkMode ? Colors.dark : Colors.light).background,
                            elevation: 5,
                            borderRadius: 9,
                            paddingVertical: 5,
                            marginTop: 23,
                            paddingHorizontal: 10,
                            flex: 1
                        }}
                        onPress={() => setLangModalVisible(!langModalVisible)}
                    >
                        <Text
                            style={{
                                color: (isDarkMode ? Colors.dark : Colors.light).tint,
                            }}
                        >
                            Language :{" "}
                        </Text>
                        <Text style={{
                            color: (isDarkMode ? Colors.dark : Colors.light).text,

                        }}>
                            {lang
                                ? lang.length > 8
                                    ? lang.substring(0, 8 - 3) + "..."
                                    : lang
                                : "Any"}
                        </Text>
                        <MaterialIcons name="keyboard-arrow-down" size={20} color={isDarkMode ? "white" : "black"} />
                    </Pressable>

                    <Pressable
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-evenly",
                            alignItems: "center",
                            backgroundColor: (isDarkMode ? Colors.dark : Colors.light).background,
                            elevation: 5,
                            borderRadius: 9,
                            paddingVertical: 5,
                            marginTop: 23,
                            paddingHorizontal: 10,
                            flex: 1

                        }}
                        onPress={() => setDateModalVisible(!dateModalVisible)}
                    >
                        <Text
                            style={{
                                color: (isDarkMode ? Colors.dark : Colors.light).tint,
                            }}
                        >
                            Date :{" "}
                        </Text>
                        <Text style={{
                            color: (isDarkMode ? Colors.dark : Colors.light).text,
                        }}>
                            {date ? handleFromatDate(date.replaceAll("/", "-")) : "Any"}
                        </Text>
                        <MaterialIcons name="keyboard-arrow-down" size={20} color={isDarkMode ? "white" : "black"} />
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
                                backgroundColor: (isDarkMode ? Colors.dark : Colors.light).background,
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
                                        color: (isDarkMode ? Colors.dark : Colors.light).text,
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
                                        <Feather name="x" size={18} color={isDarkMode ? "black" : "white"} />
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
                                    placeholderTextColor={isDarkMode ? "#7B848D" : "#CCD4DD"}
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
                                            <Text style={{
                                                color: (isDarkMode ? Colors.dark : Colors.light).text,
                                            }}>{item}</Text>
                                        </Pressable>
                                    )}
                                    ItemSeparatorComponent={() => (
                                        <View
                                            style={{
                                                backgroundColor: (isDarkMode ? Colors.dark : Colors.light).line,
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
                                width: windowWidth,
                                backgroundColor: (isDarkMode ? Colors.dark : Colors.light).background,
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
                                        color: (isDarkMode ? Colors.dark : Colors.light).text,
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
                                        <Feather name="x" size={18} color={isDarkMode ? "black" : "white"} />
                                    </View>
                                </Pressable>
                            </View>

                            <View>
                                <DatePicker
                                    mode="calendar"
                                    selected={date}
                                    onDateChange={(dateProps) => {

                                        setDate(dateProps);
                                        setDateModalVisible(!dateModalVisible);
                                    }}
                                    options={{
                                        backgroundColor: (isDarkMode ? Colors.dark : Colors.light).background
                                        ,
                                        textHeaderColor: (isDarkMode ? Colors.dark : Colors.light).text,
                                        textDefaultColor: (isDarkMode ? Colors.dark : Colors.light).text,
                                        selectedTextColor: (isDarkMode ? Colors.dark : Colors.light).text,
                                        mainColor: '#68DDBA',
                                        textSecondaryColor: '#ffffff',
                                    }}
                                />
                            </View>
                        </View>
                    </View>
                </View>
            </Modal>

            <FlatList
                data={repos}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <RepoCard
                        windowWidth={windowWidth}
                        item={item}
                        isExplore={false}
                        isDarkMode={isDarkMode}
                    />
                )}
                ListEmptyComponent={() => (<EmptyState isDarkMode={isDarkMode} />)}
            />
        </View >
    );
};

export default RepoScreen;
