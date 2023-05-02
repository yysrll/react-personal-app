import React from "react";
import PropTypes from "prop-types";

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

PrimaryButton.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    type: PropTypes.string,
    onClick: PropTypes.func.isRequired
}

export default PrimaryButton