import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import { type Iquestion } from "../../types/question";

class QuestionsService {
  async listQuestions(): Promise<Iquestion[]> {
    const questions: Iquestion[] = [];
    const querySnapshot = await getDocs(collection(db, "questions"));
    querySnapshot.forEach((doc) => {
      let data = doc.data();
      let question: Iquestion = data.questions
      questions.push(question);
    });
    return questions.flat(1)
    }
}

export default new QuestionsService();