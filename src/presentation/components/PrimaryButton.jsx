import React from "react";

function PrimaryButton({children, className}) {
    return (
        <>
            <button
                className={`py-2 bg-gray-700 hover:bg-gray-800 text-white rounded-md ${className}`}
            >
                {children}
            </button>
        </>
    )
}

export default PrimaryButton