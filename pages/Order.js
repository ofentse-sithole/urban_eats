import React, { useState } from "react";
import { ScrollView, View, Text, TouchableOpacity, FlatList, StyleSheet, Dimensions } from "react-native";
import { useCart } from "./CartContext"; // Import the cart context
import menuData from "./MenuData/Menu";
import Navbar from "../components/Navbar";
import { MaterialIcons } from "@expo/vector-icons";

const Order = ({ navigation }) => {
    const { addToCart } = useCart(); // Use addToCart from context
    const [expanded, setExpanded] = useState({});

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
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <Text style={styles.pageTitle}>Order</Text>
                <FlatList
                    data={menuData}
                    keyExtractor={(item) => item.category}
                    renderItem={({ item }) => (
                        <View style={styles.categoryContainer}>
                            <TouchableOpacity
                                onPress={() => toggleExpand(item.category)}
                                activeOpacity={0.8}
                                style={styles.categoryHeader}
                            >
                                <Text style={styles.categoryTitle}>{item.category}</Text>
                                <MaterialIcons
                                    name={expanded[item.category] ? "keyboard-arrow-up" : "keyboard-arrow-down"}
                                    size={24}
                                    color="#111827"
                                />
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
                />
            </ScrollView>
            <Navbar activeTab="Order" />
        </View>
    );
};

export default Order;


const { width } = Dimensions.get("window");
const styles = StyleSheet.create({
    scrollViewContent: {
        alignItems: "center",
        paddingVertical: 20,
    },
    pageTitle: {
        fontSize: 28,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 20,
        marginVertical: 30,
        color: "#1f2937",
    },
    categoryContainer: {
        width: width * 0.9,
        padding: 15,
        backgroundColor: "#ffffff",
        marginBottom: 15,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    categoryHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 10,
    },
    categoryTitle: {
        fontSize: 20,
        fontWeight: "600",
        color: "#111827",
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
    arrowIcon: {
        marginLeft: 10,
    },
    dropdownItem: {
        backgroundColor: "#fef3c7",
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#facc15",
    },
});
