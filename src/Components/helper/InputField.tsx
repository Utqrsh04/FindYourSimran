import { FC, InputHTMLAttributes } from "react";
import { FaAd } from "react-icons/fa";

interface InputFieldProp extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  placeholder: string;
  error?: string;
  touched?: boolean;
  type?: "default" | "Password";
}

const InputField: FC<InputFieldProp> = ({
  id,
  placeholder,
  error,
  touched,
  type,
}) => {
  if (type === "default") {
    return (
      <div className="flex flex-col">
        <label htmlFor="hello">
          <FaAd />
        </label>
        <input
          id="hello"
          className="w-60 focus:outline-none border-2 rounded-none hover:border-green-400 "
          type="text"
          placeholder={placeholder}
        />
      </div>
    );
  } else {
    return (
      <div className="flex flex-col">
        <label htmlFor="hello">
          <FaAd />
        </label>
        <input
          id="hello"
          className="w-36 focus:outline-none border-2 rounded-full hover:border-red-700 "
          type="text"
          placeholder={placeholder}
        />
      </div>
    );
  }
};

export default InputField;