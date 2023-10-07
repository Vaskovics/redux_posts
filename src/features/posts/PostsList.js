import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllPosts } from './posts';

const PostsList = () => {
  const posts = useSelector(selectAllPosts);

  const renderedPosts = posts.map(post => (
    <article key={posts.id}>
      <h3>{posts.title}</h3>
      <p>{post.content.substring(0, 100)}</p>
    </article>
  ))
  return (
    <section>
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  )
}

export default PostsList
