
import React, { useState, useEffect } from "react";
import { View, Text,  TouchableOpacity, ImageBackground, Animated } from "react-native";
import { useNavigation } from "@react-navigation/native";
import homeStyles from "./homeScreenStyles";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [containerAnim] = useState(new Animated.Value(0));
  const [buttonAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.sequence([
      Animated.timing(
        containerAnim,
        {
          toValue: 1,
          duration: 3000,
          useNativeDriver: true,
        }
      ),
      Animated.timing(
        buttonAnim,
        {
          toValue: 1,
          duration: 3000,
          useNativeDriver: true,
        }
      )
    ]).start();
  }, []);

  const goToSignIn = () => {
    navigation.navigate("SignIn"); // Navigate to the Sign In screen
  };

  return (
    <ImageBackground 
      source={require("../assets/background.png")} // Replace with your background image
      style={homeStyles.background}
      resizeMode="cover"
    >
      <View style={homeStyles.wrapper}>
        <Animated.View style={[homeStyles.container, { opacity: containerAnim }]}>
          <Text style={homeStyles.title}>Welcome to AskBot! </Text>
          <Text style={[homeStyles.description, homeStyles.text]}>
            AskBot is your go-to Q&A assistant powered by TensorFlow. 🔍
          </Text>
          <Text style={[homeStyles.description, homeStyles.text]}>
            Simply provide a context and your question, and AskBot will find the answer from it for you. 💬
          </Text>
        </Animated.View>
        <Animated.View style={[homeStyles.buttonContainer, { opacity: buttonAnim }]}>
          <TouchableOpacity style={homeStyles.button} onPress={goToSignIn}>
            <Text style={homeStyles.buttonText}>Let's Get Started</Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    </ImageBackground>
  );
};

export default HomeScreen;
