
import { motion, useAnimation } from 'framer-motion';
import { useInView } from "react-intersection-observer"
import { useEffect } from 'react';
import Appear from '../../anim/Appear';

const Tokenomics = () => {
    const animation = useAnimation()
    const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.6 })

    useEffect(() => {
        sequence()
    }, [])

    async function sequence() {
        await animation.start({ opacity: 1, y: 20, transition: { duration: 1 } })
        animation.start({
            y: [20, -20],
            transition: {
                repeat: Infinity,
                ease: 'easeInOut',
                repeatType: 'reverse',
                duration: 1.5
            }
        })

    }

    const tokenList = [
        {
            label: 'Lorem Ipsum 1',
            value: '30'
        },
        {
            label: 'Lorem Ipsum 2',
            value: '40'
        },
        {
            label: 'Lorem Ipsum 3',
            value: '20'
        },
        {
            label: 'Lorem Ipsum 4',
            value: '5'
        },
        {
            label: 'Lorem Ipsum 5',
            value: '5'
        },
    ]

    return (
        <section className="w-full h-screen text-white bg-black font-orbit overflow-hidden relative z-10 px-10 py-10 flex items-center" ref={ref} id="tokenomics">

            <div className=" items-center gap-x-3 absolute w-full max-w-[1595px] mx-auto left-0 right-0 top-[13rem] lg:flex hidden px-10">
                <h1 className="w-5 h-5 flex items-center justify-center font-orbit">04</h1>
                <div className="w-20 h-[1px] bg-white/70"></div>
            </div>

            <motion.h1 initial={{ x: -250, opacity: 0 }} animate={inView ? { x: 0, opacity: 1 } : {}} transition={{ duration: 1.5 }} className="font-alien text-white/5 text-[14rem] absolute left-0 right-0 mx-auto top-10 select-none z-10">TOKENOMICS</motion.h1>

            <motion.img animate={animation} src="/astro.webp" alt="Astronaut" className="sm:block hidden absolute lg:right-10 lg:top-0 right-10 bottom-0 my-auto lg:w-auto w-[20rem]" />

            <div className="font-orbit relative z-10 w-full mx-auto max-w-[1500px]">
                <Appear>

                    <h1 className="TOKENOMICS sm:text-xl sm:tracking-[1.5rem] tracking-widest">TOKENOMICS</h1>
                </Appear>

                <Appear>
                    <p className="xl:max-w-[50rem] max-w-[30rem] text-white/70 mt-2 text-sm sm:text-base">In the tokenomics of alien invasion, interstellar currency fluctuations are driven by the scarcity of Earth's resources, causing a speculative frenzy among extraterrestrial investors.</p>
                </Appear>
{/* 
                <Appear>
                    <h2 className="mt-10"><span className="text-4xl">1</span> Trillion Supply <span className='text-4xl'>0</span>% Tax</h2>

                </Appear> */}

                <div className="flex flex-col gap-y-5 mt-16">
                    {tokenList.map((items, i) => {
                        return (
                            <div className="max-w-[50rem] flex gap-x-3 md:flex-row flex-col gap-y-3" key={i}>
                                <div className="flex items-center">
                                    <h2 className="w-20 shrink-0">{items.value}%</h2>
                                    <h2 className="">{items.label}</h2>
                                </div>
                                <div className="h-5 bg-white md:ml-10 transition-all ease-in-out duration-[1s]" style={inView ? { width: `${items.value}%` } : { width: "0%" }}></div>
                            </div>
                        )
                    })}
                </div>
            </div>

        </section>
    )
}

export default Tokenomics