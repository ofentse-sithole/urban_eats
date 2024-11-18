import React, { useState } from "react";
import { View, Text, TouchableOpacity, FlatList, StyleSheet, Button } from "react-native";
import menuData from "./MenuData/Menu";

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
    );
};

export default Order;

const styles = StyleSheet.create({
    categoryContainer: {
        padding: 10,
        backgroundColor: "#f8f8f8",
        marginBottom: 10,
    },
    categoryTitle: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#333",
    },
    menuItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 5,
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
