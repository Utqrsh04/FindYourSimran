import React from "react";
import bgimage from "../../assets/neonwave.jpg";

const ProfileCard = () => {
  return (
    <div className="flex flex-col justify-center items-center hover:bg-gray-700 bg-darkshade pb-4 rounded-lg">
      <div className="bg-blue-700 w-full h-24 rounded-t-lg "></div>
      <img
        src={bgimage}
        alt="Profile"
        className="flex w-20 h-20 rounded-full -mt-11"
      />
      <p className="text-xl font-bold">Lorem Ipsum</p>
      <p>Software Developer</p>
      <div className="flex flex-row space-x-6 mt-2 ">
        <div className="flex flex-col justify-center items-center">
          <span>0</span>
          <span className="font-medium font-mono">Posts</span>
        </div>
        <div className="flex flex-col justify-center items-center">
          <span>0</span>
          <span className="font-medium font-mono">Projects</span>
        </div>
      </div>
      <p className="text-center text-sm pt-3 px-3 font-mono">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, quasi
        inventore?{" "}
      </p>
      <button
        type="button"
        className="font-mono text-sm border-2 bg-gradient-to-tr from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 hover:border-black hover:border-2 mt-3 px-3.5 py-1.5 rounded-full"
      >
        View profile
      </button>
    </div>
  );
};

export default ProfileCard;
