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
                onPress={() => navigation.navigate('Dashboard')}
            >
                <AntDesign name="home" size={24} color="#0891b2" />
                <Text style={styles.tabText}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.tabbarItem}
                onPress={() => navigation.navigate('Order')}
            >
                <AntDesign name="profile" size={24} color="#737373" />
                <Text style={styles.tabText}>Order</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.tabbarItem}
                onPress={() => navigation.navigate('Checkout', { cart: [] })}
            >
                <AntDesign name="shoppingcart" size={24} color="#737373" />
                <Text style={styles.tabText}>Checkout</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.tabbarItem}
                onPress={() => navigation.navigate('Profile')}
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
