// import React, { useState } from 'react';
// import { createNewPost, updateEntirePost } from '../api';

// const CreateUpdatePost = ({
// 	posts,
// 	setPosts,
// 	isLoggedIn,
// 	token,
// 	postToUpdate,
// 	setShowForm,
// }) => {
// 	const [title, setTitle] = useState(postToUpdate ? postToUpdate.title : '');
// 	const [description, setDescription] = useState(
// 		postToUpdate ? postToUpdate.description : ''
// 	);
// 	const [price, setPrice] = useState(postToUpdate ? postToUpdate.price : '');
// 	const [location, setLocation] = useState(
// 		postToUpdate ? postToUpdate.location : ''
// 	);
// 	// const [deliver, setWillDeliver] = useState(false)

// 	const handleSubmit = async (event) => {
// 		event.preventDefault();

// 		const postToCreate = {
// 			post: {
// 				title: title,
// 				description: description,
// 				price: price,
// 				location: location,
// 			},
// 		};

// 		if (postToUpdate) {
// 			//post, token, POST_ID
// 			// update post otherwise create it as following

// 			const result = await updateEntirePost(
// 				postToCreate,
// 				token,
// 				postToUpdate._id
// 			);

// 			console.log(token);

// 			console.log(result);
// 			if (result) {
// 				const prevPosts = [...posts];

// 				prevPosts.map((post) => {
// 					if (post._id == result.data.post._id) {
// 						post = null;
// 						post = { ...result.data.post };
// 					}
// 					return post;
// 				});
// 				setPosts([...prevPosts]);
// 			}

// 			window.location.href = '/posts';
// 			setShowForm(true);

// 			return;
// 		}

// 		const newPost = await createNewPost(postToCreate, token);
// 		setPosts([newPost.data.post, ...posts]);

// 		setTitle('');
// 		setDescription('');
// 		setPrice('');
// 		setLocation('');
// 	};

// 	return (
// 		<div>
// 			<h2>{postToUpdate ? 'Update Post' : 'Create Post'}</h2>
// 			<form onSubmit={handleSubmit}>
// 				<input
// 					type='text'
// 					placeholder='Title'
// 					value={title}
// 					onChange={(event) => setTitle(event.target.value)}
// 				/>
// 				<input
// 					type='text'
// 					placeholder='Description'
// 					value={description}
// 					onChange={(event) => setDescription(event.target.value)}
// 				/>
// 				<input
// 					type='text'
// 					placeholder='Price'
// 					value={price}
// 					onChange={(event) => setPrice(event.target.value)}
// 				/>
// 				<input
// 					type='text'
// 					placeholder='Location'
// 					value={location}
// 					onChange={(event) => setLocation(event.target.value)}
// 				/>
// 				<button type='submit'>Submit</button>
// 			</form>
// 		</div>
// 	);
// };

// export default CreateUpdatePost;
