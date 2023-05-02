import React from "react";
import PropTypes from "prop-types";

function TextField({label, type, placeholder, value, onChange}) {
    return (
        <>
            <label className="block font-normal mt-4 mb-2 text-gray-500">
                {label}
            </label>
            <input
                className="border border-gray-400 rounded py-2 px-3 w-full text-gray-700"
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={(event) => onChange(event)}
            />
        </>
    )
}

TextField.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}

export default TextField