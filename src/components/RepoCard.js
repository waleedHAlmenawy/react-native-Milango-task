import { View, Text, Image, Dimensions } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

import { formatDistanceToNow, parseISO } from 'date-fns';
import { Colors } from "../constants/colors";

function timeSince(dateString) {
    const date = parseISO(dateString);
    const msg = formatDistanceToNow(date, { addSuffix: true });

    return msg.charAt(0).toUpperCase() + msg.substring(1);
}

const RepoCard = ({
    windowWidth,
    item,
    isExplore,
    isDarkMode
}) => {
    return (
        <View
            style={{
                alignItems: "center",
            }}
        >
            <View
                style={{
                    width: windowWidth,
                    backgroundColor: (isDarkMode ? Colors.dark : Colors.light).background,
                    shadowColor: "grey",
                    borderRadius: 13,
                    elevation: (isDarkMode ? 0 : 10),
                    marginBottom: 20,
                }}
            >
                {(item?.owner.avatar_url) && isExplore ? (
                    <Image
                        source={{ uri: item?.owner.avatar_url }}
                        style={{
                            width: windowWidth,
                            height: 200,
                            borderTopRightRadius: 13,
                            borderTopLeftRadius: 13,
                        }}
                    />
                ) : (
                    ""
                )}

                <View
                    style={{
                        gap: 18,
                        padding: 20,
                    }}
                >
                    {isExplore ? (<View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 10,
                                fontWeight: "500",
                                color: (isDarkMode ? Colors.dark : Colors.light).text,
                            }}
                        >
                            Trending repository
                        </Text>

                        <View
                            style={{
                                width: 100,
                                flexDirection: "row",
                                justifyContent: "space-between",
                            }}
                        >
                            <View
                                style={{
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    width: "40%",
                                }}
                            >
                                <AntDesign name="staro" size={12} color="#68DDBA" />
                                <Text
                                    style={{
                                        fontSize: 12,
                                        fontWeight: "500",
                                        color: (isDarkMode ? Colors.dark : Colors.light).text,
                                    }}
                                >
                                    Star
                                </Text>
                            </View>

                            <Text
                                style={{
                                    fontSize: 12,
                                    fontWeight: "500",
                                    color: (isDarkMode ? Colors.dark : Colors.light).mainColor,
                                    backgroundColor: (isDarkMode ? Colors.dark : Colors.light).secColor,
                                    paddingHorizontal: 8,
                                    paddingVertical: 6,
                                    borderRadius: 6,
                                }}
                            >
                                {(item?.stargazers_count / 1000).toFixed(1)}K
                            </Text>
                        </View>
                    </View>) : ""}

                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                        }}
                    >
                        <AntDesign
                            name="book"
                            size={20}
                            color="#68DDBA"
                            style={{
                                marginRight: 6,
                            }}
                        />
                        <Text
                            style={{
                                fontSize: 18,
                                fontWeight: "600",
                                width: 250,
                                color: (isDarkMode ? Colors.dark : Colors.light).titleText,
                            }}
                        >
                            {item?.full_name}
                        </Text>
                    </View>

                    {item?.description && (<Text
                        style={{
                            fontSize: 12,
                            color: (isDarkMode ? Colors.dark : Colors.light).text,
                        }}
                    >
                        {item?.description}
                    </Text>)}

                    <View
                        style={{
                            backgroundColor: "#CCD4DD",
                            height: 1,
                        }}
                    ></View>

                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center"
                        }}
                    >
                        {isExplore ? (<Text
                            style={{
                                marginRight: 32,
                                fontSize: 12,
                                color: (isDarkMode ? Colors.dark : Colors.light).text,
                            }}
                        >{item?.created_at ? timeSince(item.created_at) : ""}
                        </Text>) : ""}
                        <Text
                            style={{
                                fontSize: 12,
                                color: (isDarkMode ? Colors.dark : Colors.light).text,
                            }}
                        >
                            {item?.language}
                        </Text>

                        {
                            !isExplore && (
                                <View
                                    style={{
                                        flexDirection: "row",
                                        alignItems: "center",
                                        marginLeft: 20,
                                        gap: 20
                                    }}
                                >
                                    <View style={{
                                        flexDirection: "row",
                                        alignItems: "center",
                                        gap: 5
                                    }}>
                                        <AntDesign name="staro" size={12} color="#68DDBA" />
                                        <Text style={{
                                            color: (isDarkMode ? Colors.dark : Colors.light).text,
                                        }}>
                                            40,000
                                        </Text>
                                    </View>

                                    <View style={{
                                        flexDirection: "row",
                                        alignItems: "center",
                                        gap: 5
                                    }}>
                                        <AntDesign name="fork" size={12} color="#68DDBA" />
                                        <Text style={{
                                            color: (isDarkMode ? Colors.dark : Colors.light).text,
                                        }}>
                                            40,000
                                        </Text>
                                    </View>
                                </View>)
                        }
                    </View>
                </View>
            </View>
        </View>
    );
};

export default RepoCard;
