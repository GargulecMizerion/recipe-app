import React from 'react';
import { View, Text, Button } from 'react-native';
import recipes from '../assets/recipes.js';


export default function DetailsScreen({ route }) {
    const { recipeTitle } = route.params;
    const recipe = recipes.find(r => r.title === recipeTitle);

    if (!recipe) {
        return <Text>Przepis nie znaleziony</Text>;
    }

    return (
        <View style={{ padding: 20 }}>
            <Text style={{ fontSize: 24, fontWeight: 'bold' }}>{recipe.name}</Text>
            <Text style={{ fontSize: 18, marginVertical: 10 }}>{recipe.time}</Text>
            <Text>{recipe.details}</Text>
        </View>
    );
}