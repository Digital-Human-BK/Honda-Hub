export const HOST = 'http://localhost:3030';

export const AUTH_ENDPOINTS = {
  register: '/register' ,
  login: '/login',
  logout: '/logout'
}

export const FORUM_ENDPOINTS = {
  postsCount: '/posts-count',
  searchPosts: '/search',

  //all the routes below require ID at the end!!!
  
  categories: '/categories/',
  post: '/posts/'
}