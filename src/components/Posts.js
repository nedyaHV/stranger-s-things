import React, { useEffect, useState } from 'react';
import { createNewPost, updateEntirePost, deletePost } from '../api';
import { getMe } from '../api/auth';
import CreateUpdatePost from './CreatePost';

const Posts = ({ posts, setPosts, isLoggedIn, username, token, _id }) => {
	const postId = 1;
	const postId2 = 2;
	const postId3 = 3;

	const [postToUpdate, setPostToUpdate] = useState(null);
	const [showForm, setShowForm] = useState(false);

	const postToCreate = {
		post: {
			title: 'Our New Post',
			price: 'this is the price',
			description: 'description',
		},
	};
	const postToCompletelyUpdate = {
		post: {
			title: 'updated post',
			price: 'updated price',
			description: 'updated description',
		},
	};
	//console.log(posts)

	// get me and save the username

	useEffect(() => {
		let postsByUser = [];

		if (isLoggedIn) {
			const savedUsername = localStorage.getItem('username');
			postsByUser = posts.filter(
				(post) => post.author.username === savedUsername
			);
			console.log('users posts', postsByUser.length);
		}
	}, []);

	const deletePostHandler = async (e) => {
		const response = await deletePost(
			e.target.id,
			localStorage.getItem('token')
		);

		if (response) {
			const filtered = posts.filter((post) => post._id != e.target.id);

			setPosts((prev) => [...filtered]);
		}
	};

	const updatePostHandler = (e) => {
		setPostToUpdate(posts.find((post) => post._id == e.target.id));
		setShowForm(true);
	};

	return (
		<>
			{showForm && (
				<CreateUpdatePost
					posts={posts}
					setPosts={setPosts}
					isLoggedIn={isLoggedIn}
					token={token}
					postToUpdate={postToUpdate}
					setShowForm={setShowForm}
				/>
			)}
			{isLoggedIn ? (
				<>
					<h1>logged in</h1>
					<button
						onClick={async () => {
							const newPost = await createNewPost(postToCreate, token);
							setPosts([newPost.data.post, ...posts]);
						}}
					>
						Create New Post
					</button>
					{/* <button onClick={async () => {
              const updatedPost = await updateEntirePost(post._id, postToCompletelyUpdate);

              const listToReturn = posts.filter(post => post._id !== updatedPost.post._id)
              setPosts([updatedPost, ...listToReturn])
            }}
            >Update PUT Post</button> */}
					<button>Update Patch Post</button>
					<button
						onClick={async () => {
							await deletePost(_id);
							setPosts([...posts.filter((post) => post.id !== { post })]);
						}}
					>
						Delete Post
					</button>

					{posts.map((post) => {
						return (
							<article key={post._id}>
								<h2>{post.title}</h2>
								<p>{post.price}</p>
								<p>{post.description}</p>

								<input
									type='checkbox'
									id='delivery'
									name='vehicle1'
									value=''
								></input>
								{post.author.username === localStorage.getItem('username') && (
									<button id={post._id} onClick={deletePostHandler}>
										Delete
									</button>
								)}

								{post.author.username === localStorage.getItem('username') && (
									<button id={post._id} onClick={updatePostHandler}>
										Update
									</button>
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
								<h2>
									{post.title} By: {post.author.username}
								</h2>
								<p>{post.price}</p>
								<p>{post.description}</p>
								<input
									type='checkbox'
									id='delivery'
									name='vehicle1'
									value=''
								></input>
							</article>
						);
					})}
				</>
			)}
			;
		</>
	);
};

export default Posts;
