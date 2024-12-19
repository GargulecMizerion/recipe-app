import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import * as SecureStore from 'expo-secure-store';

export default function LoginScreen({ navigation }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        if (username && password) {
            try {
                // Pobierz dane z Secure Store
                const storedUsername = await SecureStore.getItemAsync('username');
                const storedPassword = await SecureStore.getItemAsync('password');

                // Sprawdź, czy dane wprowadzone przez użytkownika pasują do zapisanych
                if (username === storedUsername && password === storedPassword) {
                    Alert.alert('Logowanie', 'Zalogowano pomyślnie!');
                    navigation.navigate('Home'); // Po zalogowaniu, przejdź do ekranu głównego
                } else {
                    Alert.alert('Błąd', 'Niepoprawna nazwa użytkownika lub hasło');
                }
            } catch (error) {
                Alert.alert('Błąd', 'Wystąpił błąd podczas logowania');
                console.error(error);
            }
        } else {
            Alert.alert('Błąd', 'Proszę wypełnić wszystkie pola');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Ekran logowania</Text>

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

            {/* Przycisk logowania */}
            <Button title="Zaloguj się" onPress={handleLogin} />

            {/* Przycisk przejścia do rejestracji */}
            <Button title="Przejdź do rejestracji" onPress={() => navigation.navigate('Register')} />
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
