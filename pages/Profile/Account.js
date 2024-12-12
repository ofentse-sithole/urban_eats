import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Account = () => {
    const navigation = useNavigation();

    // User details state
    const [userDetails, setUserDetails] = useState({
        name: 'John',
        surname: 'Doe',
        mobileNumber: '1234567890',
        email: 'johndoe@example.com',
    });

    // Edit mode state
    const [isEditing, setIsEditing] = useState(false);

    // Handle input change
    const handleChange = (key, value) => {
        setUserDetails(prevState => ({
            ...prevState,
            [key]: value,
        }));
    };

    return (
        <View style={styles.container}>
            {/* Back Button */}
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <Icon name="arrow-left" size={20} color="#4B5563" />
            </TouchableOpacity>

            {/* Header */}
            <Text style={styles.header}>Account Details</Text>

            {/* User Details Form */}
            <View style={styles.formContainer}>
                <Text style={styles.label}>Name</Text>
                <TextInput
                    style={[styles.input, isEditing ? styles.editableInput : {}]}
                    value={userDetails.name}
                    editable={isEditing}
                    onChangeText={text => handleChange('name', text)}
                />

                <Text style={styles.label}>Surname</Text>
                <TextInput
                    style={[styles.input, isEditing ? styles.editableInput : {}]}
                    value={userDetails.surname}
                    editable={isEditing}
                    onChangeText={text => handleChange('surname', text)}
                />

                <Text style={styles.label}>Mobile Number</Text>
                <TextInput
                    style={[styles.input, isEditing ? styles.editableInput : {}]}
                    value={userDetails.mobileNumber}
                    editable={isEditing}
                    keyboardType="phone-pad"
                    onChangeText={text => handleChange('mobileNumber', text)}
                />

                <Text style={styles.label}>Email</Text>
                <TextInput
                    style={[styles.input, isEditing ? styles.editableInput : {}]}
                    value={userDetails.email}
                    editable={isEditing}
                    keyboardType="email-address"
                    onChangeText={text => handleChange('email', text)}
                />
            </View>

            {/* Action Buttons */}
            {isEditing ? (
                <TouchableOpacity style={styles.saveButton} onPress={() => setIsEditing(false)}>
                    <Text style={styles.saveButtonText}>Save</Text>
                </TouchableOpacity>
            ) : (
                <TouchableOpacity style={styles.editButton} onPress={() => setIsEditing(true)}>
                    <Text style={styles.editButtonText}>Edit</Text>
                </TouchableOpacity>
            )}
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
    formContainer: {
        marginBottom: 30,
    },
    label: {
        fontSize: 16,
        fontWeight: '600',
        color: '#374151',
        marginBottom: 5,
    },
    input: {
        fontSize: 16,
        color: '#6B7280',
        backgroundColor: '#F9FAFB',
        borderRadius: 8,
        padding: 10,
        marginBottom: 15,
        borderWidth: 1,
        borderColor: '#E5E7EB',
    },
    editableInput: {
        borderColor: '#3B82F6',
        backgroundColor: '#FFFFFF',
    },
    editButton: {
        backgroundColor: '#3B82F6',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
    },
    editButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '600',
    },
    saveButton: {
        backgroundColor: '#10B981',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
    },
    saveButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '600',
    },
});

export default Account;
