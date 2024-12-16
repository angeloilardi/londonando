import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLSelectElement> {
  name: string;
  label: string;
  options: string[];
}

export default function SelectInput({
  name,
  label,
  options,
  ...otherProps
}: InputProps) {
  return (
    <div className="flex flex-col gap-2 mb-2">
      <label
        htmlFor={name}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <select
        id={name}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        {...otherProps}
      >
        {options.map((option, i) => {
          return (
            <option key={option + i} value={option}>
              {option}
            </option>
          );
        })}
      </select>
    </div>
  );
}
