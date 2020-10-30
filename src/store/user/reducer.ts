import { LOGIN_SUCCESS, LOG_OUT, TOKEN_STILL_VALID } from "../user/actions";
import { User } from "../../types/types";
import {
  UserActionTypes,
} from "./types";

const initialState: User = {
  token: "",
  user: {
    id: "",
    name: "",
    email: "",
    createdAt: "",
    updatedAt: "",
    Interviews: [
      {
        UserId: "",
        bodylanguageScore: "",
        createdAt: "",
        deletedAt: null,
        id: "",
        name: "",
        nervousScore: "",
        preparationScore: "",
        questions: [
          {
            Question: "",
            Answer: "",
          },
        ],
        rapportScore: "",
        technicalScore: "",
        updatedAt: "",
      },
    ],
  },
};

export default (state = initialState, action: UserActionTypes) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return {
        token: action.payload.token,
        user: {
          id: action.payload.user.id,
          name: action.payload.user.name,
          email: action.payload.user.email,
          createdAt: action.payload.user.createdAt,
          updatedAt: action.payload.user.updatedAt,
          Interviews: action.payload.user.Interviews,
        },
      };

    case LOG_OUT:
      localStorage.removeItem("token");
      return { ...initialState, token: null };

    case TOKEN_STILL_VALID:
      return {
        token: localStorage.token,
        user: {
          id: action.payload.user.id,
          name: action.payload.user.name,
          email: action.payload.user.email,
          createdAt: action.payload.user.createdAt,
          updatedAt: action.payload.user.updatedAt,
          Interviews: action.payload.user.Interviews,
        },
      };
    default:
      return state;
  }
};
