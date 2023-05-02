import React from "react";

function TextField({label, type, placeholder}) {
    return (
        <>
            <label className="block font-normal mt-4 mb-2 text-gray-500">
                {label}
            </label>
            <input
                className="border border-gray-400 rounded py-2 px-3 w-full text-gray-700"
                type={type}
                placeholder={placeholder}
            />
        </>
    )
}

export default TextField