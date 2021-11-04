const ProfilePage = () => {
  return (
    <div className="mx-auto my-5 p-5 pt-20">
      <div className="md:flex no-wrap md:-mx-2 ">
        {/* <!-- Left Side --> */}
        <div className="w-full md:w-3/12 md:mx-2">
          {/* <!-- Profile Card --> */}
          <div className="bg-white p-3 border-t-4 border-gray-600">
            <div className="image overflow-hidden">
              <img
                className="h-auto w-full mx-auto"
                src="data:image/png;base64,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"
                alt=""
              />
            </div>
            <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">
              Lorum Ipsum
            </h1>
            <h3 className="text-gray-600 font-lg text-semibold leading-6">
              Software Developer
            </h3>
            <p className="text-sm text-gray-500 hover:text-gray-600 leading-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit, eligendi dolorum sequi illum qui unde aspernatur
              non deserunt
            </p>
            <ul className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
              <li className="flex items-center py-3">
                <span>Status</span>
                <span className="ml-auto">
                  <span className="bg-green-600 py-1 px-2 rounded text-white text-sm">
                    Active
                  </span>
                </span>
              </li>
              <li className="flex items-center py-3">
                <span>Member since</span>
                <span className="ml-auto">Nov 07, 2016</span>
              </li>
            </ul>
          </div>
        </div>
        {/* <!-- Right Side --> */}
        <div className="w-full md:w-9/12 mx-2 h-64">
          {/* <!-- Profile tab -->
            <!-- About Section --> */}
          <div className="bg-white p-3 shadow-xl border-2 rounded-sm">
            <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 border-b-2">
              <span className="text-gray-700">
                <svg
                  className="h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </span>
              <span className="tracking-wide">About</span>
            </div>
            <div className="text-gray-700">
              <div className="grid md:grid-cols-2 text-sm">
                <div className="grid grid-cols-2">
                  <div className="px-4 py-2 font-semibold">First Name</div>
                  <div className="px-4 py-2">Lorum</div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="px-4 py-2 font-semibold">Last Name</div>
                  <div className="px-4 py-2">Ipsum</div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="px-4 py-2 font-semibold">Gender</div>
                  <div className="px-4 py-2">Male</div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="px-4 py-2 font-semibold">Contact No.</div>
                  <div className="px-4 py-2">+11 998001001</div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="px-4 py-2 font-semibold">Current Address</div>
                  <div className="px-4 py-2">Beech Creek, PA, Pennsylvania</div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="px-4 py-2 font-semibold">
                    Permanant Address
                  </div>
                  <div className="px-4 py-2">
                    Arlington Heights, IL, Illinois
                  </div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="px-4 py-2 font-semibold">Email.</div>
                  <div className="px-4 py-2">
                    <a className="text-blue-800" href="mailto:jane@example.com">
                      trial@example.com
                    </a>
                  </div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="px-4 py-2 font-semibold">Birthday</div>
                  <div className="px-4 py-2">Feb 06, 1998</div>
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-between mx-5">
              <div className="flex flex-row items-center space-x-3">
                <div className="flex text-lg font-normal">Connect with:</div>
                <div className="flex flex-row space-x-1">
                  {/* facebook */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 48 48"
                    width="28px"
                    height="28px"
                  >
                    <linearGradient
                      id="Ld6sqrtcxMyckEl6xeDdMa"
                      x1="9.993"
                      x2="40.615"
                      y1="9.993"
                      y2="40.615"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0" stop-color="#2aa4f4" />
                      <stop offset="1" stop-color="#007ad9" />
                    </linearGradient>
                    <path
                      fill="url(#Ld6sqrtcxMyckEl6xeDdMa)"
                      d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"
                    />
                    <path
                      fill="#fff"
                      d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z"
                    />
                  </svg>
                  {/* google */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 48 48"
                    width="28px"
                    height="28px"
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
                  {/* github */}
                  <svg
                    fill="#000000"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 30 30"
                    width="28px"
                    height="28px"
                  >
                    {" "}
                    <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z" />
                  </svg>
                  {/* linkedin */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 48 48"
                    width="28px"
                    height="28px"
                  >
                    <path
                      fill="#0288D1"
                      d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
                    />
                    <path
                      fill="#FFF"
                      d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"
                    />
                  </svg>
                </div>
              </div>
              <div className="">
                <button className="bg-gray-300 px-5 py-1">Message</button>
              </div>
            </div>
          </div>
          {/* <!-- End of about section --> */}
          <div className="my-4"></div>
          {/* <!-- Experience and education --> */}
          <div className="bg-white p-3 shadow-lg border-2 rounded-sm">
            <div className="grid grid-cols-2">
              <div>
                <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3 border-b-2 ">
                  <span className="text-gray-700">
                    <svg
                      className="h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </span>
                  <span className="tracking-wide">Experience</span>
                </div>
                <ul className="list-inside space-y-2">
                  <li>
                    <div className="text-teal-600">
                      Owner at Her Company Inc.
                    </div>
                    <div className="text-gray-500 text-xs">
                      March 2020 - Now
                    </div>
                  </li>
                  <li>
                    <div className="text-teal-600">
                      Owner at Her Company Inc.
                    </div>
                    <div className="text-gray-500 text-xs">
                      March 2020 - Now
                    </div>
                  </li>
                  <li>
                    <div className="text-teal-600">
                      Owner at Her Company Inc.
                    </div>
                    <div className="text-gray-500 text-xs">
                      March 2020 - Now
                    </div>
                  </li>
                  <li>
                    <div className="text-teal-600">
                      Owner at Her Company Inc.
                    </div>
                    <div className="text-gray-500 text-xs">
                      March 2020 - Now
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3 border-b-2">
                  <span className="text-gray-700">
                    <svg
                      className="h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path
                        fill="#fff"
                        d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                      />
                    </svg>
                  </span>
                  <span className="tracking-wide">Education</span>
                </div>
                <ul className="list-inside space-y-2">
                  <li>
                    <div className="text-teal-600">
                      Masters Degree in Oxford
                    </div>
                    <div className="text-gray-500 text-xs">
                      March 2020 - Now
                    </div>
                  </li>
                  <li>
                    <div className="text-teal-600">
                      Bachelors Degreen in LPU
                    </div>
                    <div className="text-gray-500 text-xs">
                      March 2020 - Now
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            {/* <!-- End of Experience and education grid --> */}
          </div>
          {/* <!-- End of profile tab --> */}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
