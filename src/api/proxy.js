import axios from "axios";

export const getFeed = async () => {
  const result = await axios.post('/api/feed');
  return result.data;
}
