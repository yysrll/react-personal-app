import React from "react";
import PropTypes from "prop-types"; 
import { FiEye, FiEyeOff } from "react-icons/fi";

function TextFieldPassword({ className, label, value, onChange, isRequired = false }) {
  const [isFocused, setIsFocused] = React.useState(value !== "")
  const [isShowPassword, setisShowPassword] = React.useState(false)

  return (
    <div className={`relative flex items-center justify-center w-full text-[#707EAE] mt-6 ${className}`}>
      <label
        className={`absolute left-0 ${
          isFocused || value ? "text-xs text-gray-400 -top-2" : "text-base ms-3"
        } transform origin-top-left transition-all ${
          isFocused || value ? "-translate-y-2.5" : ""
        }`}
        htmlFor={label}
      >
        {label}
      </label>
      <label 
        className="absolute right-4 text-[#707EAE] flex items-center"
        htmlFor={label}>
          <div onClick={() => setisShowPassword(!isShowPassword)}>
            {isShowPassword ? <FiEye /> : <FiEyeOff />}
          </div>
      </label>
      <input
        className="w-full ps-4 pe-12 py-3 rounded-md border-gray-300 bg-[#F4F7FE] placeholder-gray-400 focus:outline-none focus:border-transparent"
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
