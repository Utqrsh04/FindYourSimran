import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { useFormik } from "formik";
import * as yup from "yup";
import "./AuthPage.css";
import { useHistory } from "react-router";
import Toast from "../../Components/Toast/Toast";

const Authpage = () =>{
  const [show, setShow] = useState(false);
  const SignInClicked = () => setShow(!show);

  const SignUpClicked = () => setShow(!show);

  let classnames = " ";
  if (show) classnames = " right-panel-active ";

  const history = useHistory();
  const ForSignIn = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: yup.object().shape({
      email: yup.string().required("email is required").email(),

      password: yup.string().required("password is required").max(20).min(8),
    }),
    onSubmit: (data) => {
      console.log(data);
      sessionStorage.setItem("loggedIn", "true");
      history.push("/dashboard");
    },
  });

  const [showToast, setShowToast] = useState(false)

  const ForSignUp = useFormik({
    initialValues: { name: "", email: "", password: "" },
    validationSchema: yup.object().shape({
      name: yup
        .string()
        .required("Name is required")
        .matches(
          /^[aA-zZ\s]+$/,
          "Numbers or special characters are not allowed."
        ),

      email: yup.string().required("email is required").email(),

      password: yup.string().required("password is required").max(20).min(8),
    }),
    onSubmit: (data) => {
      console.log(data);
      setShowToast(true);
    },
  }); 

  return (
    <div className=" bgImage flex justify-center items-center h-screen">
       <Toast show={showToast} />

      <div
        className={" mx-4 md:mx-8 md:m-0 container " + classnames}
        id="container"
      >
        <div className="form-container sign-up-container">
          <form
            onSubmit={ForSignUp.handleSubmit}
            onReset={ForSignUp.handleReset}
          >
            <h1 className="heading">Create Account</h1>
            <div className="social-container">
              <a href="/" className="social">
                <SiGithub />
              </a>
              <a href="/" className="social">
                <FcGoogle />
              </a>
              <a href="/" className="social">
                <SiLinkedin />
              </a>
            </div>
            <span className="span">or use your email for registration</span>
            <div className=" w-full">
              <input
                className="inp"
                type="text"
                placeholder="Name"
                id="name"
                value={ForSignUp.values.name}
                // errors={ForSignUp.errors.name}
                onChange={ForSignUp.handleChange}
                required
              />
              <h1 className="text-red-500 mb-3 text-left font-semibold text-xs">
                {ForSignUp.errors.name ? ForSignUp.errors.name : ""}
              </h1>
            </div>
            <div className=" w-full">
              <input
                className="inp"
                type="email"
                placeholder="Email"
                id="email"
                value={ForSignUp.values.email}
                // errors={ForSignUp.errors.email}
                onChange={ForSignUp.handleChange}
                required
              />
              <h1 className="text-red-500 mb-3 text-left font-semibold text-xs">
                {ForSignUp.errors.email ? ForSignUp.errors.email : ""}
              </h1>
            </div>
            <div className=" w-full">
              <input
                className="inp"
                type="password"
                placeholder="Password"
                id="password"
                value={ForSignUp.values.password}
                // errors={ForSignUp.errors.password}
                onChange={ForSignUp.handleChange}
                required
              />
              <h1 className="text-red-500 mb-3 text-left font-semibold text-xs">
                {ForSignUp.errors.password ? ForSignUp.errors.password : " "}
              </h1>
            </div>
            <button className="btn">Sign Up</button>
          </form>
        </div>

        <div className="form-container sign-in-container">
          <form
            onSubmit={ForSignIn.handleSubmit}
            onReset={ForSignIn.handleReset}
          >
            <h1 className="heading">Sign in</h1>
            {/* Icons */}
            <div className="social-container">
              <a href="/" className="social links">
                <SiGithub />
              </a>
              <a href="/" className="social">
                <FcGoogle />
              </a>
              <a href="/" className="social">
                <SiLinkedin />
              </a>
            </div>

            <span className="span">or use your account</span>
            <div className=" w-full">
              <input
                className="inp"
                type="email"
                placeholder="Email"
                id="email"
                value={ForSignIn.values.email}
                // errors={ForSignIn.errors.email}
                onChange={ForSignIn.handleChange}
                required
              />
              <h1 className="text-red-500 mb-5 text-left font-semibold text-xs">
                {ForSignIn.errors.email ? ForSignIn.errors.email : " "}
              </h1>
            </div>
            <div className="w-full">
              <input
                className="inp"
                type="password"
                placeholder="Password"
                id="password"
                value={ForSignIn.values.password}
                // errors={ForSignIn.errors.password}
                onChange={ForSignIn.handleChange}
                
              />
              <h1 className="text-red-500 mb-5 text-left font-semibold text-xs">
                {ForSignIn.errors.password ? ForSignIn.errors.password : " "}
              </h1>
            </div>

            <a href=" " className="links">
              Forgot your password?
            </a>
            <button className="btn" type="submit">
              Sign In
            </button>
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
              <h1 className="heading">Hello, Developer!</h1>
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
    </div>
  );
}

export default Authpage;