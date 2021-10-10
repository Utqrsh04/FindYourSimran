import React, { useCallback, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import app from "../../../firebase";
import "./SignupPage.css";
import { useFormik } from "formik";
import * as yup from "yup";
import Toast from "../../../Components/Toast/Toast";

const SignupPage = () => {
  const history = useHistory();

  const [showToast, setShowToast] = useState(false);
  const [error, setError] = useState<any>("");

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

  const handleSignUp = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password, name } = event.target.elements;
      console.log("Sign up ", name.value, email.value, password.value);
      try {
        await app
          .auth()
          .createUserWithEmailAndPassword(email.value, password.value);
        console.log("User Created ");
        history.push("/login");
      } catch (error: any) {
        console.log(error);
        setError(error.message);
        setShowToast(true);
        alert(error);
      }
    },
    [history]
  );

  return (
    <div className=" bgImage flex justify-center items-center h-screen">
      <Toast type="Success" show={showToast} message={error} />
      <div className="md:mx-12 lg:mx-24 xl:mx-40  flex h-4/5 w-full">
        <div className="bg-blue-200 w-1/2 p-5 rounded-l-xl text-center flex-col justify-center ">
          <h1 className="text-2xl pt-5 text-gray-800  font-bold">
            Create account to continue
          </h1>
          <p className="text-sm font-bold">
            Already have an account?{" "}
            <Link className="text-red-600" to="/login">
              Login now
            </Link>
          </p>
          <form
            onSubmit={handleSignUp}
            onReset={ForSignUp.handleReset}
            className="w-full md:px-8 xl:px-10 mt-8 space-y-3"
          >
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
            <div className="flex flex-col text-left ">
              <label
                htmlFor="name"
                className="text-gray-700 ml-1  font-bold text-xl"
              >
                Name
              </label>
              <input
                id="name"
                type="name"
                name="name"
                placeholder="Name"
                required
                className="px-4 py-2 rounded-lg border border-gray-500 text-black placeholder-gray-600 focus:outline-none "
              />
            </div>
            <div className="flex flex-col space-y-2 text-left ">
              <label
                htmlFor="email"
                className="text-gray-700 ml-1  font-bold text-xl"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Email"
                required
                className="px-4 py-2 rounded-lg border border-gray-500 text-black placeholder-gray-600 focus:outline-none "
              />
            </div>
            <div className="flex flex-col space-y-2 text-left ">
              <label
                htmlFor="password"
                className="text-gray-700 ml-1 font-bold text-xl"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                name="password"
                placeholder="Password"
                required
                className="px-4 py-2 rounded-lg border border-gray-500 text-black placeholder-gray-600 focus:outline-none "
              />
            </div>
            <div className="pt-5">
              <button
                type="submit"
                className="bg-black text-white px-7 rounded-xl py-2"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>

        <div className="bg-gray-400 rounded-r-xl w-1/2 h-full p-5">
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
