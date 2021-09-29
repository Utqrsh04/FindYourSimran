import React, { useState } from "react";
import "./AuthPage.css";
import { FcGoogle } from "react-icons/fc";
import { SiGithub, SiLinkedin } from "react-icons/si";

export default function Authpage() {
  const [show, setShow] = useState(false);
  const SignInClicked = () => {
    setShow(!show);
  };
  const SignUpClicked = () => {
    setShow(!show);
  };

  let classnames = " ";
  if (show) classnames = " right-panel-active ";

  const [hide, Sethide] = useState(false);
  const [signInClass, setSignInClass] = useState("bg-blue-600");
  const [signUpClass, setSignUpClass] = useState("bg-red-400");
  const OnsignUp = () => {
    setSignInClass(" bg-red-400 ");
    setSignUpClass(" bg-blue-400 ");
    Sethide(true)
  };

  const OnsignIn = () => {
    setSignInClass(" bg-blue-400 ");
    setSignUpClass(" bg-red-400 ");
  };
  console.log("Sign in :", signInClass, " Sign up :", signUpClass);

  return (
    <div className=" bgImage flex justify-center items-center h-screen">
      <div
        className={" hidden  md:block container " + classnames}
        id="container"
      >
        <div className="form-container sign-up-container">
          <form action=" ">
            <h1 className="heading">Create Account</h1>
            <div className="social-container">
              <a href=" " className="social">
                <SiGithub />
              </a>
              <a href=" " className="social">
                <FcGoogle />
              </a>
              <a href=" " className="social">
                <SiLinkedin />
              </a>
            </div>
            <span className="span">or use your email for registration</span>
            <input className="inp" type="text" placeholder="Name" />
            <input className="inp" type="email" placeholder="Email" />
            <input className="inp" type="password" placeholder="Password" />
            <button className="btn">Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form action=" ">
            <h1 className="heading">Sign in</h1>
            <div className="social-container">
              <a href=" " className="social links">
                <SiGithub />
              </a>
              <a href=" " className="social">
                <FcGoogle />
              </a>
              <a href=" " className="social">
                <SiLinkedin />
              </a>
            </div>
            <span className="span">or use your account</span>
            <input className="inp" type="email" placeholder="Email" />
            <input className="inp" type="password" placeholder="Password" />
            <a href=" " className="links">
              Forgot your password?
            </a>
            <button className="btn">Sign In</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1 className="heading">Welcome Back!</h1>
              <p className="para">
                To keep connected with us please login with your personal info
              </p>
              <button
                className="ghost btn"
                id="signIn"
                onClick={() => SignInClicked()}
              >
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1 className="heading">Hello, Friend!</h1>
              <p className="para">
                Enter your personal details and start journey with us
              </p>
              <button
                className="ghost btn"
                id="signUp"
                onClick={() => SignUpClicked()}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* for sm/md screens */}
      <div className="h-screen w-full block md:hidden">
        <div className="bg-white mx-auto mt-20 w-5/6 h-5/6 rounded-xl">
          {/* Toggle btns */}
          <div className="flex items-center justify-center w-full pt-5">
            <div className="flex bg-red-400 px-1 py-1 rounded-full transition-colors  ease-in-out">
              <div
                onClick={OnsignIn}
                className={`text-white h-10 w-20 rounded-full font-bold text-sm pr-2 flex justify-center align-middle pt-2.5 ${signInClass} `}
              >
                Sign In
              </div>
              <div
                onClick={OnsignUp}
                className={`text-white h-10 w-20 rounded-full font-bold text-sm pr-2 flex justify-center align-middle pt-2.5 ${signUpClass} `}
              >
                Sign Up
              </div>
            </div>
          </div>

          {/* Sign In */}
          <div className="flex flex-col justify-center items-center mt-6 ">
            <h1 className="font-bold text-xl text-center heading">Sign In</h1>
            <div className=" space-x-5 mt-10 mb-5 flex justify-center mx-auto ">
              <a href=" " className="social links text-xl">
                <SiGithub />
              </a>
              <a href=" " className="social links text-xl">
                <FcGoogle />
              </a>
              <a href=" " className="social links text-xl">
                <SiLinkedin />
              </a>
            </div>
            <h1 className="text-sm font-medium heading">Or use your account</h1>
          </div>

          <div className="mx-8 mt-12 space-y-5">
            <div>
              <input
                className="inp"
                type="email"
                name=""
                id="email"
                placeholder="Email"
              />
            </div>

            <div>
              <input
                className="inp"
                type="password"
                name=""
                id="password"
                placeholder="Password"
              />
            </div>
          </div>
          <h1 className="text-sm font-medium text-center mt-5 heading">
            Forgot your Passsword
          </h1>
          <div className="flex justify-center mt-8">
            <button className="btn">Sign In</button>
          </div>

          {/* Sign Up */}
          <div className=" flex flex-col justify-center items-center mt-6 " >
            <h1 className="font-bold text-lg text-center heading">Sign Up</h1>
            <div className=" space-x-5 mt-5 mb-5 flex justify-center mx-auto ">
              <a href=" " className="social links text-xl">
                <SiGithub />
              </a>
              <a href=" " className="social links text-xl">
                <FcGoogle />
              </a>
              <a href=" " className="social links text-xl">
                <SiLinkedin />
              </a>
            </div>
            <h1 className="text-sm font-medium heading">Or use your account</h1>
          </div>

          <div className="mx-8 mt-7 space-y-5">
            <div>
              <input
                className="inp"
                type="email"
                name=""
                id="email"
                placeholder="Email"
              />
            </div>
            <div>
              <input
                className="inp"
                type="text"
                name=""
                id="name"
                placeholder="Fullname"
              />
            </div>

            <div>
              <input
                className="inp"
                type="password"
                name=""
                id="password"
                placeholder="Password"
              />
            </div>
          </div>
          <div className="flex justify-center mt-8">
            <button className="btn">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
}
