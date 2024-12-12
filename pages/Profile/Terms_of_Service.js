import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Terms_Of_Service = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            {/* Back Button */}
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <Icon name="arrow-left" size={20} color="#4B5563" />
            </TouchableOpacity>

            {/* Terms of Service Header */}
            <Text style={styles.header}>Terms of Service</Text>

            {/* Terms Content */}
            <View style={styles.contentContainer}>
                <Text style={styles.paragraph}>
                    Welcome to our fast food restaurant located at 906 Block DD, Soshanguve, Pine Street. By dining with us or
                    utilizing our delivery services, you agree to the following terms of service.
                </Text>

                <Text style={styles.sectionHeader}>Operating Hours</Text>
                <Text style={styles.paragraph}>
                    Our restaurant operates from 11:00 AM to 6:00 PM, Monday to Saturday. We are closed on Sundays to allow our
                    staff to rest and recharge.
                </Text>

                <Text style={styles.sectionHeader}>Delivery Services</Text>
                <Text style={styles.paragraph}>
                    We offer delivery services within a designated area. Delivery times are subject to order volume and traffic
                    conditions. Additional charges may apply for deliveries.
                </Text>

                <Text style={styles.sectionHeader}>Liability</Text>
                <Text style={styles.paragraph}>
                    While we strive to maintain the highest quality standards, we are not liable for any delays or issues caused by
                    factors beyond our control, including but not limited to traffic, weather conditions, or third-party services.
                </Text>

                <Text style={styles.sectionHeader}>Contact Information</Text>
                <Text style={styles.paragraph}>
                    For any inquiries or feedback, feel free to contact us during operating hours. We value your patronage and
                    always aim to provide excellent service.
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 20,
        paddingTop: 40,
    },
    backButton: {
        marginBottom: 20,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#111827',
        marginBottom: 20,
    },
    contentContainer: {
        flex: 1,
    },
    sectionHeader: {
        fontSize: 18,
        fontWeight: '600',
        color: '#374151',
        marginTop: 20,
    },
    paragraph: {
        fontSize: 16,
        color: '#6B7280',
        marginTop: 10,
        lineHeight: 24,
    },
});

export default Terms_Of_Service;
