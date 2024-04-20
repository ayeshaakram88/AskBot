import React, { useState, useEffect } from "react"; // Importing React, useState, and useEffect from react
import { View, Text, TextInput, TouchableOpacity, Keyboard, ScrollView } from "react-native";
import * as tf from '@tensorflow/tfjs'; // Importing TensorFlow.js
import '@tensorflow/tfjs-react-native'; // Importing TensorFlow.js React Native backend
import * as qna from "@tensorflow-models/qna"; // Importing QnA model from TensorFlow.js
import screenStyles from "./objectDetectionScreenStyles"; // Renamed imported styles

// Component for Question and Answer Screen
const QnAScreen = () => {
  // State variables for answers, question, passage, and passageHeight
  const [answers, setAnswers] = useState([]);
  const [question, setQuestion] = useState("");
  const [passage, setPassage] = useState("");
  const [passageHeight, setPassageHeight] = useState(40); // Initial height of the passage input

  // Effect hook for initializing TensorFlow.js
  useEffect(() => {
    async function initializeTF() {
      await tf.ready();
      console.log("TensorFlow initialized");
    }
    initializeTF();
  }, []);

  // Function to handle passage content size change
  const onPassageContentSizeChange = (event) => {
    // Update the height of the passage input based on the content size
    setPassageHeight(event.nativeEvent.contentSize.height);
  };

  // Function to find answers using QnA model
  const findAnswers = async () => {
    try {
      console.log("Classifying");

      // Dismiss keyboard
      Keyboard.dismiss();

      // Clear previous answers
      setAnswers([]);

      const model = await qna.load();
      console.log("Model loaded successfully");

      const rawAnswers = await model.findAnswers(question, passage);

      // Sort answers by score
      const sortedAnswers = rawAnswers.sort((a, b) => b.score - a.score);

      // Take top two answers
      const topTwoAnswers = sortedAnswers.slice(0, 2);

      setAnswers(topTwoAnswers);
      console.log("Answers:", topTwoAnswers);
    } catch (error) {
      console.error("Error finding answers:", error);
    }
  };

  // JSX structure for QnA screen
  return (
    <ScrollView contentContainerStyle={screenStyles.scrollContainer}>
      <View style={screenStyles.container}>
        <Text style={[screenStyles.promptText]}>
          Ponder a question and include some surrounding context in the passage. Once you've done so, simply tap the "Find Answers" button to proceed!
        </Text>
        <TextInput
          style={[screenStyles.input, screenStyles.questionInput]} // Combine styles
          onChangeText={setQuestion}
          value={question}
          placeholder=" Enter your question"
          multiline
        />
        <TextInput
          style={[screenStyles.input, { height: Math.max(100, passageHeight) }]} // Adjust height based on content size
          onChangeText={setPassage}
          value={passage}
          placeholder=" Enter your passage"
          multiline
          onContentSizeChange={onPassageContentSizeChange} // Adjust height dynamically
        />
        <TouchableOpacity style={screenStyles.button} onPress={findAnswers}>
          <Text style={[screenStyles.buttonText, { color: 'white' }]}>Find Answers</Text>
        </TouchableOpacity>

        {answers.map((answer, index) => (
          <View key={index} style={screenStyles.answerContainer}>
            <Text style={screenStyles.answerText}>{answer.text}</Text>
            <Text style={screenStyles.scoreText}>Score: {answer.score.toFixed(3)}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default QnAScreen; // Exporting QnAScreen component as default
