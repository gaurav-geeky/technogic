import React from 'react'
import { useState, useRef, useEffect } from 'react';
import { HiMagnifyingGlass } from "react-icons/hi2";
import { PiShoppingCart } from "react-icons/pi";


const Header = () => {

    const [open, setOpen] = useState(false);
    const [language, setLanguage] = useState({
        name: "English",
        flag: "https://flagcdn.com/w20/gb.png"
    });
    const dropdownRef = useRef(null);

    const languages = [
        { name: "Nederlands", flag: "https://flagcdn.com/w20/nl.png" },
        { name: "Français", flag: "https://flagcdn.com/w20/fr.png" },
        { name: "English", flag: "https://flagcdn.com/w20/gb.png" }
    ];

    const [catOpen, setCatOpen] = useState(false);
    const [category, setCategory] = useState("ALL");
    const catRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(e) {

            // close language dropdown
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(e.target)
            ) {
                setOpen(false);
            }

            // close category dropdown
            if (
                catRef.current &&
                !catRef.current.contains(e.target)
            ) {
                setCatOpen(false);
            }

        }

        document.addEventListener("mousedown", handleClickOutside);

        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    }, []);


    const categories = [
        "ALL",
        "Holidays",
        "Fresh meat",
        "BBQ",
        "Fondue and Gourmet",
        "Cheese",
        "Vegan / veggie",
        "Caterer",
        "Value package",
        "Advantage package",
        "Others",
        "Deli",
        "Vegetarian",
        "Pasta",
        "wok",
    ];


    return (
        <>
            <article className=' w-[85%] m-auto font-[Merriweather] '>
                <section className=''>

                    {/* LANGUAGE DROPDOWN  1st */}
                    <div
                        className="flex justify-end pr-10 pt-2 pb-8"
                    >
                        <div
                            className="relative inline-block"
                            ref={dropdownRef}
                            onMouseEnter={() => setOpen(true)}
                            onMouseLeave={() => setOpen(false)}
                        >
                            <button
                                className="flex items-center gap-2 text-sm font-semibold hover:text-[#86133a]"
                            >
                                <img src={language.flag} alt="" />
                                {language.name}
                            </button>

                            {open && (
                                <>
                                    {/* TRIANGLE POINTER */}
                                    <div className="absolute right-5 top-full -mt-1 w-3 h-3 bg-[#86133a] rotate-45 z-50"></div>

                                    {/* DROPDOWN */}
                                    <div className="absolute right-0 top-full w-44 bg-[#86133a] text-white rounded shadow-lg overflow-hidden z-60">
                                        {languages.map((lang) => (
                                            <div
                                                key={lang.name}
                                                onClick={() => {
                                                    setLanguage(lang);
                                                    setOpen(false);
                                                }}
                                                className="flex items-center gap-3 px-4 py-3 hover:bg-[#d89aaa] cursor-pointer transition"
                                            >
                                                <img src={lang.flag} alt="" />
                                                {lang.name}
                                            </div>
                                        ))}
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                    {/* LANGUAGE DROPDOWN END  category dropdown start 2nd */}

                    <div className=' flex justify-around items-start'>
                        {/*  1st */}
                        <div>
                            <img className='border h-[77px]' src="https://www.vlees-in-the-box.be/image/cache/catalog/logo/logo%20VIB-1031x160.png.webp" alt="logo" />
                        </div>

                        {/* 2nd  */}
                        <div className=' flex items-center justify-center'>

                            <div className="relative inline-block "
                                ref={catRef}
                                onMouseEnter={() => setCatOpen(true)}
                                onMouseLeave={() => setCatOpen(false)}
                            >
                                {/* BUTTON */}
                                <button
                                    className="w-[70px] h-[35px] bg-[#86133a] text-white flex items-center justify-center"
                                >
                                    {category}
                                </button>

                                {catOpen && (
                                    <>
                                        {/* triangle */}
                                        <div className="absolute left-4 top-full w-3 h-3 bg-[#86133a] rotate-45 z-50"></div>

                                        {/* language dropdown */}
                                        <div className="absolute  top-full left-0 w-48 bg-[#86133a] text-white shadow-lg z-60 ">

                                            {/* ✅ scrollable list */}
                                            <ul className="max-h-[350px] overflow-y-auto text-[12px]  ">
                                                {categories.map((item) => (
                                                    <li
                                                        key={item}
                                                        onClick={() => {
                                                            setCategory(item);
                                                        }}
                                                        className="px-4 py-3 hover:bg-[#d89aaa] cursor-pointer"
                                                    >
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>

                                        </div>
                                    </>
                                )}
                            </div>
                            {/* category dropdown end */}
                            <input
                                type="text"
                                placeholder="seek..."
                                className="h-[35px] px-3 border-2 bg-gray-100 border-[#86133a] outline-none focus:outline-none focus:ring-0"
                            />
                            <button className='w-[45px] h-[35px] bg-[#86133a] text-white flex items-center justify-center '>
                                <HiMagnifyingGlass size={22} />
                            </button>
                        </div>


                        {/* 3rd */}
                        <div className='flex items-center gap-6  border px-1'>
                            <div className='text-[35px] '> <PiShoppingCart /> </div>
                            <span className='text-[#86133a] text-[18px] font-semibold hover:text-[#e74a7e]' >SIGN IN</span>
                            <span className='text-rose-500 text-[18px] font-semibold hover:text-[#f9b4ca]  '>REGISTER</span>
                        </div>
                    </div>



                </section>

            </article>

            {/* Navigation options 3rd */}
            <nav className="sticky top-0 z-50 py-2 bg-white font-[Merriweather]" >
                <div className='flex items-center justify-between text-[22px] border w-5xl m-auto mt-1 mb-1 text-gray-800 '>
                    <a href="">Home </a>
                    <a href="" className='text-rose-500'>Shop</a>
                    <a href="">How to order?</a>
                    <a href="">Our quality meat</a>
                    <a href="">Mission & Vision</a>
                    <a href="">News</a>
                    <a href="">Help</a>
                    <a href="">Contact</a>
                </div>
            </nav>

        </>
    )
}

export default Header;   
