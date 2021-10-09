import { FORGOT_PASSWORD, FORGOT_PASSWORD_ERROR, RESET_PASSWORD, RESET_PASSWORD_ERROR, USER_LOGIN, USER_LOGIN_ERROR, USER_SIGNUP, USER_SIGNUP_ERROR } from "../actions/auth.actions";

  // Interface that defines structure of Auth User Data
  interface Auth {
    message: string;
    token: string;
    user: {
      id: string;
      fullName: string;
      email: string;
    };
    loggedIn: undefined | boolean;
    SignedUp: undefined | boolean;
  }
  
  // Initial State of Auth User Data
  const authInitialState = {
    loggedIn: undefined,
    SignedUp: undefined,
    message: "",
    token: "",
    user: {
      id: "",
      fullName: "",
      email: "",
      role: "",
    },
  };
  
  const authReducer = (
    initialState: Auth = authInitialState,
    action: { type: string; payload: any }
  ) => {
    switch (action.type) {
  
      //Case when Login is Successfull
      case USER_LOGIN:
        return {
          ...initialState,
          ...action.payload,
          loggedIn: true,
        };
  
      //Case when there's error in Login
      case USER_LOGIN_ERROR:
        return {
          ...initialState,
          ...action.payload,
          loggedIn: false,
        };
  
      //Case when User Registration is Successfull
      case USER_SIGNUP:
        initialState.SignedUp = true;
        initialState.message = action.payload;
        return {
          ...initialState,
        };
  
      //Case when there's error in User Registration
      case USER_SIGNUP_ERROR:
        initialState.SignedUp = false;
        initialState.message = action.payload;
        return {
          ...initialState,
        };
  
      //Case when Forgot password is successfull
      case FORGOT_PASSWORD:
        initialState.message = action.payload;
        return {
          ...initialState,
        };
  
      //Case when there's error in Forgt password
      case FORGOT_PASSWORD_ERROR:
        initialState.message = action.payload;
        return {
          ...initialState,
        };
  
      //Case when Reset password is successfull
      case RESET_PASSWORD:
        initialState.message = action.payload;
        return {
          ...initialState,
        };
  
      //Case when there's error in Reset password
      case RESET_PASSWORD_ERROR:
        initialState.message = action.payload;
        return {
          ...initialState,
        };
  
      default:
        return initialState;
    }
  };
  
  export { authReducer };
  export type {Auth} ;