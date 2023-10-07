import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: '1', title: 'Learning Redux Toolkit', content: "I've heard good thing."},
  { id: '2', title: 'Slice...', content: "The more I say slice, the more I want pizza"},
];

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {

  },
});

export const selectAllPosts = (state) => state.posts;

export default postsSlice.reducer;