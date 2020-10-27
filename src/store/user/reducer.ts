const initialState = {
  token: localStorage.getItem("token"),
  name: null,
  email: null,
  interviews: null,
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      localStorage.setItem("token", action.payload.token);
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
