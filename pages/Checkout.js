import React, { useState } from "react";
import { View, Text, Button, FlatList, StyleSheet } from "react-native";
import Navbar from "../components/Navbar";

const Checkout = ({ route }) => {
    const { cart } = route.params;  // cart is passed via navigation
    const [deliveryOption, setDeliveryOption] = useState("pickup");

    const handlePayment = () => {
        // Implement payment logic here
        alert("Proceeding to Payment");
    };

    return (
        <View style={[stylesCheckout.container, { paddingTop: 40 }]}>
            <Text style={stylesCheckout.title}>Checkout</Text>

            <Text style={stylesCheckout.total}>
                Total: R{cart.reduce((acc, item) => acc + item.price, 0)}
            </Text>

            <Button
                title="Select Delivery Option"
                onPress={() => setDeliveryOption(deliveryOption === "pickup" ? "delivery" : "pickup")}
            />

            <Text style={stylesCheckout.deliveryOption}>
                Delivery Option: {deliveryOption === "pickup" ? "Pick Up" : "Delivery"}
            </Text>

            <Button title="Proceed to Payment" onPress={handlePayment} />

            <FlatList
                data={cart}
                keyExtractor={(item, index) => `${item.name}-${index}`}
                renderItem={({ item }) => (
                    <Text style={stylesCheckout.cartItem}>
                        {item.name} - R{item.price}
                    </Text>
                )}
            />

            <Navbar activeTab="Checkout" />
        </View>
    );
};

export default Checkout;

const stylesCheckout = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
    },
    cartItem: {
        fontSize: 16,
        marginVertical: 5,
    },
    total: {
        fontSize: 18,
        fontWeight: "bold",
        marginTop: 20,
    },
    deliveryOption: {
        marginTop: 10,
        fontSize: 16,
    },
});
