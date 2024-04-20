import { StyleSheet } from "react-native";

const screenStyles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: "#FDCEDF",
  },
  input: {
    height: 100, 
    width: "100%",
    borderColor: "#d45182", 
    borderWidth: 2, 
    borderRadius: 10, 
    paddingHorizontal: 10, 
    marginTop: 10, 
    marginBottom: 20,
  },
  questionInput: {
    textAlignVertical: 'top', // Align text at the top-left corner
    fontWeight: "bold",
  },
  answerContainer: {
    backgroundColor: "#EAEAEA",
    padding: 20,
    borderRadius: 10,
    marginBottom: 10,
    width: "40%",
  },
  answerText: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: "center",
    color: "#d45182",
    fontWeight: "bold",
  },
  scoreText: {
    fontSize: 14,
    color: "black",
    textAlign: "center",
    fontStyle: "italic",
  },
  button: {
    backgroundColor: "#d45182",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
    marginBottom: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  promptText: {
    fontSize: 18,
    marginTop: 0,
    textAlign: "justify",
    justifyContent: "center",
    color: "black",
    marginBottom: 30,
    marginTop: 40,
    fontWeight: "bold",
  },
});

export default screenStyles;