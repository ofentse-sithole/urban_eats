import React from 'react';
import { View, Text, StyleSheet, Dimensions, ImageBackground } from 'react-native';
import Navbar from '../components/Navbar';

const Dashboard = ({ username = "User" }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.welcomeText}>Welcome, {username}!</Text>
            <View style={styles.gridContainer}>
                <View style={styles.gridRow}>
                    <ImageBackground source={require('../assets/img/grid1.png')} style={styles.gridItem} imageStyle={styles.imageBackground}>
                        <Text style={styles.gridText}>Fries</Text>
                    </ImageBackground>
                    <ImageBackground source={require('../assets/img/grid6.jpeg')} style={styles.gridItem} imageStyle={styles.imageBackground}>
                        <Text style={styles.gridText}>Kota Range</Text>
                    </ImageBackground>
                </View>
                <View style={styles.gridRow}>
                    <ImageBackground source={require('../assets/img/grid5.jpeg')} style={styles.gridItem} imageStyle={styles.imageBackground}>
                        <Text style={styles.gridText}>Burgers</Text>
                    </ImageBackground>
                    <ImageBackground source={require('../assets/img/grid4.png')} style={styles.gridItem} imageStyle={styles.imageBackground}>
                        <Text style={styles.gridText}>Meals</Text>
                    </ImageBackground>
                </View>
                <View style={styles.gridRow}>
                    <ImageBackground source={require('../assets/img/grid3.png')} style={styles.gridItem} imageStyle={styles.imageBackground}>
                        <Text style={styles.gridText}>Quesadilla</Text>
                    </ImageBackground>
                </View>
            </View>

            <Navbar/>
        </View>
    );
};

const { width } = Dimensions.get('window');
const gridSize = width * 0.4; // Adjust size for grid items (40% of screen width)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        backgroundColor: '#ffffff',
        alignItems: 'center',
    },
    welcomeText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#333',
    },
    gridContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    gridRow: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    gridItem: {
        width: gridSize,
        height: gridSize,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        borderRadius: 10,
        overflow: 'hidden',  // Ensures the image respects the border radius
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 1.5,
        elevation: 3,
    },
    imageBackground: {
        borderRadius: 10,  // Apply border radius to the background image
    },
    gridText: {
        fontSize: 16,
        color: '#fff',
        fontWeight: 'bold',
        textShadowColor: '#000', // Optional: Adds text shadow for better readability
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 1,
    },
});

export default Dashboard;
