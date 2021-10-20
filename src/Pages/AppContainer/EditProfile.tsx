import {
  IoPersonCircleSharp,
  IoCardSharp,
  IoLogOutOutline,
} from "react-icons/io5";
import { IoMdLock } from "react-icons/io";
import Personalinfo from "../../Components/Edit/Personalinfo";

const EditProfile = () => {
  return (
    <div className="flex flex-col md:flex-row top-20 h-screen bg-gray-300 justify-center space-x-10 w-full">
      <div className=" w-1/5 ">
        <div className="sticky top-20 my-8 ml-8 bg-white rounded-md">
          <h1 className="p-5 border-b-2 border-gray-400 text-xl font-semibold">
            Edit Profile
          </h1>
          <div className="flex flex-col">
            <a
              href=" "
              className=" flex flex-row items-center space-x-1 p-4 bg-gray-200 border-l-4 border-blue-700"
            >
              <IoPersonCircleSharp className="text-2xl text-purple-500" />
              <div className="font-semibold text-base">
                Personal Information
              </div>
            </a>
            <a href=" " className="flex flex-row items-center space-x-1 p-4 active:bg-red-800">
              <IoMdLock className="text-2xl text-blue-400 " />
              <div className="font-semibold text-base">Login and Password</div>
            </a>

            <a href=" " className="flex flex-row items-center space-x-1 p-4">
              <IoCardSharp className="text-2xl text-green-500" />
              <div className="font-semibold text-base">Membership Settings</div>
            </a>

            <a href=" " className="flex flex-row items-center space-x-1 p-4">
              <IoLogOutOutline className="text-2xl text-yellow-600" />
              <div className="font-semibold text-base">Logout</div>
            </a>
          </div>
        </div>
      </div>

      {/* 2nd column */}
      <div className="w-3/5 mt-20">
        <Personalinfo />
      </div>
    </div>
  );
};

export default EditProfile;
