import React from "react";
import { ReactComponent as Hero } from '../assets/auth-hero.svg';
import PropTypes from 'prop-types';

function AuthenticationLayout({children}) {
    return (
        <div className="relative overflow-x-hidden dark:bg-gray-900">
            <div className="absolute top-[36px] left-[28px] flex items-center">
                <img 
                    className="me-[16px]"
                    src={require('../assets/logo.png')} alt="Logo" />
                <div className="text-gray-700 dark:text-white">
                    Personal  Note
                </div>
            </div>
            <div className="flex flex-col h-screen md:flex-row-reverse">
                <div className="pt-[76px] bg-background dark:bg-gray-700 pb-[12px] md:w-[40%] md:pt-0 md:pb-0 md:relative">
                    <Hero 
                        className="mx-auto mt-[12px] h-[210px] w-[320px] md:h-[65%] md:w-[120%] md:mt-0 md:absolute md:-left-[15%] md:bottom-4" />
                    <img 
                        className="absolute z-0 w-[113px] top-[56px] right-[3px] md:w-[160px] md:top-[44px] md:bottom-0 md:right-[18px]"
                        src={require('../assets/rounded.png')} alt="Rounded" />
                </div>
                <div className="flex md:flex-1 flex-col md:justify-center md:items-center p-6 pb-12 text-gray-700">
                    <div className="w-full md:w-2/3 lg:w-1/2">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

AuthenticationLayout.propsType = {
    children: PropTypes.node
}

export default AuthenticationLayout