import { View, Text, Image, Dimensions } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

const RepoCard = ({
  image,
  windowWidth,
}: {
  image: string | null;
  windowWidth: number;
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
          backgroundColor: "white",
          shadowColor: "grey",
          borderRadius: 13,
          elevation: 10,
          marginBottom: 20,
        }}
      >
        {/* {image ? (
    <Image
      source={{ uri: image }}
      style={{
        marginLeft: 20,
      }}
    />
  ) : (
    ""
  )} */}
        {image ? (
          <Image
            source={require("../assets/images/70931.jpg")}
            style={{
              width: windowWidth,
              height: 160,
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
          <View
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
                color: "#7B848D",
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
                  }}
                >
                  Star
                </Text>
              </View>

              <Text
                style={{
                  fontSize: 12,
                  fontWeight: "500",
                  color: "#2B1190",
                  backgroundColor: "#E7E3F2",
                  paddingHorizontal: 8,
                  paddingVertical: 6,
                  borderRadius: 6,
                }}
              >
                40.5K
              </Text>
            </View>
          </View>

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
                color: "#2B1190",
              }}
            >
              novak-99/ MLPP
            </Text>
          </View>

          <Text
            style={{
              fontSize: 12,
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, eos.
            Alias nisi iste sed, maxime ad labore quae magni, nam fugit
            architecto odit culpa repellat magnam tempore ipsum voluptates
            eligendi?
          </Text>

          <View
            style={{
              backgroundColor: "#CCD4DD",
              height: 1,
            }}
          ></View>

          <View
            style={{
              flexDirection: "row",
            }}
          >
            <Text
              style={{
                marginRight: 32,
                fontSize: 12,
              }}
            >
              Updated 12 hours ago
            </Text>
            <Text
              style={{
                fontSize: 12,
              }}
            >
              C++
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default RepoCard;
