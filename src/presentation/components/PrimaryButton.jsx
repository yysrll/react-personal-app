import React from "react";

function PrimaryButton({label}) {
    return (
        <>
            <button
                className="w-full py-2 bg-gray-700 hover:bg-gray-800 text-white rounded-md"
            >
                {label}
            </button>
        </>
    )
}

export default PrimaryButton