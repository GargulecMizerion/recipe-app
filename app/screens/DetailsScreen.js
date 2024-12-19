import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { addFavorite, removeFavorite, getFromStorage } from '../utils/storage'; // Importujemy funkcje z utils/storage
import recipes from '../assets/recipes.js';

export default function DetailsScreen({ route }) {
    const { recipeName } = route.params;
    const recipe = recipes.find(r => r.name === recipeName);
    const [isFavorite, setIsFavorite] = useState(false);

    // Funkcja do dodania przepisu do ulubionych
    const handleAddFavorite = async () => {
        if (recipe) {
            await addFavorite(recipe); // Dodajemy przepis do ulubionych
            setIsFavorite(true);
        }
    };

    // Funkcja do usunięcia przepisu z ulubionych
    const handleRemoveFavorite = async () => {
        if (recipe) {
            await removeFavorite(recipe.id); // Usuwamy przepis z ulubionych
            setIsFavorite(false);
        }
    };

    useEffect(() => {
        // Jeśli przepis jest ulubiony, ustawiamy odpowiedni stan
        const checkIfFavorite = async () => {
            const favorites = await getFromStorage('favorites');
            if (favorites && favorites.some(item => item.id === recipe.id)) {
                setIsFavorite(true);
            }
        };
        checkIfFavorite();
    }, [recipe]);

    if (!recipe) {
        return (
            <View style={{ padding: 20 }}>
                <Text>Przepis nie znaleziony</Text>
            </View>
        );
    }

    return (
        <View style={{ padding: 20 }}>
            <Text style={{ fontSize: 24, fontWeight: 'bold' }}>{recipe.name}</Text>
            <Text style={{ fontSize: 18, marginVertical: 10 }}>{recipe.time}</Text>
            <Text>{recipe.details}</Text>
            {
                !isFavorite && (<Button
                    title={"Dodaj do ulubionych"}
                    onPress={handleAddFavorite}
                />)
            }

        </View>
    );
}
