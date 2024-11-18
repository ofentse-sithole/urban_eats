import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <TextInput 
                style={styles.input} 
                placeholder="Email" 
                keyboardType="email-address" 
            />
            <TextInput 
                style={styles.input} 
                placeholder="Password" 
                secureTextEntry 
            />
            <Button 
                title="Login" 
                onPress={() => navigation.navigate('Dashboard')}
            />
            <Text style={styles.registerText}>Don’t have an account?</Text>
            <Button 
                title="Register" 
                onPress={() => navigation.navigate('Register')} 
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        width: '100%',
        padding: 10,
        marginVertical: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
    },
    registerText: {
        marginTop: 20,
        fontSize: 16,
        color: '#888',
    },
});

export default Login;
