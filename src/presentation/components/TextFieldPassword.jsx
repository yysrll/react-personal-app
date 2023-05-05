import React from "react";
import PropTypes from "prop-types"; 
import { FiEye, FiEyeOff } from "react-icons/fi";

function TextFieldPassword({ className, label, value, onChange, isRequired = false }) {
  const [isFocused, setIsFocused] = React.useState(value !== "")
  const [isShowPassword, setisShowPassword] = React.useState(false)

  return (
    <div className={`relative flex items-center justify-center w-full text-[#707EAE] dark:text-white mt-6 ${className}`}>
      <label
        className={`absolute left-0 ${
          isFocused || value ? "text-xs text-gray-400 dark:text-white -top-2" : "text-base ms-3"
        } transform origin-top-left transition-all ${
          isFocused || value ? "-translate-y-2.5" : ""
        }`}
        htmlFor={label}
      >
        {label}
      </label>
      <label 
        className="absolute right-4 text-[#707EAE] dark:text-white flex items-center"
        htmlFor={label}>
          <div onClick={() => setisShowPassword(!isShowPassword)}>
            {isShowPassword ? <FiEye /> : <FiEyeOff />}
          </div>
      </label>
      <input
        className="w-full px-4 py-3 rounded-md border-gray-300 dark:border-white bg-[#F4F7FE] dark:bg-transparent placeholder-gray-400 dark:placeholder-white focus:outline-none dark:focus:outline-1 dark:border focus:border-transparent dark:focus:border-white"
        type={isShowPassword ? 'text' : 'password'}
        id={label}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        autoComplete="off"
        required={isRequired ? "required" : ""}
      />
    </div>
  );
}

TextFieldPassword.propTypes = {
    className: PropTypes.string,
    label: PropTypes.string.isRequired,
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    isRequired: PropTypes.bool
}

export default TextFieldPassword;
