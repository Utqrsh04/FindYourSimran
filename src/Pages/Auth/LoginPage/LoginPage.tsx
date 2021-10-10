import { useFormik } from "formik";
import React, { useCallback, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import * as yup from "yup";
import app from "../../../firebase";

import "./LoginPage.css";
import Toast from "../../../Components/Toast/Toast";

const LoginPage = () => {
  const history = useHistory();

  const SignIn = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: yup.object().shape({
      email: yup.string().required("email is required").email(),

      password: yup.string().required("password is required").max(20).min(8),
    }),
    onSubmit: () => {},
  });

  const [showToast, setShowToast] = useState(false);
  const [error, setError] = useState<any>("");

  const handleLogin = useCallback(
    async (event: any) => {
      event.preventDefault();
      setError("");
      setShowToast(false);
      const { email, password } = event.target.elements;
      console.log("User ", email.value, password.value);
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        console.log("logged In");
        history.push("/dashboard");
      } catch (error: any) {
        console.log(error);
        setError(error.message);
        setShowToast(true);

        // alert(error);
      }
    },
    [history]
  );

  return (
    <div className=" bgImage flex justify-center items-center h-screen">
      <Toast type="Error" show={showToast} message={error} />
      <div className="md:mx-12 lg:mx-24 xl:mx-40  flex h-4/5 w-full">
        <div className="bg-blue-200 w-1/2 p-5 rounded-l-xl text-center flex-col justify-center ">
          <h1 className="text-2xl pt-5 text-gray-800  font-bold">
            Login to Continue
          </h1>
          <p className="text-sm font-bold">
            New here?{" "}
            <Link className="text-red-600" to="/signup">
              Create an account{" "}
            </Link>
          </p>

          <form
            onSubmit={handleLogin}
            onReset={SignIn.handleReset}
            className="w-full md:px-8 xl:px-10 mt-10 space-y-6"
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
            <h1 className="text-sm pt-5 font-semibold">Forgot Password ?</h1>
            <div className="">
              <button
                type="submit"
                className="bg-black text-white px-7 rounded-xl py-2"
              >
                Sign In
              </button>
            </div>
          </form>
        </div>

        <div className="bg-gray-400 rounded-r-xl h-full w-1/2 p-5">
          <div>Logo here</div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
