import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { Image, Switch, View } from 'react-native';
import { Provider } from 'react-redux';
import { Colors } from './src/constants/colors';
import MyTabs from './src/navigation/TopTab';
import store from './src/redux/store';

const Stack = createNativeStackNavigator();

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleSwitch = () => setIsDarkMode(previousState => !previousState);
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShadowVisible: false,
            headerLeft: () => (
              <Image
                source={isDarkMode ? require("./assets/dark.png") : require("./assets/milango-logo.png")}
                style={{
                  marginLeft: 20,
                }}
              />
            ),

            headerRight: () => (
              <Switch
                trackColor={{ false: '#767577', true: '#767577' }}
                thumbColor={isDarkMode ? '#000' : '#fff'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isDarkMode}
              />
            ),

            headerTitle: () => <View></View>,

            headerStyle: {
              backgroundColor: (isDarkMode ? Colors.dark : Colors.light).background
            }
          }}
        >
          <Stack.Screen
            name="Home"
          >
            {props => <MyTabs {...props} isDarkMode={isDarkMode} />}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
