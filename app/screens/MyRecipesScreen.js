import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { getFromStorage, removeFavorite } from '../utils/storage'; // Importujemy funkcję do pobierania i usuwania danych

export default function MyRecipesScreen() {
    const [favorites, setFavorites] = useState([]);

    // Pobierz ulubione przepisy z AsyncStorage
    useEffect(() => {
        const fetchFavorites = async () => {
            const storedFavorites = await getFromStorage('favorites');
            if (storedFavorites) {
                setFavorites(storedFavorites);
            }
        };
        fetchFavorites();
    }, []);

    // Funkcja do usuwania przepisu z ulubionych
    const handleRemoveFavorite = async (recipeId) => {
        await removeFavorite(recipeId); // Usuwamy przepis z ulubionych
        setFavorites(prevFavorites => prevFavorites.filter(item => item.id !== recipeId)); // Usuwamy przepis z listy wyświetlanej
    };

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => console.log(`Wyświetl przepis: ${item.name}`)}>
            <View style={{ padding: 15, borderBottomWidth: 1 }}>
                <Text style={{ fontSize: 18 }}>{item.name}</Text>
                <Text style={{ color: 'gray' }}>{item.time}</Text>
                <TouchableOpacity onPress={() => handleRemoveFavorite(item.id)}>
                    <Text style={{ color: 'red', marginTop: 10 }}>Usuń z ulubionych</Text>
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={{ padding: 20 }}>
            <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Moje przepisy</Text>
            {favorites.length > 0 ? (
                <FlatList
                    data={favorites}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id.toString()}
                />
            ) : (
                <Text>Brak ulubionych przepisów.</Text>
            )}
        </View>
    );
}
