import { FORGOT_PASSWORD, FORGOT_PASSWORD_ERROR, RESET_PASSWORD, RESET_PASSWORD_ERROR, USER_LOGIN, USER_LOGIN_ERROR, USER_SIGNUP, USER_SIGNUP_ERROR } from "../actions/auth.actions";

// Interface that defines structure for login payload
interface loginPayload {
    email: string;
    password: string;
}

// Interface that defines the structure of the action for user Login.
interface LoginType {
    type: string;
    payload : loginPayload;
}


// Interface that defines structure for SignUp payload
interface SignUpPayload {
    fullName: string;
    email: string;
    password: string;
    organization?: string;
}

// Interface that defines the structure of the action for user SignUp.
interface SignUpType{
    type : string;
    payload:SignUpPayload; 
}

// Interface that defines structure for SignUp payload
interface resetPasswordPayload {
  token : string;
  password : string;
  confirmPassword : string;
}

// User Login Action Creator
const Login = <LoginType> (payload: loginPayload) => {
  return {
    type: USER_LOGIN,
    payload,
  };
};

// User Login Error Action Creator
const LoginError = <LoginType> ( payload : string) => {
    return {
        type : USER_LOGIN_ERROR ,
        payload,
    }
}
// User SignUp Action Creator
const SignUp =<SignUpType> (payload: SignUpPayload) => {
  return {
    type: USER_SIGNUP,
    payload,
  };
};

// User SignUp Error Action Creator
const SignUpError = <SignUpType> ( payload : string) => {
  return {
      type : USER_SIGNUP_ERROR ,
      payload,
  }
}

// Forgot Password Action Creator
const forgotPassword = (payload : string) => {
  return{
    type : FORGOT_PASSWORD , 
    payload,
  }
} 

// Forgot Password Error Action Creator
const forgotPasswordError = (payload : string) => {
  return {
    type : FORGOT_PASSWORD_ERROR,
    payload,
  }
}

// Reset Password Action Creator
const resetPassword = (payload : resetPasswordPayload) => {
  return {
    type : RESET_PASSWORD,
    payload
  }
}

// Reset Password Error Action Creator
const resetPasswordError = (payload : string) => {
  return {
    type : RESET_PASSWORD_ERROR,
    payload,
  }
}

export {
    Login,
    LoginError,
    SignUp,
    SignUpError ,
    forgotPassword,
    forgotPasswordError,
    resetPassword,
    resetPasswordError,
}
export type {loginPayload , SignUpPayload ,resetPasswordPayload };
