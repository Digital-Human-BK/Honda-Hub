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

export async function updatePost(id, data) {
  return api.put(api.FORUM_ENDPOINTS.post + id, data);
}

export async function deletePost(id) {
  return api.del(api.FORUM_ENDPOINTS.post + id);
}

export async function voteForPost(id, data) {
  return api.put(api.FORUM_ENDPOINTS.postVote + id, data);
}

//======================= Comments

export async function getComments(postId) {
  return api.get(api.FORUM_ENDPOINTS.postComments + postId);
}

export async function deleteComments(postId) {
  return api.del(api.FORUM_ENDPOINTS.postComments + postId);
}

export async function createComment(data) {
  return api.post(api.FORUM_ENDPOINTS.comments, data);
}

export async function updateComment(id, data) {
  return api.put(api.FORUM_ENDPOINTS.comments + id, data);
}

export async function deleteComment(id) {
  return api.del(api.FORUM_ENDPOINTS.comments + id);
}

export async function voteForComment(id, data) {
  return api.put(api.FORUM_ENDPOINTS.commentVote + id, data);
}
