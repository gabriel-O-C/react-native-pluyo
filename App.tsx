import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import questionService from "./src/services/questionService/questionService";
import { Question } from "./src/types/question";



export default function App() {
  const [questions, setQuestions] = useState<Question[]>([]);

  useEffect(() => {
    async function fetchData() {
      const data = await questionService.listQuestions()
      setQuestions(data)
      };

    fetchData();
  }, []);
console.log(questions)
  return (
    <View style={styles.container}>
      {questions.length > 0 ? (
        <View>
          <Text>Fill in the missing word.</Text>
          {questions.map((question) => (
            
            <Text key={question.title}>
              {question.question}
            </Text>
          ))}
          <TouchableOpacity>
            <Text>Check answer</Text>
          </TouchableOpacity>
        </View>
      ): <Text>No questions</Text>}
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
