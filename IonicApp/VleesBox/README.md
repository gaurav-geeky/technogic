{/* LANGUAGE DROPDOWN */} 


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
                            className="flex items-center gap-2 text-sm font-semibold text-[#86133a]"
                        >
                            <img src={language.flag} alt="" />
                            {language.name}
                        </button>
                        

                        {open && (
                            <>
                                {/* TRIANGLE POINTER */}
                                <div className="absolute right-5 top-full -mt-1 w-3 h-3 bg-[#86133a] rotate-45 z-50"></div>

                                {/* DROPDOWN */}
                                <div className="absolute right-0 top-full w-44 bg-[#86133a] text-white rounded shadow-lg overflow-hidden z-50">
                                
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