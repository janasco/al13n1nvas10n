import spinning from '../../../videos/spinning.mp4'
import { SiTwitter } from 'react-icons/si'
import { FaTelegramPlane, FaFacebookF } from 'react-icons/fa'
import Nav from '../../components/Nav';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useRef } from 'react';


const HeroIndex = () => {

    const [pos, setPos] = useState("absolute")
    const slickRef = useRef<Slider>(null)

    const [scrollPosition, setScrollPosition] = useState(0);
    const [scrolled, setScrolled] = useState(false)

    const handleScroll = () => {
        const position = window.scrollY;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {

        if (scrollPosition >= 200) {
            setScrolled(true)
        } else {
            setScrolled(false)
        }

    }, [scrollPosition])


    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };


    useEffect(() => {
        setTimeout(() => {
            setPos("relative")
        }, 1500);
    }, [])


    return (
        <section className={`text-white w-full min-h-screen h-auto px-10 overflow-hidden origin-center mx-auto z-20 relative ${pos} top-0 left-0`} key="HeroIndex">

            <img src="/logo.webp" alt="Logo" className="fixed z-40 w-16 sm:top-10 sm:right-14 right-10 top-6" />


            <motion.div initial={{ maxWidth: "50%" }} animate={{ maxWidth: "0%" }} transition={{ transformOrigin: "left", duration: 1.5, delay: 1, ease: [0.16, 0.77, 0.47, .97] }} className="z-[50] bg-black pointer-events-none absolute w-[50vw] h-screen left-0 top-0 origin-left"></motion.div>

            <motion.div initial={{ maxWidth: "50%" }} animate={{ maxWidth: "0%" }} transition={{ transformOrigin: "right", duration: 1.5, delay: 1, ease: [0.16, 0.77, 0.47, .97] }} className="z-[50] bg-black pointer-events-none absolute  w-[50vw] h-screen right-0 top-0 origin-right"></motion.div>


            <video
                autoPlay
                muted
                loop
                src={spinning}
                preload={'auto'}
                playsInline
                className="w-full h-screen object-cover z-0 absolute top-0 left-0"
            />

            <div className="w-full h-full bg-black/70 z-10 absolute top-0 left-0"></div>
            <Nav />

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }} className="w-fit h-fit -rotate-90 absolute right-0 -mr-24 bottom-0 z-10 top-0 my-auto items-center gap-x-4 sm:flex hidden">
                <h1 className="font-orbit tracking-widest text-sm">INVASION HAS BEGUN</h1>
                <div className="w-20 h-[1px] bg-white z-10 bottom-5 right-5"></div>
            </motion.div>


            <div className="relative max-w-[1500px] mx-auto h-screen z-20 overflow-hidden flex flex-col">
                <h3 className={`font-orbit text-sm tracking-[1.5rem] absolute bottom-10 z-10 left-5 md:block hidden  transition-all ease-in-out duration-[0.7s] ${scrolled ? '-translate-x-full opacity-0' : 'translate-x-0 opacity-1'}`}>ALIEN</h3>

                <div className={`flex text-xl gap-x-6 absolute bottom-10 right-5 items-center transition-all ease-in-out duration-[0.7s] ${scrolled ? 'translate-x-full opacity-0' : 'translate-x-0 opacity-1'}`}>
                    <h2 className="font-orbit text-sm">FOLLOW</h2>
                    <FaFacebookF className="cursor-pointer hover:scale-[1.1]" />
                    <SiTwitter className="cursor-pointer" />
                    <FaTelegramPlane className="cursor-pointer" />
                </div>

                <div className="font-orbit md:text-7xl sm:text-5xl text-3xl sm:mt-20 mt-24 flex-shrink-0 md:pl-14">
                    <h1 className="tracking-widest">ALIEN INVASION</h1>
                    <p className="font-orbit sm:text-sm text-white/60 tracking-wider mt-2 text-[12px] leading-4 sm:leading-0">Across the vast expanse of space, an armada of extraterrestrial ships descended upon Earth, their ominous presence casting a dark shroud over the planet, while humanity stood united, determined to defend their home against the impending alien invasion.</p>
                </div>

                <div className="flex items-end gap-x-4 px-10 sm:mt-16 mt-10 lg:flex-row flex-col-reverse gap-y-3 flex-shrink-0 self-end">
                    <div className="flex items-center gap-x-2 mb-6">
                        <h1 className="w-5 h-5 flex items-center justify-center font-orbit">01</h1>
                        <div className="w-20 h-[1px] bg-white/70"></div>
                        <div className="flex font-orbit gap-x-3">
                            <button className="">

                                <h2 className="cursor-pointer" onClick={() => slickRef?.current?.slickPrev()}>&lt;</h2>
                            </button>
                            <button className="">

                                <h2 className="cursor-pointer" onClick={() => slickRef?.current?.slickNext()}>&gt;</h2>
                            </button>
                        </div>
                    </div>
                    <div className="flex xl:max-w-[65rem] sm:max-w-[35rem] max-w-[17rem] w-full">
                        <Slider {...settings} className="xl:max-w-[65rem] sm:max-w-[35rem] max-w-[20rem] w-full outline-none select-none" ref={slickRef}>
                            <div className="sm:w-[30rem] w-[16rem] sm:h-[25rem] h-[15rem] sm:block hidden mx-5 p-5  outline-none">
                                <img src="/sighting4.webp" alt="Sighting 4" className="w-full h-full object-cover " />
                            </div>
                            <div className="sm:w-[30rem] w-[16rem] sm:h-[25rem] h-[15rem] mx-5 p-5  outline-none">
                                <img src="/sighting3.webp" alt="Sighting 1" className="w-full h-full object-cover " />
                            </div>
                            <div className="sm:w-[30rem] w-[16rem] sm:h-[25rem] h-[15rem] mx-5 p-5  outline-none">
                                <img src="/sighting5.webp" alt="Sighting 1" className="w-full h-full object-cover " />
                            </div>
                            <div className="sm:w-[30rem] w-[16rem] sm:h-[25rem] h-[15rem] mx-5 p-5  outline-none">
                                <img src="/sighting6.webp" alt="Sighting 1" className="w-full h-full object-cover " />
                            </div>
                        </Slider>

                    </div>
                </div>

            </div>


        </section >
    );
}

export default HeroIndex;