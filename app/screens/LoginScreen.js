import React from 'react';
import { View, Text, Button } from 'react-native';

export default function LoginScreen({ navigation }) {
    return (
        <View>
            <Text>Ekran logowania</Text>
            <Button title="Zaloguj się" onPress={() => navigation.replace('Home')} />
            <Button title="Przejdź do rejestracji" onPress={() => navigation.navigate('Register')} />
        </View>
    );
}
