import axios from "axios";



const apiKey = import.meta.env.VITE_YOUTUBE_API_KEY;
console.log(apiKey)

const request = axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3/",
  params: {
    key: "AIzaSyBDBukNStXwK867AevdPa4TXtSGfPt7qWk",
  },
});

export default request;
