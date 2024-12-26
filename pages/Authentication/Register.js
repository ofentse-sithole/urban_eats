import React from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    ImageBackground,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Register = () => {
    const navigation = useNavigation();

    return (
        <ImageBackground
            source={require('../../assets/img/background.png')} // Replace with your background image path
            style={styles.background}
           resizeMode="cover"
           >
            <View style={styles.overlay}>
                <View style={styles.container}>
                    <Text style={styles.title}>Create Account</Text>
                    <Text style={styles.subtitle}>Register to get started</Text>

                    <TextInput
                        style={styles.input}
                        placeholder="Username"
                        placeholderTextColor="#a1a1a1"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        placeholderTextColor="#a1a1a1"
                        keyboardType="email-address"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        placeholderTextColor="#a1a1a1"
                        secureTextEntry
                    />

                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate('Login')}
                    >
                        <Text style={styles.buttonText}>Register</Text>
                    </TouchableOpacity>

                    <Text style={styles.loginText}>
                        Already have an account?
                    </Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Login')}
                    >
                        <Text style={styles.loginLink}>Login Here</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
    },
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.6)', // Semi-transparent overlay
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        width: '90%',
        padding: 20,
        backgroundColor: '#ffffff',
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 10,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#2563eb',
        textAlign: 'center',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        color: '#4b5563',
        textAlign: 'center',
        marginBottom: 30,
    },
    input: {
        width: '100%',
        padding: 15,
        marginBottom: 15,
        borderWidth: 1,
        borderColor: '#d1d5db',
        borderRadius: 10,
        backgroundColor: '#f9fafb',
        fontSize: 16,
        color: '#1f2937',
    },
    button: {
        backgroundColor: '#2563eb',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginVertical: 15,
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    loginText: {
        fontSize: 16,
        color: '#6b7280',
        textAlign: 'center',
    },
    loginLink: {
        fontSize: 16,
        color: '#2563eb',
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 10,
    },
});

export default Register;
