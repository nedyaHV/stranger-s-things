import React from 'react';


const Posts = ( {posts, setPosts} ) => {
    //console.log(posts)
    return (
    <>
        <h1>this is from posts</h1>
        {posts.map((post) => {
            return (
              <article key={post._id}>
                <h2>Seller - {post.author.username}</h2>
                <h3>Location - {post.location}</h3>
                <h2>{post.title}</h2>
                <p>{post.price}</p>
                <p>{post.description}</p>

                <input type="checkbox" id='delivery' name="vehicle1" value=""></input>
              </article>
            );
          })}
        </>
      )}

export default Posts;