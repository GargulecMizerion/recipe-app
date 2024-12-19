import React from 'react';
import { View, Text, Button, FlatList, Image } from 'react-native';
import recipes from '../assets/recipes.js';
import {ListItem} from "react-native-elements"; // Załaduj dane przepisy

export default function HomeScreen({ navigation }) {

    // Funkcja obsługująca kliknięcie przycisku "View Recipe"
    const viewRecipe = (recipeName) => {
        navigation.navigate("Details", { recipeName });
    };

    // Funkcja renderująca każdy element listy
    const renderItem = ({ item }) => (
        <ListItem style={{ flexDirection: 'row', padding: 10, borderBottomWidth: 1 }}>
            <Image
                source={{ uri: item.image }}
                style={{ width: 60, height: 60, borderRadius: 10 }}
            />

            <View style={{ flex: 1, marginLeft: 10 }}>
                <Text style={{ fontWeight: 'bold' }}>{item.name}</Text>
                <Text>{item.time}</Text>
            </View>

            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Button
                    title="View Recipe"
                    onPress={() => viewRecipe(item.name)}
                    color="#1E90FF"
                />
            </View>
        </ListItem>
    );

    return (
        <View style={{ flex: 1, paddingTop: 20 }}>
            <FlatList
                data={recipes}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
}
