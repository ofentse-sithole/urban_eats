import React, { useState } from "react";
import { View, Text, Button, FlatList, StyleSheet } from "react-native";

const Checkout = ({ route }) => {
    const { cart } = route.params;
    const [deliveryOption, setDeliveryOption] = useState("pickup");

    const handlePayment = () => {
        // Implement payment logic here
        alert("Proceeding to Payment");
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Checkout</Text>
            <FlatList
                data={cart}
                keyExtractor={(item, index) => `${item.name}-${index}`}
                renderItem={({ item }) => (
                    <Text style={styles.cartItem}>
                        {item.name} - R{item.price}
                    </Text>
                )}
            />
            <Text style={styles.total}>Total: R{cart.reduce((acc, item) => acc + item.price, 0)}</Text>
            <Button title="Select Delivery Option" onPress={() => setDeliveryOption(deliveryOption === "pickup" ? "delivery" : "pickup")} />
            <Text style={styles.deliveryOption}>Delivery Option: {deliveryOption === "pickup" ? "Pick Up" : "Delivery"}</Text>
            <Button title="Proceed to Payment" onPress={handlePayment} />
        </View>
    );
};

export default Checkout;

const styles = StyleSheet.create({
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
