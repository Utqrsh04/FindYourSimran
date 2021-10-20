import profile from "../../assets/images.jpg";
import InputField from "../helper/InputField";

const Personalinfo = () => {
  return (
    <div className="bg-white">
      <h1 className="p-4 border-2 text-black font font-semibold text-lg">
        Personal Information
      </h1>
      <div className="p-3 border-2">
        <div className="flex border-2 rounded h-20 justify-between">
          <div className="flex flex-row ml-6 my-3 space-x-2">
            <img className="w-14 h-14 rounded-full" src={profile} alt="" />
            <div className="flex flex-col">
              <p className="font-medium text-lg">Lorum Ipsum</p>
              <a className="text-blue-500 text-sm" href=" ">
                Change Avatar
              </a>
            </div>
          </div>
          <button
            className="m-5 px-3 bg-blue-100 text-blue-500 rounded-md"
            type="button"
          >
            Premium Membership
          </button>
        </div>
        <div className="w-full h-0.5 mt-6 bg-gray-300"></div>
        <div className="mt-6">Account Information</div>

        <InputField id="email" placeholder="email type" type="default"/>
        <InputField  id="password" placeholder="email type" type="Password"/>

      </div>
    </div>
  );
};

export default Personalinfo;
