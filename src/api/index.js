import { json } from "react-router-dom";

const COHORT_NAME = '2303-FTB-ET-WEB-FT'
const BASE_URL = `https://strangers-things.herokuapp.com/api/2303-FTB-ET-WEB-FT`

export const getPosts = async() => {
    try {
        const response = await fetch(`${BASE_URL}/posts`)
        const data = await response.json();
        // console.log(data);
        return data;
    }catch (error) {
        console.error(error)
    };
};

export const createNewPost = async(newPost, token) => {
    console.log(newPost, token)
    try {
        const response = await fetch(`${BASE_URL}/posts`,{
            method:'POST',
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(newPost),
        });
        const result = await response.json();
        // console.log(result);
        return result;
    }catch (error) {
        console.error(error)
    }
}

export const deletePost = async(POST_ID, token) => {
    try {
        const response = await fetch(`${BASE_URL}/posts/POST_ID`,{
            method:'DELETE',
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                Authorization: `Bearer ${token}`
            } 
        });
        const result = await response.json();
        console.log(result);
        return result;
    }catch (error) {
        console.error(error)
    }
}