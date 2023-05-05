import React from "react";
import PropTypes from "prop-types";

function TextAreaField({className, label, value, onChange}) {
    const [isFocused, setIsFocused] = React.useState(value !== "");

    return (
        <div className="relative flex items-start justify-center w-full text-[#707EAE] dark:text-white mt-6">
            <label
                className={`absolute left-0 ${
                isFocused || value ? "text-xs text-gray-400 dark:text-white -top-2" : "text-base ms-3 top-2"
                } transform origin-top-left transition-all ${
                isFocused || value ? "-translate-y-2.5" : ""
                }`}
                htmlFor={label}
            >
                {label}
            </label>
            <div
                className={`border border-transparent rounded py-2 px-3 h-24 w-full text-gray-700 dark:text-white dark:border-white dark:bg-transparent dark:focus:outline-1 dark:focus:border-white ${className}`}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                onInput={(event) => onChange(event.target.innerHTML)}
                contentEditable
            >
            </div>
        </ div>
    )
}

TextAreaField.propTypes = {
    className: PropTypes.string,
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
}

export default TextAreaField