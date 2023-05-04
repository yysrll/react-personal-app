import React from "react";
import { ReactComponent as NotFoundIllustration } from "../assets/404.svg"
import { Link } from "react-router-dom";
import PrimaryButton from "../components/PrimaryButton";

function NotFoundPage() {
    return (
        <div className="h-screen flex flex-col justify-center items-center text-gray-700">
                <NotFoundIllustration className="w-1/2 md:w-1/3 lg:1/4 h-fit" />
                <div className="mt-4 text-2xl">
                    Oops, Page Not Found
                </div>
                <Link to="/">
                    <PrimaryButton className="mt-12">
                        Back to Home
                    </PrimaryButton>
                </Link>
        </div>
    )
}

export default NotFoundPage