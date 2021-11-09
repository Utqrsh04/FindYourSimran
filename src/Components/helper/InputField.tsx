import { FC, InputHTMLAttributes } from "react";

interface InputFieldProp extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  placeholder: string;
  error?: string;
  touched?: boolean;
  type?: string;
  className: string;
}

const InputField: FC<InputFieldProp> = ({
  id,
  placeholder,
  error,
  touched,
  type,
  className,
}) => {
  return (
    <div className="flex flex-col mt-5">
      <label className="text-base font-semibold" htmlFor={id}>{id}</label>
      <input
        id={id}
        className={className}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputField;
