import {LOGIN_SUCCESS} from "../user/actions"

const initialState = {
  token: localStorage.getItem("token"),
  user: null  }


export default (state = initialState, action: any) => {
  switch (action.type) {
    case LOGIN_SUCCESS :
      console.log("ACTION", action.payload)
      localStorage.setItem("token", action.payload.token);
      return { ...state, ...action.payload };
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