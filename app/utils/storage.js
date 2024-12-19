import AsyncStorage from '@react-native-async-storage/async-storage';

// Klucz dla ulubionych przepisów
const FAVORITES_KEY = 'favorites';
const RECENT_KEY = 'recent';

// Zapisz dane
export const saveToStorage = async (key, value) => {
    try {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem(key, jsonValue);
    } catch (e) {
        console.error('Error saving data:', e);
    }
};

// Pobierz dane
export const getFromStorage = async (key) => {
    try {
        const jsonValue = await AsyncStorage.getItem(key);
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
        console.error('Error fetching data:', e);
    }
};

// Dodaj do ulubionych
export const addFavorite = async (recipe) => {
    const favorites = (await getFromStorage(FAVORITES_KEY)) || [];
    if (!favorites.some((item) => item.id === recipe.id)) {
        favorites.push(recipe);
        await saveToStorage(FAVORITES_KEY, favorites);
    }
};

// Usuń z ulubionych
export const removeFavorite = async (recipeId) => {
    const favorites = (await getFromStorage(FAVORITES_KEY)) || [];
    const updatedFavorites = favorites.filter((item) => item.id !== recipeId);
    await saveToStorage(FAVORITES_KEY, updatedFavorites);
};

// Dodaj do ostatnio przeglądanych
export const addRecent = async (recipe) => {
    const recents = (await getFromStorage(RECENT_KEY)) || [];
    recents.unshift(recipe); // Dodaj na początek
    const uniqueRecents = recents.filter((v, i, a) => a.findIndex((t) => t.id === v.id) === i);
    await saveToStorage(RECENT_KEY, uniqueRecents.slice(0, 10)); // Maksymalnie 10 ostatnich
};
