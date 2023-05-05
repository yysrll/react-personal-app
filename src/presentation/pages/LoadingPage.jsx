import React from "react";
import LoadingIndicator from "../components/LoadingIndicator";

function LoadingPage() {
    return (
        <div className="h-screen flex flex-col justify-center items-center text-gray-700">
                <LoadingIndicator className="border-t-primary" />
        </div>
    )
}

export default LoadingPage