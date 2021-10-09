import { loginPayload, resetPasswordPayload, SignUpPayload } from "../action_creators/auth.creators";

// Interface that defines the structure of the resposne for user login.
interface LoginResponse {
  message: string;
  token: string;
  user: {
    id: string;
    fullName: string;
    email: string;
    role: string;
  };
}

const userloginThunk = (payload: loginPayload) => (dispatch: any) => {
  // Api call to authenticate user from backend and dispatch action
  
};

const userSignUpThunk = (payload: SignUpPayload) => (dispatch: any) => {
  // Api call to SignUp user from backend and dispatch action
 
};

const forgotPasswordThunk = (payload: string) => (dispatch: any) => {
  // Api call for forgot password
  
};

const resetPasswordThunk =
  (payload: resetPasswordPayload) => (dispatch: any) => {
    // Api call for reset password
    
  };

export {
  userloginThunk,
  userSignUpThunk,
  forgotPasswordThunk,
  resetPasswordThunk,
};
