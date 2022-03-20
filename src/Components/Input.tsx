import { FC, InputHTMLAttributes, useState } from "react";
import { FaEye } from "react-icons/fa";

interface InputPropType extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  placeholder: string;
  error?: string;
  touched?: boolean;
  type?: "Password" | " ";
  values: string;
}

const Input: FC<InputPropType> = ({
  id,
  placeholder,
  error,
  touched,
  values,
  type,
  ...rest
}) => {
  const [showPass, setShowPass] = useState(false);
  const [typePass, setTypePass] = useState<string | undefined>(type);

  return (
    <div className="flex flex-col space-y-2 mb-2 text-left ">
      <label
        htmlFor={id}
        id={id}
        className={`labels  absolute ${
          values !== "" ? " text-navyblue " : " text-gray-400  "
        } bg-white ml-3 text-sm -mt-0.5`}
      >
        {placeholder}
      </label>
      <div className="flex flex-row justify-between font-Sora text-sm text-black">
        <input
          type={typePass}
          id={id}
          {...rest}
          placeholder={placeholder}
          required
          className="rounded border-2 w-full p-1.5 focus:outline-none focus:border-navyblue"
        />
        {type === "Password" && setShowPass && (
          <FaEye
            onClick={() => {
              setShowPass(!showPass);
              typePass === "Password"
                ? setTypePass(" ")
                : setTypePass("Password");
            }}
            className="-ml-20 mt-2 eye w-4 h-4 mr-2"
          />
        )}
      </div>
      {<h2 className="text-xs h-2 text-red-600">{touched && error}</h2>}
    </div>
  );
};

export default Input;
