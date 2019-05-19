import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import api from './api';

const initialState = {
  loggedUser: null, // a Guest user will log automatically
  posts: [], // number of post we have
  guestLikedPosts: []
};

export const actionTypes = {
  LOGGED_USER: 'LOGGED_USER',
  TOGGLE_POST: 'TOGGLE_POST',
  ALL_POSTS: 'ALL_POSTS',
  UPDATE_POST: 'UPDATE_POST',
  GUEST_LIKED_POSTS: 'GUEST_LIKED_POSTS',
  UPDATE_USER: 'UPDATE_USER'
};

// REDUCERS
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGGED_USER || actionTypes.TOGGLE_POST:
      return { ...state, loggedUser: action.payload };
    case actionTypes.ALL_POSTS:
      return { ...state, posts: action.payload };
    case actionTypes.GUEST_LIKED_POSTS:
      return { ...state, guestLikedPosts: action.payload };
    case actionTypes.UPDATE_POST:
      const index = state.posts.findIndex(
        post => post._id === action.payload._id
      );
      state.posts[index] = action.payload;
      return {
        ...state,
        posts: [...state.posts]
      };
    default:
      return state;
  }
};

// ACTIONS
export const getLoggedUser = () => async dispatch => {
  const response = await api.get('/users/loggedUser');
  dispatch({ type: actionTypes.LOGGED_USER, payload: response.data });
};

export const toggleLikePost = (userId, body) => async dispatch => {
  const response = await api.put(`/users/${userId}`, body);
  dispatch({ type: actionTypes.TOGGLE_POST, payload: response.data });
};

export const updatePostLikes = (postId, body) => async dispatch => {
  const response = await api.put(`/posts/${postId}`, body);
  dispatch({ type: actionTypes.UPDATE_POST, payload: response.data });
};

export const getAllPosts = () => async dispatch => {
  const response = await api.get('/posts');
  dispatch({ type: actionTypes.ALL_POSTS, payload: response.data });
};

export const getGuestLikedPosts = () => async dispatch => {
  const response = await api.get('/users/liked_posts');
  dispatch({ type: actionTypes.GUEST_LIKED_POSTS, payload: response.data });
};

export const updateUser = (userId, body) => async dispatch => {
  const response = await api.put(`/users/${userId}`, body);
  dispatch({ type: actionTypes.UPDATE_USER, payload: response.data });
};

export function initializeStore(state = initialState) {
  return createStore(
    reducer,
    state,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );
}
