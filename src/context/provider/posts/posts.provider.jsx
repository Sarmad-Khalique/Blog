import axios from "axios";
import { createContext, useState } from "react";
import { BASE_URL } from "../../../config/config";

export const PostContext = createContext({
  posts: [],
  fetchingPosts: () => {},
  isFetching: true,
});
const PostProvider = ({ children }) => {
  const [isFetching, setIsFetching] = useState(true);
  const [posts, setPosts] = useState([]);

  const fetchingPosts = async () => {
    const response = await axios.get(`${BASE_URL}/posts/`);
    setPosts(response.data);
    setIsFetching(false);
  };

  const values = {
    posts,
    isFetching,
    fetchingPosts
  };

  return <PostContext.Provider value={values}>{children}</PostContext.Provider>;
};

export default PostProvider;