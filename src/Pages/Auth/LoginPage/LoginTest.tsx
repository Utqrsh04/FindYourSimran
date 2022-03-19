import { useFormik } from "formik";
import { useState } from "react";
import { Link } from "react-router-dom";
import * as yup from "yup";
import "./LoginPage.css";
import Toast from "../../../Components/Toast/Toast";
import Input from "../../../Components/Input";
import axios from "axios";
import imgs from "../../../assets/Group 4.png";

const LoginTest = () => {
  const { errors, touched, handleReset, getFieldProps, isValid } = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: yup.object().shape({
      email: yup.string().required("Email is required").email(),

      password: yup.string().required("Password is required").max(20).min(8),
    }),
    onSubmit: () => {},
  });

  const [showToast, setShowToast] = useState(false);
  const [error, setError] = useState<any>("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (event: any) => {
    event.preventDefault();
    setShowToast(false);
    setLoading(true);

    var { email, password } = event.target.elements;
    email = email.value;
    password = password.value;

    console.log("User ", email, password);

    // making api call
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      console.log("Making Api CALL");

      const { data } = await axios.post(
        "/api/user/login",
        { email, password },
        config
      );

      console.log("Login SucessFull");
      console.log(data);

      // saving data in localStorage
      localStorage.setItem("userInfo", JSON.stringify(data.data));
      setLoading(false);
      window.location.href = "/dashboard";
    } catch (error: any) {
      console.log("Error Ocuuered during Login");

      console.log(error.response);
      setError(error.response.data.message);
      setLoading(false);
      setShowToast(true);
    }
  };
  return (
    <div>
      <div className="bgcolr flex justify-center items-center h-screen">
        <Toast type="Error" show={showToast} message={error} />
        <div className="flex rounded-lg justify-center mx-5 md:mx-10 lg:mx-20 xl:mx-40 w-full h-4/5">
          <div className="block rounded bg-white w-full md:w-1/2 px-5 xl:px-28 lg:px-14">
            <p className="pt-7">
              New Here?{" "}
              <Link className="text-navyblue" to="/signup">
                Create an Account
              </Link>
            </p>
            <h1 className="text-black font-bold text-4xl pt-5">
              Welcome Again
            </h1>
            <p className="text-sm text-gray-400 pt-4">
              A Developer Connection platform to <br />
              connect with developer around the world.
            </p>
            <form
              onSubmit={handleLogin}
              onReset={handleReset}
              className="w-full space-y-6"
            >
              <div className="w-full pt-4 ">
                <Input
                  id="email"
                  placeholder="Email Address"
                  touched={touched.email}
                  error={errors.email}
                  {...getFieldProps("email")}
                />

                <Input
                  id="password"
                  placeholder="Password"
                  touched={touched.password}
                  error={errors.password}
                  type="Password"
                  {...getFieldProps("password")}
                />
              </div>

              <div className="">
                <button
                  type="submit"
                  className={`bg-navyblue rounded px-7 w-full py-2 font-Sora font-bold text-white  ${
                    !isValid && "cursor-not-allowed"
                  } `}
                  disabled={!isValid}
                >
                  Sign In
                  {loading && "Wait"}
                </button>
              </div>
              <div className="div-line text-gray-500">Or sign In with</div>
              <div className="flex space-x-5 w-full justify-evenly">
                <button className="px-7 py-2 border-2 rounded">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 48 48"
                    width="30px"
                    height="30px"
                  >
                    <path
                      fill="#FFC107"
                      d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                    />
                    <path
                      fill="#FF3D00"
                      d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                    />
                    <path
                      fill="#4CAF50"
                      d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                    />
                    <path
                      fill="#1976D2"
                      d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                    />
                  </svg>
                </button>
                <button className="px-7 py-2 border-2 rounded">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 48 48"
                    width="30px"
                    height="30px"
                  >
                    <path
                      fill="#039be5"
                      d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"
                    />
                    <path
                      fill="#fff"
                      d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"
                    />
                  </svg>
                </button>
                <button className="px-7 py-2 border-2 rounded">
                  <svg
                    fill="#000000"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 30 30"
                    width="30px"
                    height="30px"
                  >
                    {" "}
                    <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z" />
                  </svg>
                </button>
              </div>
            </form>
          </div>
          {/* 2nd section */}
          <div className="md:block hidden bg-navyblue rounded-tr-lg rounded-br-lg w-1/2">
            <div className="flex">
              <div>
                <img
                  className="ml-9 lg:ml-20 mt-20"
                  src={imgs}
                  width={60}
                  alt=""
                />
                <div className="h-96 bg-gray-400 opacity-30 w-0.5 ml-16 lg:ml-28 mt-5 rounded"></div>
                <div className="w-16 h-0.5 bg-gray-400 opacity-30 absolute -mt-40 ml-16 lg:ml-28"></div>
              </div>
              <div className="-ml-10 mt-44">
                <div className="text-4xl lg:text-6xl text-white">Find Your</div>
                <div className="text-5xl lg:text-7xl text-white">
                  Developer.
                </div>
                <div className=""></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginTest;
