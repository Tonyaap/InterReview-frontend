// import { apiUrl } from "../../config/constants";
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
    
    } }

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

// export const signUp = (name, email, password) => {
//   return async (dispatch, getState) => {
//     dispatch(appLoading());
//     try {
//       const response = await axios.post(`${apiUrl}/auth/signup`, {
//         name,
//         email,
//         password,
//       });

//       console.log(response);

//       // dispatch(loginSuccess(response.data));
//       dispatch(showMessageWithTimeout("success", true, "account created"));
//       dispatch(appDoneLoading());
//     } catch (error) {
//       if (error.response) {
//         dispatch(setMessage("danger", true, error.response.data.message));
//       } else {
//         dispatch(setMessage("danger", true, error.message));
//       }
//       dispatch(appDoneLoading());
//     }
//   };
// };

// export const getUserWithStoredToken = () => {
//   return async (dispatch, getState) => {
//     const token = selectToken(getState());


const tokenStillValid = (userWithoutToken: any) => ({
  type: TOKEN_STILL_VALID,
  payload: userWithoutToken,
});

export const getUserWithStoredToken = () => {
  return async (dispatch: any, getState: any) => {
    const token = selectToken(getState());
    // console.log("WHAT IS localtoken?", localStorage.token)
    if (localStorage.token === null) return;
    try {
      const response = await axios.get(`http://localhost:8080/auth/me`, {
        headers: { Authorization: `Bearer ${localStorage.token}` },
      });
      console.log( "WHAT IS RES DATA?", response.data)
      dispatch(tokenStillValid(response.data));
    } catch (error) {
      dispatch(logOut());
    }
  };
};

// export const createComposition = (userId, compositionName, composition) => {
//   return async (dispatch, getState) => {
//     try {
//       const token = selectToken(getState());
//       const response = await axios.post(
//         `${apiUrl}/compositions/${userId}`,
//         {
//           compositionName,
//           composition,
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//       dispatch(postComposition(response.data.newComposition));
//     } catch (e) {
//       if (e.response) {
//         dispatch(setMessage("danger", true, e.response.data.message));
//       }
//       console.log(e);
//     }
//   };
// };

// export function postComposition(newComposition) {
//   return {
//     type: "POST_COMPOSITION",
//     payload: newComposition,
//   };
// }

// import axios from "axios";
// const loginSuccess = (userWithToken: any) => {
//   return {
//     type: "LOGIN_SUCCESS",
//     payload: userWithToken,
//   };
// };

// export const login = (email: string, password: string) => {
//   return async (dispatch: any, getState: any) => {
//     try {
//       const response = await axios.post(`http://localhost:4000/login`, {
//         email,
//         password,
//       });

//       dispatch(loginSuccess(response.data));
//     } catch (error) {
//       if (error.response) {
//         console.log(error.response.data.message);
//       } else {
//         console.log(error.message);
//       }
//     }
//   };
// };
