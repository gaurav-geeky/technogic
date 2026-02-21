import React from 'react'
import { FaTruck } from "react-icons/fa";
import { MdEuroSymbol } from "react-icons/md";




const Homecode = () => {


    const Banner = ({ title, img, height = "h-[420px]", text = "text-4xl" }) => (
        <div className="relative group cursor-pointer overflow-hidden">

            {/* IMAGE */}
            <img
                src={img}
                alt={title}
                className={`w-full ${height} object-cover transition duration-500 group-hover:scale-105`}
            />

            {/* DARK OVERLAY */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300"></div>

            {/* TEXT */}
            <div className="absolute inset-0 flex items-center justify-center">
                <h2 className={`text-white ${text} font-semibold tracking-wide opacity-0 group-hover:opacity-100 transition duration-300 font-[Times New Roman] uppercase text-center `}>
                    {title}
                </h2>
            </div>

        </div>
    );

    return (
        <>
            <section className=''>

                <div className='font-[Merriweather]'>
                    <img
                        src="https://www.vlees-in-the-box.be/image/cache/catalog/banner/Homepage-2400x1092h.png.webp"
                        alt="meat"
                        className='w-full h-[545px] object-cover'
                    />

                    <div className="text-[22px] absolute bottom-0 w-full bg-[#86133a]/70 text-white text-center py-8">
                        <p>Discover our wide range of high quality meat and meat products.</p>
                        <p> Fresh and refrigerated home delivered from wednesday to Friday.</p>
                    </div>
                </div>

                <article className='flex justify-around border w-[85%] m-auto font-[Georgia,serif]'>
                    <div className='flex flex-col justify-start items-center p-4 gap-2 ' >
                        <div className='text-[72px] text-gray-800 border h-[72px] w-[72px] flex items-center '> <FaTruck /> </div>
                        <p className='text-gray-800 border w-80 text-center text-xl mt-2'>
                            Ordered today and delivered <br />
                            the day after tomorrow! <br />
                            Delivery from wednesday to Friday
                        </p>
                    </div>

                    <div className='flex flex-col justify-start items-center p-4 gap-2 ' >
                        <div className='text-[72px] text-gray-800 border h-[72px] w-[72px] flex items-center '> <MdEuroSymbol /> </div>
                        <p className='text-gray-800 border w-80 text-center text-xl mt-2'>
                            Free shipping <br />
                            from 100 euro
                        </p>
                    </div>

                    <div className='flex flex-col justify-start items-center p-4 gap-2 ' >
                        <div className='text-gray-800 border h-[72px] w-[72px] flex items-center '> ★★★★★ </div>
                        <p className='text-gray-800 border w-80 text-center text-xl mt-2'>
                            100% fresh meat <br />
                            restaurant quality <br />
                            at your home
                        </p>
                    </div>
                </article>

                {/*  grid box of 8 food  */}
                <article className="font-[Dancing_Script] max-w-[85%]  mx-auto grid grid-cols-4 gap-x-0.5 gap-y-3 py-5 border bg-amber-100">

                    <div className="bg-white shadow-sm">

                        {/* title strip */}
                        <p className="bg-[#EF3A57] text-white text-2xl text-center py-4">
                            Weekly promo
                        </p>

                        {/* image */}
                        <img
                            src="https://www.vlees-in-the-box.be/image/cache/catalog/banner/Weekpromos-1200x800h.png.webp"
                            alt=""
                            className="w-full h-[200px] object-cover"
                        />
                    </div>

                    <div>
                        <p className=' bg-[#86133A] text-white text-2xl text-center py-4' >
                            Fondue and Gourmet
                        </p>
                        <img
                            src="https://www.vlees-in-the-box.be/image/cache/catalog/banner/Feestgerechten-1200x800h.png.webp"
                            alt=""
                            className="w-full h-[200px] object-cover" />
                    </div>

                    <div>
                        <p className=' bg-[#86133A] text-white text-2xl text-center py-4' >
                            Vers vlees
                        </p>
                        <img
                            src="https://www.vlees-in-the-box.be/image/cache/catalog/banner/ver_vlees-1200x800h.png.webp"
                            className="w-full h-[200px] object-cover" />
                    </div>

                    <div>
                        <p className=' bg-[#86133A] text-white text-2xl text-center py-4 ' >
                            Cooling elements/bags
                        </p>
                        <img
                            src="https://www.vlees-in-the-box.be/image/cache/catalog/retour%20koelelementen%20NL%203-1200x800w.jpg.webp"
                            className="w-full h-[200px] object-cover" />
                    </div>

                    <div>
                        <p className=' bg-[#EF3A57]  text-white text-2xl text-center py-4' >
                            Nieuw
                        </p>
                        <img
                            src="https://www.vlees-in-the-box.be/image/cache/catalog/banner/Nieuw-1200x800h.png.webp"
                            className="w-full h-[200px] object-cover" />
                    </div>

                    <div>
                        <p className='bg-[#86133A] text-white text-2xl text-center py-4 ' >
                            Traiteurbereidingen
                        </p>
                        <img
                            src="https://www.vlees-in-the-box.be/image/cache/catalog/banner/Traiteurbereidingen-1200x800h.png.webp" className="w-full h-[200px] object-cover" />
                    </div>

                    <div>
                        <p className=' bg-[#86133A] text-white text-2xl text-center py-4 ' >
                            Advantage package
                        </p>
                        <img
                            src="https://www.vlees-in-the-box.be/image/cache/catalog/banner/Budgetpakketten-1200x800h.png.webp" className="w-full h-[200px] object-cover" />
                    </div>

                    <div>
                        <p className='bg-[#86133A] text-white text-2xl text-center py-4' >
                            Klanten aan het woord
                        </p>
                        <img
                            src="https://www.vlees-in-the-box.be/image/cache/catalog/banner/Klanten-1200x800h.png.webp"
                            className="w-full h-[200px] object-cover" />
                    </div>

                </article>

                {/*  flex box of 2 food  */}
                <article className='border border-red-400 py-5'>

                    <p className="font-[Dancing_Script] bg-[#86133A] text-4xl text-white text-center py-2" >
                        Products in the spotlight
                    </p>

                    <div className="grid grid-cols-2">
                        <Banner
                            title="stoofpotje hert"
                            img="https://www.vlees-in-the-box.be/image/cache/catalog/zwitserse%20schijf-1200x800w.jpg.webp"
                        />

                        <Banner
                            title="lamskroontje"
                            img="https://www.vlees-in-the-box.be/image/cache/catalog/gemarineerde%20lamskroon-1200x800.jpg.webp"
                        />
                    </div>
                </article>

                <div className="max-w-6xl mx-auto mt-12">
                    <div className="grid grid-cols-4 gap-6">
                        <Banner
                            img="https://www.vlees-in-the-box.be/image/cache/catalog/videevulling%20%20-1200x800w.jpg.webp"
                            height="h-[180px]"
                            text='2xl'
                            title='videevulling' />

                        <Banner
                            img="https://www.vlees-in-the-box.be/image/cache/catalog/aardappelgratin-1200x800.jpg.webp"
                            height="h-[180px]"
                            title="aardappelgratin"
                            text='2xl' />

                        <Banner
                            img="https://www.vlees-in-the-box.be/image/cache/catalog/balletjes%20tomatensaus-1200x800h.jpg.webp" height="h-[180px]"
                            title={<> balletjes in <br /> tomatensaus </>}
                            text='2xl' />

                        <Banner
                            img="https://www.vlees-in-the-box.be/image/cache/catalog/tomatenroomsoep%20met%20balletjes-1200x800h.jpg.webp"
                            height="h-[180px]"
                            title={<>tomatensoep <br /> met <br /> balletjes</>}
                            text='2xl' />
                    </div>
                </div>

                <div className='w-full h-[30vh] mt-7 bg-amber-100'>

                </div>



            </section>
        </>
    )
}

export default Homecode;

