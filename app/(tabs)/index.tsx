import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

// Sample quiz data
const quizData = [
  {
    question: 'What is the capital of France?',
    options: ['London', 'Paris', 'Berlin', 'Madrid'],
    answer: 'Paris',
  },
  {
    question: 'What is the largest planet in our solar system?',
    options: ['Earth', 'Jupiter', 'Mars', 'Venus'],
    answer: 'Jupiter',
  },
  // Add more quiz questions here
];

const App = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const currentQuestion = quizData[currentQuestionIndex];

  const handleAnswer = (selectedOption) => {
    if (selectedOption === currentQuestion.answer) {
      setScore(score + 1);
    }

    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < quizData.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowResult(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quiz App</Text>
      {showResult ? (
        <View>
          <Text style={styles.resultText}>Result</Text>
          <Text style={styles.scoreText}>
            Your score is: {score} / {quizData.length}
          </Text>
          <TouchableOpacity style={styles.button} onPress={restartQuiz}>
            <Text style={styles.buttonText}>Restart Quiz</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View>
          <Text style={styles.questionText}>
            Question {currentQuestionIndex + 1}
          </Text>
          <Text style={styles.questionText}>{currentQuestion.question}</Text>
          {currentQuestion.options.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={styles.button}
              onPress={() => handleAnswer(option)}
            >
              <Text style={styles.buttonText}>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  resultText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  scoreText: {
    fontSize: 18,
    marginBottom: 20,
  },
  questionText: {
    fontSize: 18,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default App;