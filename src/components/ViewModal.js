import { Feather, MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { FlatList, Modal, Pressable, Text, View } from "react-native";
import { Colors } from "../constants/colors";

const ViewModal = ({ view, setView, windowWidth, windowHeight, isDarkMode }) => {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View>
            <Pressable
                style={{
                    ...styles.button,
                    backgroundColor: (isDarkMode ? Colors.dark : Colors.light).background,
                }}
                onPress={() => setModalVisible(!modalVisible)}
            >
                <Text style={{
                    color: (isDarkMode ? Colors.dark : Colors.light).tint
                }}>View : </Text>
                <Text style={{
                    color: (isDarkMode ? Colors.dark : Colors.light).text
                }}>Top {view}</Text>
                <MaterialIcons name="keyboard-arrow-down" size={20} color={(isDarkMode ? Colors.dark : Colors.light).text} />
            </Pressable>

            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.modalMainContainer}>
                    <View
                        style={{
                            ...styles.modalBackground,
                            width: windowWidth + 60,
                            height: windowHeight,
                        }}
                    ></View>

                    <View
                        style={{
                            ...styles.modalContainer,
                            width: windowWidth + 60,
                            height: windowHeight,
                        }}
                    >
                        <View style={{
                            ...styles.modalBody, width: windowWidth,
                            backgroundColor: (isDarkMode ? Colors.dark : Colors.light).background,
                        }}>
                            <View style={styles.modalHeader}>
                                <Text style={{
                                    ...styles.modalHeaderText,
                                    color: (isDarkMode ? Colors.dark : Colors.light).text
                                }}>View</Text>

                                <Pressable onPress={() => setModalVisible(!modalVisible)}>
                                    <View style={styles.modalExitIcon}>
                                        <Feather name="x" size={18} color={isDarkMode ? "black" : "white"} />
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
                                            <Text style={{
                                                color: (isDarkMode ? Colors.dark : Colors.light).text,
                                            }}>
                                                Top: <Text style={styles.modalBodyText}>{item}</Text>
                                            </Text>
                                        </Pressable>
                                    )}
                                    ItemSeparatorComponent={() => (
                                        <View style={{
                                            ...styles.modalBodySeparator,
                                            backgroundColor: (isDarkMode ? Colors.dark : Colors.light).line,
                                        }} />
                                    )}
                                />
                            </View>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = {
    button: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        elevation: 5,
        borderRadius: 9,
        width: 140,
        paddingVertical: 5,
        marginTop: 23,
    },

    modalMainContainer: {
        position: "relative",
    },

    modalBackground: {
        backgroundColor: "black",
        opacity: 0.5,
    },

    modalContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        bottom: 0,
        left: 0,
    },

    modalBody: {
        height: 250,
        borderRadius: 13,
        padding: 21,
    },

    modalHeader: {
        marginBottom: 21,
        justifyContent: "space-between",
        flexDirection: "row",
    },

    modalHeaderText: {
        fontWeight: 500,
    },

    modalExitIcon: {
        backgroundColor: "#CCD4DD",
        borderRadius: 50,
        padding: 2,
    },

    modalBodyText: {
        fontWeight: "bold",
    },

    modalBodySeparator: {
        height: 0.5,
        marginVertical: 20,
    },
};

export default ViewModal;
