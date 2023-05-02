import React from "react";

function PrimaryButton({children, className, type, onClick}) {
    return (
        <>
            <button
                className={`py-2 bg-gray-700 hover:bg-gray-800 text-white rounded-md ${className}`}
                type={type}
                onClick={onClick}
            >
                {children}
            </button>
        </>
    )
}

export default PrimaryButton