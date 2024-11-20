import Loader from "./Loader";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import Start from '../../videos/Start.mp4'

const VideoPlayer = ({ handleEnded }: { handleEnded: () => void }) => {

    // const [showVideo, setShow] = useState(false)
    const [loading, setLoading] = useState(true);
    const [trueLoading, setTrueLoading] = useState(true)
    const [start, setStart] = useState(false)

    const handleVideoLoaded = () => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    };

    useEffect(() => {
        handleVideoLoaded()
    }, [])

    const handleKeyPress = (event: { key: string; }) => {
        if (event.key === 'Escape') {
            handleEnded()
        }
    };

    useEffect(() => {
        window.addEventListener('keydown', handleKeyPress);
        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, []);


    const handleTrue = () => {
        setTrueLoading(false)
    }

    const handleStart = () => {
        setStart(true)
    }

    if (start === false) {
        return (
            <div className="w-full h-screen cursor-pointer flex items-center justify-center bg-black" onClick={handleStart}>
                <motion.h1 animate={{ opacity: [0, 1] }} transition={{ repeat: Infinity, duration: 1, repeatType: "reverse", ease: "linear" }} className="font-orbit text-white">Click to Enter</motion.h1>
            </div>
        )
    }





    return (
        <motion.section transition={{ duration: 1 }} exit={{ maxHeight: "0rem" }} key="VIDEOPLAYERKEY" className="bg-black w-full h-screen origin-top max-h-[300rem]">
            <AnimatePresence>
                {
                    trueLoading ? <Loader key="LOADER1" /> : null
                }
            </AnimatePresence>

            {loading ?
                <Loader /> :
                <div>
                    <video
                        autoPlay
                        src={Start}
                        preload={'auto'}
                        onLoadedData={handleTrue}
                        onEnded={handleEnded}
                        playsInline
                        className="w-full h-screen object-cover absolute top-0 left-0"
                    />
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3, duration: 1 }} className="absolute bottom-5 right-5 flex items-center gap-x-3 text-white/50 font-orbit text-sm">
                        <h3 className="">Press</h3>

                        <div className="rounded-md border-[1px] px-4 py-2">
                            <h3 className="">ESC</h3>
                        </div>
                        <h3 className="">to skip</h3>
                    </motion.div>
                </div>}

        </motion.section>
    );
}

export default VideoPlayer;