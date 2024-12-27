import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from './pages/SplashScreen/SplashScreen';
import Login from './pages/Authentication/Login';
import Register from './pages/Authentication/Register';
import Dashboard from './pages/Dashboard';
import Order from "./pages/Order";
import Checkout from "./pages/Checkout";
import Profile from './pages/Profile';
import Account from './pages/Profile/Account';
import Terms_of_Service from './pages/Profile/Terms_of_Service';
import About from './pages/Profile/About';
import { CartProvider } from "./pages/CartContext";

const App = () => {
  const Stack = createStackNavigator();

  return (
    <CartProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="SplashScreen">
          <Stack.Screen
            name="SplashScreen"
            component={SplashScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Register"
            component={Register}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Dashboard"
            component={Dashboard}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Order"
            component={Order}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Checkout"
            component={Checkout}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Profile"
            component={Profile}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Terms_of_Service"
            component={Terms_of_Service}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="About"
            component={About}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Account"
            component={Account}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
};

export default App;
