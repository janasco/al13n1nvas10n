import { AnimatePresence } from "framer-motion";
import VideoPlayer from "../views/VideoPlayer";
import { useState } from 'react'

import HeroIndex from "../views/Hero/HeroIndex";
import HeroAbout from "../views/Hero/HeroAbout";
import HeroInterview from "../views/Hero/HeroInterview";
import HeroDeeper from "../views/Hero/HeroDeeper";
import Tokenomics from "../views/Hero/Tokenomics";
import Footer from "../components/Footer";

const Hero = () => {

    const [ended, setEnded] = useState(false)

    const handleEnded = () => {
        setEnded(true)
    }

    return (
        <section className="">
            <AnimatePresence>
                {ended ?
                    <>
                        <HeroIndex key="HeroIndex1" />
                        <HeroAbout />
                        <HeroDeeper />
                        <HeroInterview />
                        <Tokenomics />
                        <Footer />

                    </>
                    : <VideoPlayer key="VIDEOENDED" handleEnded={handleEnded} />}
            </AnimatePresence>



        </section>
    );
}

export default Hero;