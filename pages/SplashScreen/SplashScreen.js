import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SplashScreen = () => {
    const navigation = useNavigation();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.replace('Login'); // Navigate to the Login screen after 3 seconds
        }, 3000);

        return () => clearTimeout(timer); // Cleanup the timer on unmount
    }, [navigation]);

    return (
        <ImageBackground
            source={require('../../assets/img/background.png')} // Replace with your background image path
            style={styles.background}
            resizeMode="cover"
        >
            <View style={styles.container}>
                <Image
                    source={require('../../assets/img/profile_picture-removebg-preview_2.png')} // Replace with your main image path
                    style={styles.image}
                    resizeMode="contain"
                />
                <View style={styles.textContainer}>
                    <Text style={styles.text}>from Erence Developers
                        {/*<Image
                            source={require('../../assets/img/logo.png')} // Replace with your logo path
                            style={styles.logo}
                            resizeMode="contain"
                        />*/}
                    </Text>
                </View>
            </View>
        </ImageBackground>
    );
};

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: width * 1.0,  // Responsive width (90% of the screen width)
        height: height * 0.8, // Responsive height (50% of the screen height)
        marginBottom: 20,
    },
    textContainer: {
        position: 'absolute',
        bottom: 20, // Position it slightly above the bottom edge
        flexDirection: 'row',
        alignItems: 'center',
    },
    logo: {
        width: 80,  // Adjust width for logo size
        height: 80, // Adjust height for logo size
        marginLeft: 5, // Spacing between text and logo
    },
    text: {
        fontSize: 15,
        color: '#888',
        textAlign: 'center',
    },
});

export default SplashScreen;