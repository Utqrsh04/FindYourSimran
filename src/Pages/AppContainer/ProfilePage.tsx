import React from "react";
import { FaBirthdayCake, FaPhoneSquareAlt, FaBuilding } from "react-icons/fa";
import { MdLocationOn, MdEmail } from "react-icons/md";
import gender from "../../assets/gender.png";

const ProfilePage = () => {
  return (
    <div id="profile" className="bg-white pt-16 flex">
      <div className="w-full">
        <img
          className="h-40 w-full bg-contain z-0"
          src="https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77700014742.jpg"
          alt="background"
        />
        <div className="relative -top-32 border-2 border-black lg:mx-28  md:mx-10 mx-2 sm:px-12 flex-col sm:flex-row h-40 bg-white flex sm:justify-between justify-evenly items-center">
          <div className="flex flex-row items-center justify-center">
            <img
              className="sm:h-24 sm:w-24 h-20 w-20 rounded-full border-black border-2"
              src="https://img.icons8.com/fluency/96/000000/person-male.png"
              alt=""
            />
            <div className="pl-4">
              <p className="font-semibold text-xl">Lorem Ipsum</p>
              <p className="text-sm">User Name</p>
            </div>
          </div>
          <div>
            <button
              className="flex px-4 py-1 bg-gray-600 items-center justify-center rounded-md text-white border-2 hover:bg-blue-400 hover:border-black hover:border-2"
              type="button"
            >
              <svg
                className="w-4 h-4 mr-1"
                fill="#fff"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                width="32px"
                height="32px"
              >
                <path d="M 23.90625 3.96875 C 22.859375 3.96875 21.8125 4.375 21 5.1875 L 5.1875 21 L 5.125 21.3125 L 4.03125 26.8125 L 3.71875 28.28125 L 5.1875 27.96875 L 10.6875 26.875 L 11 26.8125 L 26.8125 11 C 28.4375 9.375 28.4375 6.8125 26.8125 5.1875 C 26 4.375 24.953125 3.96875 23.90625 3.96875 Z M 23.90625 5.875 C 24.410156 5.875 24.917969 6.105469 25.40625 6.59375 C 26.378906 7.566406 26.378906 8.621094 25.40625 9.59375 L 24.6875 10.28125 L 21.71875 7.3125 L 22.40625 6.59375 C 22.894531 6.105469 23.402344 5.875 23.90625 5.875 Z M 20.3125 8.71875 L 23.28125 11.6875 L 11.1875 23.78125 C 10.53125 22.5 9.5 21.46875 8.21875 20.8125 Z M 6.9375 22.4375 C 8.136719 22.921875 9.078125 23.863281 9.5625 25.0625 L 6.28125 25.71875 Z" />
              </svg>
              Edit Profile
            </button>
          </div>
        </div>
        <div className="flex flex-row justify-center space-x-8 -mt-20">
          <div className="w-1/3 border-2 border-black">
            <p className="border-b-2 p-3 font-medium text-lg">
              Personal Information
            </p>
            <div className="flex justify-start flex-col border-b-2 p-2 ">
              <p className="flex items-baseline pl-2">
                <FaBirthdayCake /> Date of Birth
              </p>
              <p>10 ko hai </p>
            </div>
            <div className="flex justify-start flex-col border-b-2 p-2">
              <div className="flex items-center space-x-2">
                <img className="w-6 h-4" src={gender} alt="gender" />
                <p className="">Gender</p>
              </div>
              <p className=""> Male </p>
            </div>

            <div className="flex justify-start flex-col border-b-2 p-2">
              <p className="flex items-center pl-2">
                <FaPhoneSquareAlt /> Contact Number
              </p>
              <p>945XXXXXXX </p>
            </div>
            <div className="flex justify-start flex-col border-b-2 p-2">
              <p className="flex items-center pl-2">
                <MdEmail /> Email Address
              </p>
              <p>trial@gmail.com </p>
            </div>
            <div className="flex justify-start flex-col border-b-2 p-2">
              <p className="flex items-baseline pl-2">
                <MdLocationOn /> Location{" "}
              </p>
              <p>Mathura </p>
            </div>
            <div className="flex justify-start flex-col border-b-2 p-2">
              <p className="flex items-baseline pl-2">
                <FaBuilding /> Company
              </p>
              <p>GLA Univerity, MATHURA </p>
            </div>
          </div>

          <div className="w-2/4 border-2 border-black">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            aliquam minima soluta, voluptas, magni fugiat culpa esse, accusamus
            iure delectus non. Adipisci odio neque et repudiandae doloremque
            eveniet ea! Necessitatibus magni totam dolorum architecto enim
            facilis sunt expedita. Voluptates repellat adipisci cum magnam
            suscipit aut earum laborum ipsam commodi nihil veniam aspernatur
            illum, itaque quo minus nisi ipsum recusandae beatae modi excepturi
            exercitationem? Magnam ad autem quibusdam quam velit dignissimos eum
            obcaecati quasi vitae molestias? Dicta voluptatibus soluta
            necessitatibus consectetur nesciunt sequi quas distinctio omnis,
            vero provident rem sint ducimus a voluptatem totam fugit officiis
            magnam optio accusamus perspiciatis ut.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
