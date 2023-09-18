import { useEffect, useState } from "react";
import questionService from "../services/questionService/questionService";
import { Question } from "../types/question";

export default function useQuestions() {
  const [questions, setQuestions] = useState<Question[]>([]);

  useEffect(() => {
    async function fetchData() {
      const data = await questionService.listQuestions()
      setQuestions(data)
      };

    fetchData();
  }, []);

  return {
    questions
  }
}