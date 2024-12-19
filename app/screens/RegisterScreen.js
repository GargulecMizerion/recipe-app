import React from 'react';
import { View, Text, Button } from 'react-native';

export default function RegisterScreen({ navigation }) {
    return (
        <View>
            <Text>Ekran rejestracji</Text>
            <Button title="Zarejestruj się" onPress={() => navigation.replace('Home')} />
            <Button title="Przejdź do logowania" onPress={() => navigation.navigate('Login')} />
        </View>
    );
}
