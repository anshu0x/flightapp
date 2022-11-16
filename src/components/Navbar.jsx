import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <nav className="w-full z-10 relative ">
                <div className="w-full">
                    <div className="flex items-center h-16 w-full">
                        <div className="flex items-center mx-4 justify-between w-full">
                            <div className="flex justify-center items-center flex-shrink-0 ">
                                <Link className="text-2xl font-semibold" to={"/"}>
                                    Insta<span className="text-[#002970]">Fly ✈︎ </span>
                                </Link>
                            </div>
                            <div className="hidden md:block">
                                <div className="ml-10 flex items-baseline space-x-4">
                                    <Link
                                        to="/"
                                        offset={50}
                                        duration={500}
                                        className={`cursor-pointer hover:bg-[#002970] hover:text-white rounded-md  text-sm font-medium text-black px-3 py-2 text-md hover:font-black`}
                                    >
                                        Home
                                    </Link>
                                    <Link
                                        to="/dashboard"
                                        offset={50}
                                        duration={500}
                                        className="cursor-pointer hover:bg-[#002970] text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                    >
                                        Dashboard
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="flex md:hidden ">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                type="button"
                                className="bg-[#002970] inline-flex items-center justify-center p-2 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white-800 focus:ring-white"
                                aria-controls="mobile-menu"
                                aria-expanded="false"
                            >
                                <span className="sr-only">Open main menu</span>
                                {!isOpen ? (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                {/*  Mobile menu start here */}
                <Transition
                    show={isOpen}
                    enter="transition ease-out duration-100 transform"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-75 transform"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    {() => (
                        <div
                            className="md:hidden fixed w-full max-h-full z-50"
                            id="mobile-menu"
                        >
                            <div className="bg-white px-2 pt-2 pb-3 space-y-1 sm:px-3">
                                <Link
                                    to="/"
                                    offset={50}
                                    duration={500}
                                    className="cursor-pointer hover:bg-[#002970] text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    Home
                                </Link>
                                <Link
                                    to="/dashboard"
                                    offset={50}
                                    duration={500}
                                    className="cursor-pointer hover:bg-[#002970] text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    Dashboard
                                </Link>
                            </div>
                        </div>
                    )}
                </Transition>
            </nav >
        </ >
    );
}

export default Navbar;