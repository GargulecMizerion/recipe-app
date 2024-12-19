import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import recipes from '../assets/recipes.js';

export default function HomeScreen({ navigation }) {
    const viewRecipe = (recipeName) => {
        navigation.navigate("Details", { recipeName });
    };

    const renderItem = ({ item }) => (
        <View style={{ flexDirection: 'row', padding: 10, borderBottomWidth: 1, alignItems: 'center' }}>
            <Image
                source={{ uri: item.image }}
                style={{ width: 60, height: 60, borderRadius: 10 }}
            />
            <View style={{ flex: 1, marginLeft: 10 }}>
                <Text style={{ fontWeight: 'bold' }}>{item.name}</Text>
                <Text>{item.time}</Text>
            </View>
            <TouchableOpacity onPress={() => viewRecipe(item.name)}>
                <View style={{ paddingHorizontal: 10, paddingVertical: 5, backgroundColor: '#1E90FF', borderRadius: 5 }}>
                    <Text style={{ color: '#fff', fontWeight: 'bold' }}>View Recipe</Text>
                </View>
            </TouchableOpacity>
        </View>
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
