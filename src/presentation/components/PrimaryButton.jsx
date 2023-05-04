import React from "react";
import PropTypes from "prop-types";

function PrimaryButton({children, className, type = "button", onClick}) {
    return (
        <>
            <button
                className={`py-2 px-8 bg-primary h-[56px] hover:bg-blue-900 text-white rounded-full ${className}`}
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
    onClick: PropTypes.func
}

export default PrimaryButton