import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import * as SecureStore from 'expo-secure-store';

export default function RegisterScreen({ navigation }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async () => {
        if (username && password) {
            try {
                // Zapisz dane użytkownika do Secure Store
                await SecureStore.setItemAsync('username', username);
                await SecureStore.setItemAsync('password', password);

                Alert.alert('Rejestracja', 'Zarejestrowano pomyślnie!');
                navigation.navigate('Home'); // Po rejestracji, przejdź do ekranu głównego
            } catch (error) {
                Alert.alert('Błąd', 'Wystąpił błąd podczas rejestracji');
                console.error(error);
            }
        } else {
            Alert.alert('Błąd', 'Proszę wypełnić wszystkie pola');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Ekran rejestracji</Text>

            {/* Pole na nazwę użytkownika */}
            <TextInput
                style={styles.input}
                placeholder="Nazwa użytkownika"
                value={username}
                onChangeText={setUsername}
            />

            {/* Pole na hasło */}
            <TextInput
                style={styles.input}
                placeholder="Hasło"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />

            {/* Przycisk rejestracji */}
            <Button title="Zarejestruj się" onPress={handleRegister} />

            {/* Przycisk przejścia do logowania */}
            <Button title="Przejdź do logowania" onPress={() => navigation.navigate('Login')} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 15,
        paddingLeft: 10,
        borderRadius: 5,
    },
});
