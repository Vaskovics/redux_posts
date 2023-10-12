import { useState } from "react";
import { useDispatch} from 'react-redux';
import { nanoid} from '@reduxjs/toolkit';
import { postAdded  } from "./postsSlice";

import React from 'react'

const AddPostForm = () => {
  const [title, setTitle ] = useState('');
  const [content, setContent] = useState('');

  const dispatch = useDispatch();

  const onTitleChanged = (e) => {
    setTitle(e.target.value);
  }

  const onContentChanged = (e) => {
    setContent(e.target.value);
  }

  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(
       postAdded(title, content)
      );

      setTitle('');
      setContent('');
    }
  }
  return (
    <section>
      <h2>Add a New Post</h2>
      <form>
        <lable htmlFor='postTitle'>Post Title</lable>

        <input 
          type="text"
          id='postTitle'
          name='postTitle'
          value={title}
          onChange={onTitleChanged}
        />

        <lable htmlFor="postContent">Content:</lable>

        <textarea 
          id='postContetn'
          name='postContent'
          value={content}
          onChange={onContentChanged}
        />

        <button
          type="button"
          onClick={onSavePostClicked}
        >
          Save Post
        </button>
      </form>
    </section>
  )
}

export default AddPostForm
