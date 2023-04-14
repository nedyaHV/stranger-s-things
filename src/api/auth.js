import React from "react";
import { RouterProvider } from "react-router-dom";

const COHORT = "2303-FTB-ET-WEB-FT"
const API = `https://strangers-things.herokuapp.com/api/${COHORT}`

export const getMe = async (token) => {
  try {
    const response = await fetch(
      `${API}/users/me`, {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      })
      const { success, error, data} = await response.json();
      if(success) {
        return data;
      } 
      if(!success && error) {
        return error;
      }
      return;
  } catch (error) {
    console.error(error)
  }
};

export const loginUser = async (userObject) => {
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
};

export const registerUser = async (userObject) => {
  try {
      const response = await fetch(
          `${API}/users/register`, {
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
      console.log(success, error, data);
  }
  catch(error) {
      console.error(error);
  }
};
