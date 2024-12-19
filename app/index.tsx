import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import HomeScreen from './screens/HomeScreen';
import CategoriesScreen from './screens/CategoriesScreen';
import MyRecipesScreen from './screens/MyRecipesScreen';
import ProfileScreen from './screens/ProfileScreen';
import DetailsScreen from './screens/DetailsScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function BottomTabNav() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Przepisy" component={HomeScreen} />
            <Tab.Screen name="Kategorie" component={CategoriesScreen} />
            <Tab.Screen name="Moje przepisy" component={MyRecipesScreen} />
            <Tab.Screen name="Profil" component={ProfileScreen} />
        </Tab.Navigator>
    );
}

export default function App() {
    return (

        <Stack.Navigator>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
            <Stack.Screen name="Home" component={BottomTabNav} />
            <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>

    );
}
