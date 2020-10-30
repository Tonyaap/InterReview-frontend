// import { apiUrl } from "../../config/constants";
// import { User, Interview, Questions } from "../../types/types";
import {Dispatch} from "redux"
import axios from "axios";
import { selectToken } from "./selectors";
import { getState, storeState } from "./types";
import { fetchedUser, User } from "../../types/types";


export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const TOKEN_STILL_VALID = "TOKEN_STILL_VALID";
export const LOG_OUT = "LOG_OUT";

const loginSuccess = (userWithToken: User) => {
  console.log("USER WITH TOKEN",userWithToken)
  return {
    type: LOGIN_SUCCESS,
    payload: userWithToken,
  };
};

export const login = (email: string, password: string) => {
  return async (dispatch: Dispatch, getState: storeState) => {
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
  return async (dispatch: Dispatch, getState: storeState) => {
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

  return async (dispatch: Dispatch, getState: storeState) => {
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

 

const tokenStillValid = (userWithoutToken: fetchedUser) => (  {
  type: TOKEN_STILL_VALID,
  payload: userWithoutToken,
}  );

export const getUserWithStoredToken = () => {
  return async (dispatch: Dispatch, getState: getState) => {
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

