import { LazyLoadComponent } from 'react-lazy-load-image-component';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Appear from '../../anim/Appear';

const HeroInterview = () => {

    const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.5 })

    return (
        <section className="w-full min-h-screen h-auto py-10 bg-black text-white font-orbit px-10 relative z-10 flex items-center overflow-x-hidden" ref={ref}>

            <motion.h1 initial={{ x: -250, opacity: 0 }} animate={inView ? { x: 0, opacity: 1 } : {}} transition={{ duration: 1.5 }} className="font-alien text-white/5 text-[14rem] absolute left-0 top-10 select-none z-10">ALIENINVASION</motion.h1>

            <div className="flex items-center mx-auto max-w-[1500px] w-full lg:flex-row flex-col-reverse gap-y-10 relative">



                <div className="w-full flex items-center justify-center">
                    <LazyLoadComponent>
                        <div className="w-[30rem] h-[50rem] relative z-10">
                            <iframe
                                width="473"
                                height="841"
                                src="https://www.youtube.com/embed/KhafMlH7-Dc?autoplay=1"
                                title="“The Most Extraordinary Footage of all” - UNKNOWN UFO IN CALIFORNIA | Ancient Aliens | #Shorts"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                                className="w-full h-full"
                            ></iframe>
                        </div>
                    </LazyLoadComponent>

                </div>

                <div className="font-orbit w-full text-center lg:text-left mt-20 lg:mt-0 relative">

                    <div className=" items-center gap-x-3 absolute right-0 w-fit left-0 lg:flex hidden -top-[15rem]">
                        <h1 className="w-5 h-5 flex items-center justify-center font-orbit">03</h1>
                        <div className="w-20 h-[1px] bg-white/70 flex-shrink-0"></div>
                    </div>

                    <Appear>

                        <h2 className="md:text-[2rem] text-[1.2rem]">The Most Extraordinary Footage of all</h2>
                    </Appear>

                    <Appear>
                        <p className="font-orbit text-white/70 text-sm sm:text-base mt-2 sm:mt-0">The age of believing is over! We are in the age of knowing!</p>
                    </Appear>
                </div>

                <img src="/interviewalien.webp" alt="Side Alien" className="absolute z-0 bottom-0 right-0 opacity-20 h-[75vh] lg:block hidden" />
            </div>


        </section>
    )
}

export default HeroInterview