import { HOST, FORUM_ENDPOINTS } from "../api/forumApi";

export async function getPostsCount(){
  const response = await fetch(HOST + FORUM_ENDPOINTS.postsCount);

  if (response.status !== 200) {
    const error = await response.json();
    throw error;
  }

  return response.json();
};

export async function getSearchResults(query){
  const response = await fetch(HOST + FORUM_ENDPOINTS.searchPosts + `?term=${query}`);

  if (response.status !== 200) {
    const error = await response.json();
    throw error;
  }

  return response.json();
};