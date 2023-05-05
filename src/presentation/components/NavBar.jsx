import React, { useContext, useState } from "react";
import { FiX, FiFolder, FiHome, FiArchive, FiMenu, FiPlusCircle, FiUser, FiMoon, FiSun } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';
import UserContext from "../../contexts/UserContext";
import { putAccessToken } from "../../utils/network-data";
import ThemeContext from "../../contexts/ThemeContext";

function NavBar({children}) {
    const {user, setUser} = useContext(UserContext)
    const {theme, toggleTheme} = useContext(ThemeContext)
    const [isOpen, setIsOpen] = useState(false);
    // const [isDarkMode, setIsDarkMode] = useState(colorTheme === 'dark' ? true : false)

    function openSidebar() {
        setIsOpen(!isOpen);
    }

    // const setDarkMode = (event) => {
    //     event.preventDefault()
    //     setTheme(colorTheme)
    //     setIsDarkMode(colorTheme === 'dark' ? true : false)
    // }

    return (
        <>
            <div className="flex">
                <div className={`sidebar fixed top-0 bottom-0 lg:left-0 p-2 w-[300px] overflow-y-auto text-center bg-white dark:bg-gray-800  ${ isOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0 transition-transform z-10 shadow-md lg:shadow-none`} >
                    <div className="text-gray-700 text-xl">
                        <div className="p-2.5 mt-1 flex justify-between items-center">
                            <div className="flex flex-1 items-center">
                                <FiFolder className="text-gray-700 dark:text-white"/>
                                <h1 className="font-bold text-gray-700 dark:text-white text-[16px] ml-3">Personal Note</h1>
                            </div>
                            <FiX 
                                className="cursor-pointer lg:hidden dark:text-white" 
                                onClick={openSidebar}
                            />
                        </div>
                        <hr className="my-2 text-gray-700" />
                    </div>

                    <NavLink 
                        to="/"
                        className={({ isActive }) => 
                        `p-2.5 mt-6 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-gray-400 dark:hover:bg-primary text-gray-700 dark:text-white  hover:text-white ${isActive ? "text-white bg-primary" : ""}`
                        }
                    >
                        <FiHome/>
                        <span className="text-[16px] ml-4">Home</span>
                    </NavLink>
                    <NavLink
                        to="archived"
                        className={({ isActive }) => 
                        `p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-gray-400 dark:hover:bg-primary text-gray-700 dark:text-white  hover:text-white ${isActive ? "text-white bg-primary" : ""}`
                        }
                    >
                        <FiArchive/>
                        <span className="text-[16px] ml-4">Archived</span>
                    </NavLink>
                    <NavLink
                        to="add"
                        className={({ isActive }) => 
                        `p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-gray-400 dark:hover:bg-primary text-gray-700 dark:text-white  hover:text-white ${isActive ? "text-white bg-primary" : ""}`
                        }
                    >
                        <FiPlusCircle/>
                        <span className="text-[16px] ml-4">Add Note</span>
                    </NavLink>

                    <hr className="my-2 mt-8 text-gray-700" />
                </div>

                <div className="flex-1 lg:ml-[300px]">
                    <div className="p-4 bg-white dark:bg-gray-800">
                        <div className="text-gray-700 dark:text-white text-xl">
                            <div className="mt-1 flex justify-between items-center">
                                <div className="flex flex-1 items-center">
                                    <FiMenu
                                        className="text-gray-700 dark:text-white lg:hidden"
                                        onClick={openSidebar}
                                    />
                                    <h1 className="font-bold text-gray-700 dark:text-white text-[16px] ml-3 lg:ml-8 lg:invisible">Personal Note</h1>
                                </div>
                                <div className="text-[16px] flex items-center text-gray-700 dark:text-white me-6">
                                    <FiUser className="me-1 md:me-3"/>
                                    {user.name}
                                    <div 
                                        className="ms-4 md:ms-10"
                                        onClick={() => {
                                            setUser(null)
                                            putAccessToken("")
                                        }}
                                    >
                                        Logout
                                    </div>
                                    <div className="ms-4 md:ms-10">
                                        {
                                            theme === 'dark' ?
                                            <FiMoon
                                                className="text-white"
                                                onClick={toggleTheme}
                                            /> : 
                                            <FiSun
                                                className="text-yellow-500"
                                                onClick={toggleTheme}
                                            />
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="px-4 pt-4 lg:px-12 lg:pt-10 min-h-screen dark:bg-gray-700">
                        { children }
                    </div>
                </div>
            </div>
        </>
    );
}

NavBar.propTypes = {
    children: PropTypes.node
}

export default NavBar