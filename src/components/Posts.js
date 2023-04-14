import React from 'react';
import { createNewPost } from '../api';

const Posts = ( {posts, setPosts, isLoggedIn, username, token} ) => {
    const postId= 1;
    const postId2= 2;
    const postId3= 3;

    const postToCreate = {
      post: {
        title: "Our New Post",
        price: "this is the price",
        description: "description"
      }
  };
    //console.log(posts)
    return (
    <>
    { isLoggedIn? (
        <>
        <h1>logged in</h1>
            <button onClick={async () =>{
                const newPost = await createNewPost(postToCreate, token);
                setPosts([newPost.data.post, ...posts])
                }}
                >
                Create New Post</button>
            <button>Update PUT Post</button>
            <button>Update Patch Post</button>
            <button>Delete Post</button>

        {posts.map((post) => {
            return (
              <article key={post._id}>
                <h2>{post.title}</h2>
                <p>{post.price}</p>
                <p>{post.description}</p>

                <input type="checkbox" id='delivery' name="vehicle1" value=""></input>
              </article>
            );
          })}
        </>
      ) : (
        <>
            <h1>Hello Guest!</h1>

            {posts.map((post) => {
            return (
              <article key={post._id}>
                <h2>{post.title} By: {post.author.username}</h2>
                <p>{post.price}</p>
                <p>{post.description}</p>

                <input type="checkbox" id='delivery' name="vehicle1" value=""></input>
              </article>
            );
          })}
        </>
      )};
    </>
    );
        };

    export default Posts