import React from 'react';
import { View, Text, StyleSheet, Dimensions, ImageBackground, FlatList, TouchableOpacity } from 'react-native';
import Navbar from '../components/Navbar';

const mockData = [
    {
        id: '1',
        title: 'Fries',
        image: require('../assets/img/grid1.png'),
        status: 'Closed',
        rating: '4.5',
        reviews: '400+',
    },
    {
        id: '2',
        title: 'Meals',
        image: require('../assets/img/grid4.png'),
        status: 'Open',
        rating: '4.7',
        reviews: '300+',
    },
    {
        id: '3',
        title: 'Quesadilla',
        image: require('../assets/img/grid3.png'),
        status: 'Closed',
        rating: '4.6',
        reviews: '250+',
    },
    {
        id: '4',
        title: 'Kota Range',
        image: require('../assets/img/grid6.jpeg'),
        status: 'Closed',
        rating: '4.6',
        reviews: '250+',
    },
    {
        id: '5',
        title: 'Burgers',
        image: require('../assets/img/grid5.jpeg'),
        status: 'Closed',
        rating: '4.6',
        reviews: '250+',
    },
];

const Dashboard = ({ username = 'User', navigation }) => {
    const handlePress = (category) => {
        navigation.navigate('Order', { category }); 
    };

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => handlePress(item.title)} activeOpacity={0.8}>
            <View style={styles.card}>
                <ImageBackground source={item.image} style={styles.cardImage}>
                    <View style={styles.overlay}>
                        <Text style={styles.statusText}>{item.status}</Text>
                    </View>
                </ImageBackground>
                <View style={styles.cardInfo}>
                    <Text style={styles.cardTitle}>{item.title}</Text>
                    <View style={styles.ratingContainer}>
                        <Text style={styles.ratingText}>{item.rating}⭐</Text>
                        <Text style={styles.reviewText}>({item.reviews})</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            {/* Welcome Text */}
            <View style={styles.header}>
                <Text style={styles.welcomeText}>Welcome, {username}!</Text>
            </View>

            {/* Main Content: List of Cards */}
            <FlatList
                data={mockData}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.list}
            />

            {/* Navbar */}
            <Navbar />
        </View>
    );
};

const { width } = Dimensions.get('window');
const cardWidth = width * 0.9; // 90% of screen width

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        alignItems: 'center',
        paddingVertical: 20,
        backgroundColor: '#f3f4f6',
        marginTop: 20, // Added space at the top
    },
    welcomeText: {
        fontSize: 24,
        color: '#000', // Changed to black
        fontWeight: 'bold',
    },
    list: {
        alignItems: 'center',
        paddingVertical: 20,
    },
    card: {
        width: cardWidth,
        backgroundColor: '#fff',
        borderRadius: 15,
        marginBottom: 20,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 5,
    },
    cardImage: {
        height: 180,
        justifyContent: 'flex-end',
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: 8,
        alignItems: 'center',
    },
    statusText: {
        fontSize: 14,
        color: '#fff',
        fontWeight: 'bold',
    },
    cardInfo: {
        padding: 15,
    },
    cardTitle: {
        fontSize: 18,
        color: '#000',
        fontWeight: 'bold',
        marginBottom: 8,
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    ratingText: {
        fontSize: 16,
        color: '#ffcc00',
        fontWeight: 'bold',
        marginRight: 5,
    },
    reviewText: {
        fontSize: 14,
        color: '#666',
    },
});

export default Dashboard;
