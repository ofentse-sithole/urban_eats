import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AntDesign, Feather } from '@expo/vector-icons';

const Navbar = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.tabbar}>
            <TouchableOpacity
                style={styles.tabbarItem}
                onPress={() => navigation.navigate('dashboard')}
            >
                <AntDesign name="home" size={24} color="#0891b2" />
                <Text style={styles.tabText}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.tabbarItem}
                onPress={() => navigation.navigate('order')}
            >
                <AntDesign name="search1" size={24} color="#737373" />
                <Text style={styles.tabText}>Explore</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.tabbarItem}
                onPress={() => navigation.navigate('checkout')}
            >
                <AntDesign name="pluscircleo" size={24} color="#737373" />
                <Text style={styles.tabText}>Create</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.tabbarItem}
                onPress={() => navigation.navigate('profile')}
            >
                <Feather name="user" size={24} color="#737373" />
                <Text style={styles.tabText}>Profile</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    tabbar: {
        position: 'absolute',
        bottom: 25,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        marginHorizontal: 20,
        paddingVertical: 15,
        borderRadius: 25,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 10 },
        shadowRadius: 10,
        shadowOpacity: 0.1,
    },
    tabbarItem: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    tabText: {
        color: '#737373',
        fontSize: 11,
    },
});

export default Navbar;
