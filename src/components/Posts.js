import React from 'react';

const Posts = ( {posts, setPosts, isLoggedIn, user, username, token} ) => {
  
    return (
    <>
    { isLoggedIn? (
        <>
        <h1>Hello, {user.username} - Today's Picks</h1>
        {posts.map((post) => {
            return (
              <article key={post._id}>
                <h2>{post.title}</h2>
                <p>{post.price}</p>
                <p>{post.description}</p>
                <p>{post.location}</p>
                {post.willDeliver === false || null ? (
                  <p>{"Will Deliver"}</p>
                ) : (
                  <p>{"Will NOT Deliver"}</p>
                )}
              
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