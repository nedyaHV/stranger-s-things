import React from "react";

const COHORT = "2303-FTB-ET-WEB-FT"
const API = `https://strangers-things.herokuapp.com/api/${COHORT}`

const loginUser = async (userObject) => {
    try {
        const response = await fetch(
            `${API}/users/login`, {
            method: "POST",
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(userObject)
          });
        // const result = response.json();
        const { success, error, data} = await response.json();
        console.log({success, error, data});
        if (success) {
          const { token, message } = data;
          localStorage.setItem("token", token);
          return { token, message};
        }
        if (!success && !error) {
          const { name, message } = data;
          return { name, message};
        }
    }
    catch(error) {
        console.error(error);
    }
}

export default loginUser;