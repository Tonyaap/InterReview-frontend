import axios from "axios";
const loginSuccess = (userWithToken: any) => {
  return {
    type: "LOGIN_SUCCESS",
    payload: userWithToken,
  };
};

export const login = (email: string, password: string) => {
  return async (dispatch: any, getState: any) => {
    try {
      const response = await axios.post(`http://localhost:4000/login`, {
        email,
        password,
      });

      dispatch(loginSuccess(response.data));
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
      } else {
        console.log(error.message);
      }
    }
  };
};
