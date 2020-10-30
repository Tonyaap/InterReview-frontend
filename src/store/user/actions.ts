// import { apiUrl } from "../../config/constants";
// import { User, Interview, Questions } from "../../types/types";

import axios from "axios";
import { selectToken } from "./selectors";

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const TOKEN_STILL_VALID = "TOKEN_STILL_VALID";
export const LOG_OUT = "LOG_OUT";

const loginSuccess = (userWithToken: any) => {
  return {
    type: LOGIN_SUCCESS,
    payload: userWithToken,
  };
};

export const login = (email: string, password: string) => {
  return async (dispatch: any, getState: any) => {
    try {
      const response = await axios.post(`http://localhost:8080/auth/login`, {
        email,
        password,
      });

      dispatch(loginSuccess(response.data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const logOut = () => ({ type: LOG_OUT });

export const signUp = (name: string, email: string, password: string) => {
  return async (dispatch: any, getState: any) => {
    try {
      const response = await axios.post(`http://localhost:8080/auth/signup`, {
        name,
        email,
        password,
      });

      console.log(response);
    } catch (error) {
      if (error.response) {
      } else {
      }
    }
  };
};

export const sendForm = (
  userId: string,
  name: string,
  nervousScore: number,
  rapportScore: number,
  technicalScore: number,
  preparationScore: number,
  bodylanguageScore: number,
  questions: any
) => {
  console.log("userId", userId);
  console.log("name", name);
  console.log("nervousScore", nervousScore);
  console.log("rapportScore", rapportScore);
  console.log("technicalScore", technicalScore);
  console.log("preparationScore", preparationScore);
  console.log("bodylanguageScore", bodylanguageScore);
  console.log("questions", questions);

  return async (dispatch: any, getState: any) => {
    try {
      const response = await axios.post(
        `http://localhost:8080/users/interview`,
        {
          userId,
          name,
          nervousScore,
          rapportScore,
          technicalScore,
          preparationScore,
          bodylanguageScore,
          questions,
        }
      );
      console.log("res.data", response.data);
    } catch (error) {}
  };
};

const tokenStillValid = (userWithoutToken: any) => ({
  type: TOKEN_STILL_VALID,
  payload: userWithoutToken,
});

export const getUserWithStoredToken = () => {
  return async (dispatch: any, getState: any) => {
    const token = selectToken(getState());
    if (localStorage.token === null) return;
    try {
      console.log("Token?", token)
      const response = await axios.get(`http://localhost:8080/auth/me`, {
        headers: { Authorization: `Bearer ${localStorage.token}` },
      });
      dispatch(tokenStillValid(response.data));
    } catch (error) {
      dispatch(logOut());
    }
  };
};

