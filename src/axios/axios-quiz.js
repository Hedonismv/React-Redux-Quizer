import axios from "axios";

export default axios.create({
    baseURL: 'https://react-quiz-a72f9-default-rtdb.europe-west1.firebasedatabase.app'
})