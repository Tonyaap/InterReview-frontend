import { Interview, User } from "../../types/types";
import { CREATE_REVIEW, LOGIN_SUCCESS, LOG_OUT, TOKEN_STILL_VALID } from "../user/actions";

export type LoginSuccess = {
  type: typeof LOGIN_SUCCESS;
  payload: User;
};

export type LOGOUTsuccess = {
  type: typeof LOG_OUT;
};

export type tokenStillValid = {
  type: typeof TOKEN_STILL_VALID;
  payload: User;
};

export type createReview = {
  type: typeof CREATE_REVIEW;
  payload: Interview
}

export type UserActionTypes = LoginSuccess | LOGOUTsuccess | tokenStillValid | createReview;

export type storeState = { user: User , token:string  }

export type getState = () => storeState 

