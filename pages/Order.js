import React, { useState } from "react";
import { ScrollView, View, Text, TouchableOpacity, FlatList, StyleSheet } from "react-native";
import menuData from "./MenuData/Menu";
import Navbar from "../components/Navbar";

const Order = ({ navigation }) => {
    const [cart, setCart] = useState([]);
    const [expanded, setExpanded] = useState({});

    const addToCart = (item) => {
        setCart([...cart, item]);
    };

    const toggleExpand = (category) => {
        setExpanded((prev) => ({ ...prev, [category]: !prev[category] }));
    };

    const renderMenuItem = ({ item }) => (
        <View style={styles.menuItem}>
            <Text style={styles.itemText}>{item.name} - R{item.price}</Text>
            <TouchableOpacity
                style={styles.addButton}
                onPress={() => addToCart(item)}
                activeOpacity={0.8}
            >
                <Text style={styles.addText}>Add to Cart</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={{ flex: 1, backgroundColor: "#f3f4f6" }}>
            <ScrollView>
                <Text style={styles.pageTitle}>Order</Text>
                <FlatList
                    data={menuData}
                    keyExtractor={(item) => item.category}
                    renderItem={({ item }) => (
                        <View style={styles.categoryContainer}>
                            <TouchableOpacity
                                onPress={() => toggleExpand(item.category)}
                                activeOpacity={0.8}
                            >
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
                        <TouchableOpacity
                            style={styles.checkoutButton}
                            onPress={() => navigation.navigate("Checkout", { cart })}
                            activeOpacity={0.8}
                        >
                            <Text style={styles.checkoutText}>Go to Checkout</Text>
                        </TouchableOpacity>
                    }
                />
            </ScrollView>
            <Navbar activeTab="Order" />
        </View>
    );
};

export default Order;

const styles = StyleSheet.create({
    pageTitle: {
        fontSize: 28,
        fontWeight: "bold",
        textAlign: "center",
        marginVertical: 30,
        color: "#1f2937",
    },
    categoryContainer: {
        padding: 15,
        backgroundColor: "#ffffff",
        marginHorizontal: 10,
        marginBottom: 15,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    categoryTitle: {
        fontSize: 20,
        fontWeight: "600",
        color: "#111827",
        marginBottom: 10,
    },
    menuItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#e5e7eb",
    },
    itemText: {
        fontSize: 16,
        color: "#374151",
    },
    addButton: {
        backgroundColor: "#2563eb",
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5,
    },
    addText: {
        color: "#ffffff",
        fontSize: 14,
        fontWeight: "bold",
    },
    checkoutButton: {
        backgroundColor: "#10b981",
        padding: 15,
        borderRadius: 10,
        margin: 20,
        alignItems: "center",
    },
    checkoutText: {
        color: "#ffffff",
        fontSize: 18,
        fontWeight: "bold",
    },
});
