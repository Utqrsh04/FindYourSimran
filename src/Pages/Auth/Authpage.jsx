import React, { useState } from "react";
import "./AuthPage.css";
import { FcGoogle } from "react-icons/fc";
import { SiGithub, SiLinkedin } from "react-icons/si";

export default function Authpage() {
  const [SignUp, setSignUp] = useState(false);
  const SignInClicked = () => {
    setSignUp(!SignUp);
  };
  const SignUpClicked = () => {
    setSignUp(!SignUp);
  };

  let classnames = " ";
  if (SignUp) classnames = " right-panel-active ";

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

      <div className="h-screen w-full block md:hidden">
        <div className="bg-white mx-auto mt-20 w-5/6 h-5/6 rounded-lg">
          <div className="flex items-center justify-center w-full pt-8">
            <label
              htmlFor="toggleB"
              className="flex items-center cursor-pointer"
            >
              <div className="relative">
                <input className="inp" type="checkbox" id="toggleB" className="sr-only" />
                <div className="block bg-blue-500 w-36 h-10 rounded-full font-bold text-sm pr-2 text-right pt-2.5">
                  Sign Up
                </div>
                <div
                  className="dot absolute left-1 top-1 bg-white  w-16 h-8 rounded-full 
                font-bold text-sm flex justify-center items-center transition"
                >
                  Sign In
                </div>
              </div>
            </label>
          </div>
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
        </div>
      </div>
    </div>
  );
}
