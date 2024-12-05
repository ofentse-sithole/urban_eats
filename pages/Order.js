import React, { useState } from "react";
import { View, Text, TouchableOpacity, FlatList, StyleSheet, Button } from "react-native";
import menuData from "./MenuData/Menu";
import Navbar from "../components/Navbar";

const Order = ({ navigation }) => {
    const [cart, setCart] = useState([]);
    const [expanded, setExpanded] = useState({});

    // Function to handle item addition to cart
    const addToCart = (item) => {
        setCart([...cart, item]);
    };

    const toggleExpand = (category) => {
        setExpanded((prev) => ({ ...prev, [category]: !prev[category] }));
    };

    const renderMenuItem = ({ item }) => (
        <View style={styles.menuItem}>
            <Text style={styles.itemText}>{item.name} - R{item.price}</Text>
            <TouchableOpacity style={styles.addButton} onPress={() => addToCart(item)}>
                <Text style={styles.addText}>Add to Cart</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={{ flex: 1, paddingTop: 40 }}>
            <Text style={styles.pageTitle}>Order</Text>
            <FlatList
                data={menuData}
                keyExtractor={(item) => item.category}
                renderItem={({ item }) => (
                    <View style={styles.categoryContainer}>
                        <TouchableOpacity onPress={() => toggleExpand(item.category)}>
                            <Text style={styles.categoryTitle}>{item.category}</Text>
                        </TouchableOpacity>
                        {expanded[item.category] && (
                            <FlatList
                                data={item.items}
                                keyExtractor={(item, index) => `${item.name}-${index}`}
                                renderItem={renderMenuItem}
                            />
                        )}
                    </View>
                )}
                ListFooterComponent={
                    <Button
                        title="Go to Checkout"
                        onPress={() => navigation.navigate("Checkout", { cart })}
                    />
                }
            />
            <Navbar activeTab="Order" />
        </View>
    );
};

export default Order;

const styles = StyleSheet.create({
    pageTitle: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 20,
        color: "#333",
    },
    categoryContainer: {
        padding: 15,
        backgroundColor: "#f8f8f8",
        marginBottom: 20,
    },
    categoryTitle: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#333",
    },
    menuItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 10,
    },
    itemText: {
        fontSize: 16,
        color: "#555",
    },
    addButton: {
        backgroundColor: "#0891b2",
        padding: 5,
        borderRadius: 5,
    },
    addText: {
        color: "white",
    },
});
