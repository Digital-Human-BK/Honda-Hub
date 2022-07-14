import * as api from '../api/forumApi';

export async function getPostsCount() {
  return api.get(api.FORUM_ENDPOINTS.postsCount);
}

export async function getSearchResults(query) {
  return api.get(api.FORUM_ENDPOINTS.searchPosts + `?term=${query}`);
}

export async function getCategoryPosts(category) {
  return api.get(api.FORUM_ENDPOINTS.categories + category);
}

export async function getPost(postId) {
  return api.get(api.FORUM_ENDPOINTS.post + postId);
}

export async function createPost(data) {
  return api.post(api.FORUM_ENDPOINTS.post, data);
}

export async function updatePost(id, data){
  return api.put(api.FORUM_ENDPOINTS.post + id, data)
};

//======================= Comments

export async function getComments(postId) {
  return api.get(api.FORUM_ENDPOINTS.postComments + postId);
}

export async function createComment(data) {
  return api.post(api.FORUM_ENDPOINTS.comments, data);
}

//======================= Old Code

// export async function getPostsCount() {
//   try {
//     const response = await fetch(HOST + FORUM_ENDPOINTS.postsCount);

//     if (response.ok === false) {
//       const error = await response.json();
//       throw error;
//     }

//     return response.json();
//   } catch (err) {
//     throw err;
//   }
// }

// export async function getSearchResults(query) {
//   try {
//     const response = await fetch(
//       HOST + FORUM_ENDPOINTS.searchPosts + `?term=${query}`
//     );

//     if (response.ok === false) {
//       const error = await response.json();
//       throw error;
//     }

//     return response.json();
//   } catch (err) {
//     throw err;
//   }
// }

// export async function getCategoryPosts(category) {
//   try {
//     const response = await fetch(HOST + FORUM_ENDPOINTS.categories + category);

//     if (response.ok === false) {
//       const error = await response.json();
//       throw error;
//     }

//     return response.json();
//   } catch (err) {
//     throw err;
//   }
// }

// export async function getPost(postId) {
//   try {
//     const response = await fetch(HOST + FORUM_ENDPOINTS.post + postId);

//     if (response.ok === false) {
//       const error = await response.json();
//       throw error;
//     }

//     return response.json();
//   } catch (err) {
//     throw err;
//   }
// }

// export async function createPost(data) {
//   try {
//     const response = await fetch(HOST + FORUM_ENDPOINTS.post, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(data)
//     });

//     if (response.ok === false) {
//       const error = await response.json();
//       throw error;
//     }

//     return response.json();
//   } catch (err) {
//     throw err;
//   }
// }