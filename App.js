import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome } from "@expo/vector-icons"; 
import SignUpScreen from "./components/signUpScreen";
import SignInScreen from "./components/signInScreen";
import HomeScreen from "./components/homeScreen";
import QnAScreen from "./components/objectDetectionScreen";

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = "home";
            } else if (route.name === "SignIn") {
              iconName = "sign-in";
            } else if (route.name === "SignUp") {
              iconName = "user-plus";
            } else if (route.name === "QnAScreen") {
              iconName = "question";
            }

            return <FontAwesome name={iconName} color={color} size={size} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "#d45182", // Set the active tab color to #d45182
          tabBarStyle: {
            display: "flex",
          },
        }}
      >
        <Tab.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{
            title: "Home"
          }}
        />
        <Tab.Screen
          name="SignIn"
          component={SignInScreen}
          options={{
            title: "SignIn"
          }}
        />
        <Tab.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{
            title: "SignUp"
          }}
        />
        <Tab.Screen 
          name="QnAScreen" 
          component={QnAScreen}
          options={{
            title: "QnA"
          }} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;