import { StyleSheet } from "react-native";

const homeStyles = StyleSheet.create({
    background: {
      flex: 1,
      alignItems: "center",
      justifyContent: "flex-end", // Align content to the bottom
    },
    wrapper: {
      flex: 1,
      width: "100%",
      paddingHorizontal: 20, // Adjust left and right padding
      paddingBottom: 110, // Add margin to create space from the bottom
      justifyContent: "flex-end",
    },
    container: {
      backgroundColor: "rgba(255, 255, 255, 0.8)",
      paddingVertical: 50,
      borderRadius: 30,
      alignItems: "center",
      justifyContent: "center",
      shadowColor: "#fff",
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.27,
      shadowRadius: 4.65,
      elevation: 6,
      marginHorizontal: 20, // Add margin between the container and the screen
    },
    title: {
      fontSize: 32,
      fontWeight: "bold",
      marginBottom: 20,
      textAlign: "center",
      color: "#333",
    },
    description: {
      marginBottom: 15,
    },
    text: {
      fontSize: 18,
      color: "#555",
      textAlign: "center",
    },
    buttonContainer: {
      alignSelf: "center", // Align the container to the center horizontally
      marginTop: 20, // Add space between the container and the button
    },
    button: {
      backgroundColor: "rgba(255, 255, 255, 0.9)",
      paddingVertical: 15,
      paddingHorizontal: 40,
      borderRadius: 30,
    },
    buttonText: {
      color: "#d45182",
      fontSize: 18,
      fontWeight: "bold",
      textAlign: "center",
    },
  });

export default homeStyles;
