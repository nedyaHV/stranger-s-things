import React, {useState} from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { createNewPost } from "../api";

const CreatePost = ( {posts, setPosts, isLoggedIn, token}) => {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")
    const [location, setLocation] = useState("")
    // const [deliver, setWillDeliver] = useState(false)

    const navigate = useNavigate();
    
    const handleSubmit = async (event) => {
        event.preventDefault();

        const postToCreate = {
            post: {
              title: title,
              description: description,
              price: price,
              location: location,
            }
        }

        const newPost = await createNewPost(postToCreate, token);
                setPosts([newPost.data.post, ...posts])

        setTitle("")
        setDescription("")
        setPrice("")
        setLocation("")
        navigate("/posts")
         
    }

    return (
        <div className="formdisplay">
            <form className="form" onSubmit={handleSubmit}>
                <h2 className="formheader">Create Post</h2>
                <input className="formparams" type="text" placeholder="Title" value={title}
                onChange={(event) => setTitle(event.target.value)} />
                <input className="formparams" type="text" placeholder="Description" value={description}
                onChange={(event) => setDescription(event.target.value)} />
                <input className="formparams" type="text" placeholder="Price" value={price}
                onChange={(event) => setPrice(event.target.value)} />
                <input className="formparams" type="text" placeholder="Location" value={location}
                onChange={(event) => setLocation(event.target.value)} />
                <button className="formbutton" type="submit">Submit</button>
            </form>
        </div>
    )
}

export default CreatePost;