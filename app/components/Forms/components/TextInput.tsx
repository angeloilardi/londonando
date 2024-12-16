import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  error: string;
}

export default function TextInput({
  name,
  label,
  error,
  placeholder = " ",
  required = true,
  ...otherProps
}: InputProps) {
  return (
    <div className="flex flex-col gap-2 mb-2">
      <label
        className="text-sm font-medium text-gray-900 dark:text-white"
        htmlFor={name}
      >
        {label}
      </label>
      <input
        required={required}
        name={name}
        type="text"
        placeholder={placeholder}
        {...otherProps}
        className="block w-full border disabled:cursor-not-allowed disabled:opacity-50 border-gray-300 bg-gray-50 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500 p-2.5 text-sm rounded-lg shadow-sm dark:shadow-sm-light peer invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500"
      />
      <span className="hidden text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
        {error}
      </span>
    </div>
  );
}
