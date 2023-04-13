import React from 'react';


const Posts = ( posts, setPosts ) => {
    //console.log(posts)
    return (
    <>
        <h1>this is from posts</h1>
        {posts.map((post) => {
            return (
              <article key={post.id}>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
                <p>Author id: {post.userId}</p>
              </article>
            );
          })}
        </>
      )}

export default Posts;