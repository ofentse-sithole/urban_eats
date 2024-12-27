import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { useCart } from "./CartContext"; // Import the cart context
import Navbar from "../components/Navbar";

const Checkout = () => {
    const { cart, updateCart } = useCart(); // Use cart from context
    const [deliveryOption, setDeliveryOption] = useState("pickup");

    // Function to remove an item from the cart
    const handleRemoveItem = (itemToRemove) => {
        const updatedCart = cart.filter((item, index) => index !== itemToRemove);
        updateCart(updatedCart);
    };

    const handlePayment = () => {
        alert("Proceeding to Payment");
    };

    const calculateTotal = () => {
        return cart.reduce((acc, item) => acc + item.price, 0).toFixed(2);
    };

    return (
        <View style={{ flex: 1, backgroundColor: "#f9fafb" }}>
            <ScrollView contentContainerStyle={styles.container}>
                <Text style={styles.title}>Checkout</Text>
                <View style={styles.summaryContainer}>
                    <Text style={styles.summaryText}>Order Summary</Text>
                    <FlatList
                        data={cart}
                        keyExtractor={(item, index) => `${item.name}-${index}`}
                        renderItem={({ item, index }) => (
                            <View style={styles.cartItem}>
                                <Text style={styles.itemName}>{item.name}</Text>
                                <Text style={styles.itemPrice}>R{item.price}</Text>
                                <TouchableOpacity
                                    style={styles.removeButton}
                                    onPress={() => handleRemoveItem(index)}
                                >
                                    <Text style={styles.removeButtonText}>Remove</Text>
                                </TouchableOpacity>
                            </View>
                        )}
                    />
                    <View style={styles.totalContainer}>
                        <Text style={styles.totalLabel}>Total:</Text>
                        <Text style={styles.totalAmount}>R{calculateTotal()}</Text>
                    </View>
                </View>
                <View style={styles.deliveryContainer}>
                    <Text style={styles.deliveryLabel}>Delivery Option:</Text>
                    <View style={styles.deliveryButtons}>
                        <TouchableOpacity
                            style={
                                deliveryOption === "pickup"
                                    ? styles.deliveryButtonActive
                                    : styles.deliveryButton
                            }
                            onPress={() => setDeliveryOption("pickup")}
                        >
                            <Text
                                style={
                                    deliveryOption === "pickup"
                                        ? styles.deliveryTextActive
                                        : styles.deliveryText
                                }
                            >
                                Pick Up
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={
                                deliveryOption === "delivery"
                                    ? styles.deliveryButtonActive
                                    : styles.deliveryButton
                            }
                            onPress={() => setDeliveryOption("delivery")}
                        >
                            <Text
                                style={
                                    deliveryOption === "delivery"
                                        ? styles.deliveryTextActive
                                        : styles.deliveryText
                                }
                            >
                                Delivery
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableOpacity style={styles.paymentButton} onPress={handlePayment}>
                    <Text style={styles.paymentText}>Proceed to Payment</Text>
                </TouchableOpacity>
            </ScrollView>
            <Navbar activeTab="Checkout" />
        </View>
    );
};

export default Checkout;

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 20,
        marginVertical: 30,
        color: "#1f2937",
    },
    summaryContainer: {
        backgroundColor: "#ffffff",
        borderRadius: 10,
        padding: 15,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        marginBottom: 20,
    },
    summaryText: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 15,
        color: "#1e293b",
    },
    cartItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#e5e7eb",
    },
    itemName: {
        fontSize: 16,
        color: "#374151",
    },
    itemPrice: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#111827",
    },
    removeButton: {
        padding: 5,
        backgroundColor: "#ef4444",
        borderRadius: 5,
    },
    removeButtonText: {
        color: "#ffffff",
        fontWeight: "bold",
    },
    totalContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 15,
    },
    totalLabel: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#1f2937",
    },
    totalAmount: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#10b981",
    },
    deliveryContainer: {
        marginBottom: 20,
    },
    deliveryLabel: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10,
        color: "#1f2937",
    },
    deliveryButtons: {
        flexDirection: "row",
        justifyContent: "space-around",
    },
    deliveryButton: {
        padding: 10,
        borderRadius: 5,
        backgroundColor: "#e5e7eb",
    },
    deliveryButtonActive: {
        padding: 10,
        borderRadius: 5,
        backgroundColor: "#10b981",
    },
    deliveryText: {
        fontSize: 16,
        color: "#1f2937",
    },
    deliveryTextActive: {
        fontSize: 16,
        color: "#ffffff",
        fontWeight: "bold",
    },
    paymentButton: {
        backgroundColor: "#2563eb",
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
    },
    paymentText: {
        color: "#ffffff",
        fontSize: 18,
        fontWeight: "bold",
    },
});
