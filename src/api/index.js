const COHORT_NAME = '2303-FTB-ET-WEB-FT'
const BASE_URL = `https://strangers-things.herokuapp.com/api/2303-FTB-ET-WEB-FT`




const getPosts = async() => {
    try {
        const response = await fetch(`${BASE_URL}/posts`)
        const data = await response.json();

        console.log(data);
        return data;
    }catch (error) {
        console.error(error)
    };
}

export default getPosts();