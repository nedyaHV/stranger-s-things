import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createNewPost, updateEntirePost, deletePost } from '../api';
import CreateUpdatePost from './CreatePost';

const Posts = ({ posts, setPosts, isLoggedIn, user, username, token, _id }) => {

	const [postToUpdate, setPostToUpdate] = useState(null);
	const [showForm, setShowForm] = useState(false);

	const navigate = useNavigate();

	// useEffect(() => {
	// 	let postsByUser = [];

	// 	if (isLoggedIn) {
	// 		const savedUsername = localStorage.getItem('username');
	// 		postsByUser = posts.filter(
	// 			(post) => post.author.username === savedUsername
	// 		);
	// 		console.log('users posts', postsByUser.length);
	// 	}
	// }, []);

	// const deletePostHandler = async (e) => {
	// 	const response = await deletePost(
	// 		e.target.id,
	// 		localStorage.getItem('token')
	// 	);

	// 	if (response) {
	// 		const filtered = posts.filter((post) => post._id != e.target.id);

	// 		setPosts((prev) => [...filtered]);
	// 	}
	// };

	// const updatePostHandler = (e) => {
	// 	setPostToUpdate(posts.find((post) => post._id == e.target.id));
	// 	setShowForm(true);
	// };

	return (
		<>
			{isLoggedIn ? (
				<>
				<div className='headerbody'>
					<div className='postheader'>
					<h1 className='posthead'>Hello, {user.username}! Welcome back</h1>
					<button onClick={() => {
						navigate("/createpost");
					}}>
						Create New Post
					</button>
					<button
						onClick={async () => {
							await deletePost(token);
							setPosts([...posts.filter((post) => post.id !== { post })]);
						}}
					>
						Delete Post
					</button>
					</div>
				</div>

					{posts.map((post) => {
						return (
							<div className='headerbody'>
							<article key={post._id}>
								<h2 className='posttitle'>
									{post.title} By: {post.author.username}
								</h2>
								<p>{post.price}</p>
								<p>{post.description}</p>
								<p>{post.location}</p>
								<p>{post.willDeliver}</p>

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
							</div>
						);
					})}
				</>
			) : (
				<>
				<div className='headerbody'>
					<div className='postheader'>
						<h1 className='posthead'>Hello Guest!</h1>
						<p>Please log in to create a new post!</p>
					</div>
				</div>
					{posts.map((post) => {
						return (
							<div className='headerbody'>
							<article key={post._id}>
								<h2 className='posttitle'>
									{post.title} By: {post.author.username}
								</h2>
								<p>{post.price}</p>
								<p>{post.description}</p>
								<p>{post.location}</p>
								<p>{post.willDeliver}</p>
							</article>
							</div>
						);
					})}
				</>
			)}
			;
		</>
	);
};

export default Posts;
