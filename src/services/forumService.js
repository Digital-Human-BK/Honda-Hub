import { FORUM_ENDPOINTS, get, post } from '../api/forumApi';

export async function getPostsCount() {
  return get(FORUM_ENDPOINTS.postsCount);
}

export async function getSearchResults(query) {
  return get(FORUM_ENDPOINTS.searchPosts + `?term=${query}`);
}

export async function getCategoryPosts(category) {
  return get(FORUM_ENDPOINTS.categories + category);
}

export async function getPost(postId) {
  return get(FORUM_ENDPOINTS.post + postId);
}

export async function createPost(data) {
  return post(FORUM_ENDPOINTS.post, data);
}

//======================= Comments

export async function createComment(data) {
  return post(FORUM_ENDPOINTS.comments, data);
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

export async function getComments(postId) {
  return [
    {
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum nam, voluptatum dolores illum unde architecto porro accusantium iste officia eum fuga velit, modi rem aliquam deserunt! Recusandae molestiae id asperiores!',
      author: 'Chester Benington',
      createdAt: '08/07/2022, at 16:54:22',
    },
    {
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum nam, voluptatum dolores illum unde architecto porro accusantium iste officia eum fuga velit, modi rem aliquam deserunt! Recusandae molestiae id asperiores!',
      author: 'Chris Cornell',
      createdAt: '08/07/2022, at 16:54:22',
    },
    {
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum nam, voluptatum dolores illum unde architecto porro accusantium iste officia eum fuga velit, modi rem aliquam deserunt! Recusandae molestiae id asperiores!',
      author: 'Geroge Michael',
      createdAt: '08/07/2022, at 16:54:22',
    },
  ];
}
