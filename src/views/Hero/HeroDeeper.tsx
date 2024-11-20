import { Parallax } from 'react-scroll-parallax'
import Opac from '../../anim/Opac';

const HeroDeeper = () => {
    return (
        <section className="w-full h-[100vh] text-white relative">
            <div className="shadow-inTop absolute top-0 z-10 w-full h-full font-alien">
                <Opac>
                    <div className="absolute xl:left-[10rem] left-[4rem] top-[4rem] xl:top-[10rem] md:text-[8rem] sm:text-[5rem] text-[3rem] sm:leading-[4rem] leading-[2.5rem]">
                        <h2 className="text-[1.5rem]">LET'S</h2>
                        <h1 className="">EXPLORE</h1>
                    </div>
                </Opac>

                <Opac>
                    <h1 className="absolute xl:right-[10rem] right-[4rem] bottom-[4rem] xl:bottom-[10rem] md:text-[8rem] sm:text-[5rem] text-[3rem]">DEEPER</h1>
                </Opac>

            </div>

            <div className="shadow-inBottom absolute top-0 z-10 w-full h-full pointer-events-none">

            </div>
            <img src="/fallingbg.webp" alt="Falling bg" className="w-full h-full object-cover relative z-0" loading="lazy" />
            <img src="/octo.webp" alt="octo" className="absolute bottom-0 left-0 h-[50rem] opacity-5" />
            <Parallax translateY={[40, -40]} className='mx-auto absolute left-0 right-0 top-0 bottom-0 my-auto w-fit h-fit z-10'>
                <img src="/fallingman.webp" alt="Falling Man" className="w-[20rem] sm:w-auto" />
            </Parallax>
        </section>
    );
}

export default HeroDeeper;