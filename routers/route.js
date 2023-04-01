import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Index from '../src';

function HomeScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Home!</Text>
        </View>
    );
}

function SettingsScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Settings!</Text>
        </View>
    );
}

const Tab = createBottomTabNavigator();

export default function MyStack() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                tabBarOptions={{ showLabel: false }}
                screenOptions={({ route }) => ({

                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === 'information') {
                            iconName = focused
                                ? 'ios-home'
                                : 'ios-home-outline';
                        } else if (route.name === 'Settings') {

                            iconName = focused ? 'ios-person' : 'ios-person-outline';

                        } else if (route.name === 'pesquisa') {

                            iconName = focused ? 'ios-search' : 'ios-search-outline';

                        } else if (route.name === 'cart') {
                            iconName = focused ? 'ios-cart' : 'ios-cart-outline';

                        }

                        // You can return any component that you like here!
                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: 'blue',
                    tabBarInactiveTintColor: 'blue',

                })

                }


            >
                <Tab.Screen name="information" component={Index} options={{ headerTransparent: true, showLabel: false, }} />
                <Tab.Screen name="pesquisa" component={SettingsScreen} />
                <Tab.Screen name="cart" component={SettingsScreen} />
                <Tab.Screen name="Settings" component={SettingsScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}