import React, { useEffect, useState } from "react";
import {
    ActivityIndicator,
    Dimensions,
    FlatList,
    ScrollView,
    Text,
    View
} from "react-native";
import ViewModal from "../components/ViewModal";
import RepoCard from "../components/RepoCard";
import { useDispatch, useSelector } from 'react-redux';
import { fetchRepositories } from '../redux/actions';
import EmptyState from "../components/EmptyState";
import LoadingState from "../components/LoadingState";
import { Colors } from "../constants/colors";

const ExploreScreen = ({ isDarkMode }) => {
    const [view, setView] = useState(10);

    const dispatch = useDispatch();
    const { loading, repositories, error } = useSelector(state => state.repositories);

    useEffect(() => {
        dispatch(fetchRepositories(view, "", ""));
    }, [dispatch, view]);

    if (loading) {
        return <LoadingState isDarkMode={isDarkMode} />;
    }

    if (error) {
        return <Text>Error: {error.message}</Text>;
    }

    return (
        <View style={{
            ...styles.mainContainer,
            backgroundColor: (isDarkMode ? "black" : "white"),
        }}>
            <View style={styles.cardsContainer}>
                <Text style={{
                    ...styles.title,
                    color: (isDarkMode ? Colors.dark : Colors.light).text
                }}>Explore popular</Text>

                <ViewModal
                    view={view}
                    setView={setView}
                    windowWidth={windowWidth}
                    windowHeight={windowHeight}
                    isDarkMode={isDarkMode}
                />
            </View>

            <FlatList
                data={repositories}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <RepoCard
                        windowWidth={windowWidth}
                        item={item}
                        isExplore={true}
                        isDarkMode={isDarkMode}
                    />
                )}
                ListEmptyComponent={() => (<EmptyState isDarkMode={isDarkMode} />)}
            />
        </View>
    );
};

const windowWidth = Dimensions.get("window").width - 60;
const windowHeight = Dimensions.get("window").height;

const styles = {
    mainContainer: {
        flex: 1
    },

    cardsContainer: {
        width: windowWidth,
        alignSelf: "center",
        marginVertical: 28,
    },

    title: {
        fontSize: 20,
        fontWeight: 600,
    },
};

export default ExploreScreen;
