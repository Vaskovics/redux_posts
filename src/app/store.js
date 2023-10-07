import { configureStore } from '@reduxjs/toolkit';
import postsReducer  from './../features/posts/posts';

export const store = configureStore({
  reducer: {
    posts: postsReducer,
  }
});