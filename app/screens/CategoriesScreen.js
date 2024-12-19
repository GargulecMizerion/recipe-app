import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Collapsible from 'react-native-collapsible';
import recipes from "../assets/recipes";

const CategoriesScreen = () => {
    const [collapsedSoup, setCollapsedSoup] = useState(true);
    const [collapsedDessert, setCollapsedDessert] = useState(true);

    const toggleSoup = () => setCollapsedSoup(!collapsedSoup);
    const toggleDessert = () => setCollapsedDessert(!collapsedDessert);

    const filterRecipesByCategory = (recipes, category) => {
        return recipes.filter(recipe => recipe.category === category);
    };

    const soups = filterRecipesByCategory(recipes, "Zupa");
    const desserts = filterRecipesByCategory(recipes, "Deser");

    return (
        <View style={styles.container}>
            {/* Desery */}
            <View style={styles.section}>

                <Button title="Desery" onPress={toggleDessert} />
                <Collapsible collapsed={collapsedDessert}>

                    {desserts.map((dessert) => (
                        <Text key={dessert.id} style={styles.text}>{dessert.name}</Text>
                    ))}
                </Collapsible>
            </View>

            {/* Zupy */}
            <View style={styles.section}>
                <Button title="Zupy" onPress={toggleSoup} />
                <Collapsible collapsed={collapsedSoup}>
                    {/* Wyświetlanie nazw przepisów z kategorii 'Zupa' */}
                    {soups.map((soup) => (
                        <Text key={soup.id} style={styles.text}>{soup.name}</Text>
                    ))}
                </Collapsible>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f7f7f7',
    },
    section: {
        marginBottom: 20,
    },
    text: {
        fontSize: 18,
        marginLeft: 20,
        marginTop: 10,
    },
});

export default CategoriesScreen;
