

import React from 'react'
import { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'


const Layout = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className='flex min-h-screen '>

                {/* left sidebar */}
                <div className={`fixed top-0 left-0 h-screen w-[200px] bg-white shadow-lg flex flex-col transform transition-transform duration-300 z-40 ${isOpen ? "translate-x-0" : "-translate-x-full"} 
                md:translate-x-0 md:flex
                `}
                >

                    {/* Logo / Title and   X button on mobile */}
                    <div className="flex items-center px-4 py-4 border-b justify-between md:justify-center">

                        <span className="text-2xl font-bold text-pink-600">
                            Panel
                        </span>

                        <button
                            className="text-2xl md:hidden"
                            onClick={() => setIsOpen(false)}
                        >
                            ✕
                        </button>

                    </div>

                    {/* Menu Links */}
                    <div className="flex flex-col  gap-5 mt-6 px-4">
                        {/* className="h-8 w-auto mx-auto" */}

                        <img
                            src="/logo.png"
                            alt="logo"
                            className="h-6 sm:h-5 lg:h-7 object-contain m-auto w-auto"
                        />

                        <Link to="home"
                            className=" text-center py-2 px-4 rounded-md bg-gray-200 text-gray-800 font-medium hover:bg-blue-100 hover:text-blue-600 transition"
                        >
                            Home
                        </Link>

                        <Link to="/"
                            className=" text-center py-2 px-4 rounded-md bg-gray-200 text-gray-800 font-medium hover:bg-red-100 hover:text-red-600 transition"
                        >
                            Logout
                        </Link>
                    </div>
                </div>

                {isOpen && (
                    <div
                        className="fixed inset-0 bg-black/10 z-30 md:hidden"
                        onClick={() => setIsOpen(false)}
                    ></div>
                )}


                {/* right sidebar main content */}
                <div className='flex-1 md:ml-[200px] flex flex-col min-h-screen '>

                    <header className="min-h-[8vh] bg-gray-100 shadow-sm flex items-center justify-between px-4 md:px-6 flex-wrap gap-2">

                        {/* Left Section (Hamburger + Title) */}
                        <div className="flex items-center gap-3 flex-1">

                            <button
                                className="md:hidden text-2xl"
                                onClick={() => setIsOpen(!isOpen)}
                            >
                                ☰
                            </button>

                            <h1 className="text-xs sm:text-sm md:text-xl lg:text-2xl font-bold text-blue-700 truncate flex items-center gap-2">

                                <span>Empowering Businesses</span>

                                <img
                                    src="/logo.png"
                                    alt="logo"
                                    className="h-4 sm:h-5 md:h-6 lg:h-7 w-auto object-contain"
                                />

                            </h1>


                        </div>

                        {/* Right Section */}
                        <div className="text-[10px] sm:text-xs md:text-sm lg:text-base font-medium text-gray-600 whitespace-nowrap">
                            Welcome to
                            <span className="ml-1 text-pink-600 font-bold">Technogiq</span>
                        </div>

                    </header>


                    <div className='flex-1 overflow-auto '>
                        <Outlet />
                    </div>

                    <footer className="py-4 flex flex-col md:flex-row items-center justify-center md:justify-between text-xs md:text-sm text-gray-800 bg-gray-100 px-4 text-center md:text-left">

                        <div>
                            Technogiq IT Sol.🧪 | Arera Colony, Bhopal, MP
                        </div>

                        <div className="mt-1 md:mt-0">
                            © 2026 Technogiq. All Rights Reserved.
                        </div>

                    </footer>


                </div>
            </div>
        </>
    )
}

export default Layout
