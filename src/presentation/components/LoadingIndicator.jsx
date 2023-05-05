import React from "react";
import PropTypes from "prop-types";

function LoadingIndicator({ className }) {
    return (
        <div className={`animate-spin me-2 w-6 h-6 border-4 border-transparent border-t-white rounded-full ${className}`}></div>
    )
}

LoadingIndicator.propType = {
    className: PropTypes.string
}

export default LoadingIndicator