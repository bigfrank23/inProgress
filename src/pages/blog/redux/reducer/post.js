import {
    CREATE_POST,
    END_LOADING,
    GET_POST,
    GET_POSTS_OTHERS,
    UPDATE_POST,
    GET_POST_BY_ID,
    START_LOADING,
    LIKE,
    COMMENT,
  } from "../constants/actionTypes";
  
  const initialState = {
      posts: [],
      isLoading: true
  }
  
  const postReducer = (state = initialState, action) => {
      switch (action.type) {
        case START_LOADING:
          return { ...state, isLoading: true };
        case END_LOADING:
          return { ...state, isLoading: false };
        case CREATE_POST:
          return {
            ...state,
            posts: action.payload.data,
          };
        case GET_POST:
          return { ...state, posts: action.payload };
        case GET_POSTS_OTHERS:
          return { ...state, posts: action.payload };
        case UPDATE_POST:
          return { ...state, posts: action.payload };
        case GET_POST_BY_ID:
          return { ...state, post: action.payload };
        case LIKE:
          // return {...state, posts: state.posts.map((post)=> post._id === action.payload._id ? action.payload : post)};
          return {
            ...state,
            posts: state.posts.map((post) => {
              //Change the post that just recieved a comment...
              if (post._id === action.payload._id) {
                return action.payload;
              }
              return post; //return all the other posts normally...
            }),
          };
        case COMMENT:
          return {
            ...state,
            posts: state.posts.map((post) => {
              //Change the post that just recieved a comment...
              if (post._id === action.payload._id) {
                return action.payload;
              }
              return post; //return all the other posts normally...
            }),
          };
        default:
          return state;
      }
  }
  
  export default postReducer