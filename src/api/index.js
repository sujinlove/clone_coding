import axios from "axios";

export default axios.create({
  baseURL: "https://sujinlove.github.io/react-TIL/",
  header: {
    Authorization: "bearer accessKey"
  }
});
