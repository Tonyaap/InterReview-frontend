import { LOGIN_SUCCESS, LOG_OUT, TOKEN_STILL_VALID } from "../user/actions";
import { User, fetchedUser, Interview, Questions } from "../../types/types";
import {
  LoginSuccess,
  LOGOUTsuccess,
  tokenStillValid,
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
            question: "",
            answer: "",
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
          interviews: action.payload.user.Interviews,
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
          interviews: action.payload.user.Interviews,
        },
      };
    default:
      return state;
  }
};

// export default (state = initialState, action: any) => {
//   switch (action.type) {

//     case LOGIN_SUCCESS : console.log("ACTIONPAYLOAD", action.payload.user)
//       localStorage.setItem("token", action.payload.token);

//       return {
//         ...state,
//         token: action.payload.user.token,
//         id: action.payload.user.id,
//         name: action.payload.user.name,
//         email: action.payload.user.email,
//         Interviews: JSON.parse(action.payload.user.Interviews),
//          };
//     default:
//       return state;
//   }
// };
