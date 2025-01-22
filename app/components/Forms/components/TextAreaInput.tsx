import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label: string;
  required?: boolean;
  error?: string;
}

export default function TextAreaInput({
  name,
  label,
  required = true,
  error,
  ...otherProps
}: InputProps) {
  return (
    <div className="flex flex-col gap-2 mb-2">
      <label
        htmlFor="message"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <textarea
        rows={4}
        name={name}
        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 peer"
        required={required}
        {...otherProps}
      ></textarea>
      {error && (
        <span className="hidden text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
          {error}
        </span>
      )}
    </div>
  );
}
