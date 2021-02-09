import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID tZ6qNL1iPBHrdHT_wS-E1WRfBz3fEa2yH3g5zubQfns",
  },
});
