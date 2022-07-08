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

export async function getPost(postId) {
  try {
    const response = await fetch(HOST + FORUM_ENDPOINTS.post + postId);

    if (response.ok === false) {
      const error = await response.json();
      throw error;
    }

    return response.json();
  } catch (err) {
    throw new Error(err);
  }
}

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
