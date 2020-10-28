import {LOGIN_SUCCESS, LOG_OUT, TOKEN_STILL_VALID} from "../user/actions"

const initialState = {
  token: null,
  user: null  }


export default (state = initialState, action: any) => {
  switch (action.type) {
    case LOGIN_SUCCESS :
      console.log("ACTION", action.payload)
      localStorage.setItem("token", action.payload.token);
      return { ...state, ...action.payload };

      case LOG_OUT:
      localStorage.removeItem("token");
      return { ...initialState, token: null };    

      case TOKEN_STILL_VALID:
        return {
          user: action.payload.user,
          token: localStorage.token,
        }

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