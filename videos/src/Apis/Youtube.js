import axios from "axios";

const KEY = "AIzaSyDSU31jXC6sFZrDKO-efFPURbIR5vX1B1k";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
