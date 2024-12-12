import React from 'react';
import { StatusBar, View, Text, TouchableOpacity, StyleSheet, ScrollView, Dimensions, SafeAreaView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const { width } = Dimensions.get('window');

const About = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.safeContainer}>
            <StatusBar
                barStyle="dark-content"
                backgroundColor="#FFFFFF"
                translucent={Platform.OS === 'android'}
            />

            <View style={styles.container}>
                {/* Header with Back Button */}
                <View style={styles.headerContainer}>
                    <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                        <Icon name="arrow-left" size={20} color="#374151" />
                    </TouchableOpacity>
                    <Text style={styles.headerText}>About Us</Text>
                </View>

                <ScrollView style={styles.scrollContainer} contentContainerStyle={{ paddingBottom: 80 }}>
                    <Text style={styles.title}>Welcome to Urban Eats</Text>

                    <Text style={styles.paragraph}>
                        At Urban Eats, we believe that food is not just a necessity but an experience to be savored and enjoyed.
                        Our mission is to bring joy to your table by providing delicious, high-quality meals prepared with the freshest
                        ingredients. Whether you're looking for a quick bite or a gourmet feast, we've got something to satisfy every craving.
                    </Text>

                    <Text style={styles.subtitle}>Our Story</Text>
                    <Text style={styles.paragraph}>
                        Founded in 2015, Urban Eats started as a small family-owned kitchen with a passion for creating
                        mouthwatering dishes that bring people together. Over the years, we have grown into a beloved culinary destination
                        known for our diverse menu and commitment to excellence. From classic comfort food to innovative culinary creations,
                        our team of skilled chefs works tirelessly to craft meals that delight the senses.
                    </Text>

                    <Text style={styles.subtitle}>What We Offer</Text>
                    <Text style={styles.paragraph}>
                        Our menu is designed to cater to a wide variety of tastes and dietary preferences. We offer:
                    </Text>
                    <Text style={styles.listItem}>- Hearty breakfasts to start your day right</Text>
                    <Text style={styles.listItem}>- Flavorful lunches for a midday boost</Text>
                    <Text style={styles.listItem}>- Sumptuous dinners for a satisfying end to your day</Text>
                    <Text style={styles.listItem}>- Delectable desserts to satisfy your sweet tooth</Text>
                    <Text style={styles.listItem}>- A selection of vegan, vegetarian, and gluten-free options</Text>

                    <Text style={styles.subtitle}>Our Values</Text>
                    <Text style={styles.paragraph}>
                        At Urban Eats, we are guided by the following principles:
                    </Text>
                    <Text style={styles.listItem}>- **Freshness**: We use only the freshest, high-quality ingredients.
                    </Text>
                    <Text style={styles.listItem}>- **Innovation**: Constantly exploring new recipes and flavors.
                    </Text>
                    <Text style={styles.listItem}>- **Sustainability**: Commitment to eco-friendly practices.
                    </Text>
                    <Text style={styles.listItem}>- **Customer Satisfaction**: Ensuring every meal is a memorable experience.
                    </Text>

                    <Text style={styles.paragraph}>
                        Thank you for choosing Urban Eats. We look forward to serving you and making every meal special.
                    </Text>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeContainer: {
        flex: 1,
        backgroundColor: '#F3F4F6',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        backgroundColor: '#FFFFFF',
        borderBottomWidth: 1,
        borderBottomColor: '#E5E7EB',
    },
    backButton: {
        marginRight: 15,
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#111827',
    },
    scrollContainer: {
        paddingHorizontal: 20,
        paddingTop: 10,
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#111827',
        marginVertical: 10,
    },
    paragraph: {
        fontSize: 16,
        color: '#374151',
        marginBottom: 15,
        lineHeight: 22,
    },
    subtitle: {
        fontSize: 20,
        fontWeight: '600',
        color: '#111827',
        marginVertical: 10,
    },
    listItem: {
        fontSize: 16,
        color: '#374151',
        marginBottom: 10,
        marginLeft: 10,
    },
});

export default About;
