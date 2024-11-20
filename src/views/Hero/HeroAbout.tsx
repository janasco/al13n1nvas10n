import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Appear from "../../anim/Appear"


const HeroAbout = () => {

    const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.5 })
    const [imgRef, imgView] = useInView({ triggerOnce: false, threshold: 0.5 })


    return (
        <section className="w-full min-h-screen h-auto bg-black text-white overflow-x-hidden font-orbit relative z-10 px-10 py-10 pb-20" ref={ref} id="about">
            <motion.h1 initial={{ x: -250, opacity: 0 }} animate={inView ? { x: 0, opacity: 1 } : {}} transition={{ duration: 1.5 }} className="font-alien text-white/5 text-[14rem] absolute left-0 top-10 select-none z-10">ALIENINVASION</motion.h1>

            <div className=" items-center gap-x-3 absolute w-full max-w-[1595px] mx-auto left-0 right-0 top-[13rem] lg:flex hidden px-10">
                <h1 className="w-5 h-5 flex items-center justify-center font-orbit">02</h1>
                <div className="w-20 h-[1px] bg-white/70"></div>
            </div>

            <div className="max-w-[1500px] mx-auto mt-[12.5rem] flex lg:flex-row flex-col items-center gap-y-10">
                <div className="w-full relative text-center lg:text-left">
                    <motion.div animate={{ opacity: [0, 1] }} transition={{ repeat: Infinity, duration: 4, repeatType: "reverse", ease: "linear" }} className="">
                        <img src="/foredit.png" alt="Alien" loading="lazy" className="absolute -bottom-10 z-0 opacity-20 w-[30rem] mx-auto left-0 right-0" />
                    </motion.div>

                    <Appear>
                        <h2 className="sm:tracking-[1.5rem] tracking-widest text-lg font-semibold">ABOUT US</h2>
                    </Appear>


                    <div className="flex flex-col gap-y-3 leading-7 text-white/60 mt-8 max-w-[30rem] relative z-10 mx-auto lg:mx-0">
                        <Appear>

                            <p className="">
                                In a world teetering on the precipice of chaos and uncertainty, the skies darken as an ominous fleet of extraterrestrial vessels materializes on the horizon. The era of peace and tranquility comes to a screeching halt as humanity braces itself for an unprecedented cataclysm—an alien invasion.

                            </p>
                        </Appear>

                        <Appear>
                            <p className="">

                                The alien invaders, shrouded in mystery, possess technology far beyond anything Earth has ever witnessed. Their ships, colossal and awe-inspiring, loom over cities like towering behemoths, casting sinister shadows over once bustling streets. Advanced weaponry hums with an unsettling energy, ready to unleash devastation upon an unsuspecting population.
                            </p>
                        </Appear>

                    </div>
                </div>


                <motion.div initial={{ opacity: 0 }} animate={imgView ? { opacity: 1 } : {}} transition={{ ease: [0.16, 0.77, 0.47, .97], duration: 2, delay: 0.5 }} className="lg:max-w-[30rem] h-[70vh] relative group w-full max-w-[20rem]" ref={imgRef}>

                    <div className="w-full max-h-[0rem] h-full absolute bottom-0 bg-gradient-to-t from-black to-[rgba(0,0,0,0)] transition-all ease-in-out duration-300 group-hover:max-h-[10rem]"></div>

                    <a href="https://www.newscientist.com/article/dn6341-mysterious-signals-from-light-years-away/" className="" target="_blank" rel="noopener noreferrer">
                        <img src="/cow.webp" alt="cow" className="w-full h-full object-cover" />
                    </a>



                    <div className="w-full h-full absolute top-0 left-0 p-4 flex items-end pointer-events-none">
                        <div className="absolute">
                            <h2 className="font-bold text-myCyan">Sept 1, 2004</h2>
                            <p className="sm:text-base text-sm">Mysterious signals from light years away</p>

                            <button className="absolute bottom-0 -translate-x-[115%] pointer-events-auto lg:block hidden">
                                <a href="https://www.newscientist.com/article/dn6341-mysterious-signals-from-light-years-away/" className="flex items-center gap-x-2 " target="_blank" rel="noopener noreferrer">
                                    <p className="">READ ARTICLE</p>
                                    <div className="w-[7rem] h-[1px] bg-white/70"></div>
                                </a>
                            </button>
                        </div>
                    </div>

                </motion.div>


            </div>
        </section >
    )
}

export default HeroAbout