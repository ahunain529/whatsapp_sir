import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MatIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Countries from './src/screens/countries';
import Cities from './src/screens/cities';
import HomeScreen from './src/screens/tabs/home';
import SettingsScreen from './src/screens/tabs/settings';
import MapScreen from './src/screens/tabs/map';
import ProfileScreen from './src/screens/tabs/profile';

function App(): React.JSX.Element {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  const HomeNavigation = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Countries" component={Countries} />
        <Stack.Screen name="Cities" component={Cities} />
      </Stack.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Main"
          component={HomeNavigation}
          options={{
            headerTitle: 'My Home',
            tabBarLabel: 'My Home',
            tabBarIcon: (props: any) => (
              <MatIcons name="home" size={30} color="#900" />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            tabBarIcon: ({tintColor}: any) => <MatIcons name="cog" size={30} />,
          }}
        />
        <Tab.Screen
          name="Map"
          component={MapScreen}
          options={{
            tabBarIcon: (props: any) => (
              <MatIcons name="map-marker" size={30} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: (props: any) => <MatIcons name="account" size={30} />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
