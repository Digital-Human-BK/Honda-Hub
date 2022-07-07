import { HOST, FORUM_ENDPOINTS } from '../api/forumApi';

export async function getPostsCount() {
  try {
    const response = await fetch(HOST + FORUM_ENDPOINTS.postsCount);

    if (response.ok === false) {
      const error = await response.json();
      throw error;
    }

    return response.json();
  } catch (err) {
    throw new Error(err);
  }
}

export async function getSearchResults(query) {
  try {
    const response = await fetch(
      HOST + FORUM_ENDPOINTS.searchPosts + `?term=${query}`
    );

    if (response.ok === false) {
      const error = await response.json();
      throw error;
    }

    return response.json();
  } catch (err) {
    throw new Error(err);
  }
}

export async function getCategoryPosts(category) {
  try {
    const response = await fetch(HOST + FORUM_ENDPOINTS.categories + category);

    if (response.ok === false) {
      const error = await response.json();
      throw error;
    }

    return response.json();
  } catch (err) {
    throw new Error(err);
  }
}
