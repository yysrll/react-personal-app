import React from "react";
import PropTypes from "prop-types";

function TextAreaField({label, placeholder, value, onChange}) {
    return (
        <>
        <label className="block font-normal mt-4 mb-2 text-gray-500">
            {label}
        </label>
        <textarea
            className="border border-gray-400 rounded py-2 px-3 w-full text-gray-700"
            rows="4"
            placeholder={placeholder}
            value={value}
            onChange={(event) => onChange(event)}
        >
        </textarea>
        </>
    )
}

TextAreaField.propTypes = {
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}

export default TextAreaField