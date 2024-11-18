import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from './pages/SplashScreen/SplashScreen';
import Login from './pages/Authentication/Login';
import Register from './pages/Authentication/Register';
import Dashboard from './pages/Dashboard';
import Order from "./pages/Order";
import Checkout from "./pages/Checkout";

const App = () => {

  const Stack = createStackNavigator();

  return(
    <NavigationContainer>

      {/*Starting point */}
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen
          name="SplashScreen"
          component= {SplashScreen}
          options={{ headerShown: false}}
        />

        {/*Login page*/}
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />

        {/*Register page*/}
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        />

        {/*Dashboard page*/}
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

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;