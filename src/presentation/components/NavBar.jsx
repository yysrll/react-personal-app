import React, { useState } from "react";
import { FiX, FiFolder, FiHome, FiArchive, FiMenu } from "react-icons/fi";
import { NavLink } from "react-router-dom";

function NavBar({children}) {
    const [isOpen, setIsOpen] = useState(false);

    function openSidebar() {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <div className="flex">
                <div className={`sidebar fixed top-0 bottom-0 lg:left-0 p-2 w-[300px] overflow-y-auto text-center bg-white  ${ isOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0 transition-transform z-10 shadow-md lg:shadow-none`} >
                    <div className="text-gray-700 text-xl">
                        <div className="p-2.5 mt-1 flex justify-between items-center">
                            <div className="flex flex-1 items-center">
                                <FiFolder className="text-gray-700"/>
                                <h1 className="font-bold text-gray-700 text-[16px] ml-3">Personal Note</h1>
                            </div>
                            <FiX 
                                className="cursor-pointer lg:hidden" 
                                onClick={openSidebar}
                            />
                        </div>
                        <hr className="my-2 text-gray-700" />
                    </div>

                    <NavLink 
                        to="/"
                        className={({ isActive }) => 
                        `p-2.5 mt-6 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-gray-400 text-gray-700  hover:text-white ${isActive ? "text-white bg-gray-700" : ""}`
                        }
                    >
                        <FiHome/>
                        <span className="text-[16px] ml-4">Home</span>
                    </NavLink>
                    <NavLink
                        to="archived"
                        className={({ isActive }) => 
                        `p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-gray-400 text-gray-700  hover:text-white ${isActive ? "text-white bg-gray-700" : ""}`
                        }
                    >
                        <FiArchive/>
                        <span className="text-[16px] ml-4">Archived</span>
                    </NavLink>

                    <hr className="my-2 mt-8 text-gray-700" />
                </div>

                <div className="flex-1 lg:ml-[300px]">
                    <div className="p-4 bg-white">
                        <div className="text-gray-700 text-xl">
                            <div className="mt-1 flex justify-between items-center">
                                <div className="flex flex-1 items-center">
                                    <FiMenu 
                                        className="text-gray-700 lg:hidden"
                                        onClick={openSidebar}
                                    />
                                    <h1 className="font-bold text-gray-700 text-[16px] ml-3 lg:ml-8 lg:invisible">Personal Note</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="px-4 pt-4 lg:px-12 lg:pt-10">
                        { children }
                    </div>
                </div>
            </div>
        </>
    );
}

export default NavBar