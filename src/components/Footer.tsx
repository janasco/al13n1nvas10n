import { SiTwitter } from 'react-icons/si'
import { FaTelegramPlane, FaFacebookF } from 'react-icons/fa'
import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <footer className="w-full bg-[#111111] h-[19rem] p-10 relative flex items-center px-16" id="socials">

            <div className="w-full relative z-10 text-white flex justify-between h-fit md:flex-row flex-col items-center gap-y-8 text-center">
                <div className="font-orbit">
                    <motion.h1 initial={{ x: -50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 1 }} className="text-sm">ALIEN INVASION © 2023. ALL RIGHTS RESERVED</motion.h1>
                </div>
                <motion.div initial={{ x: 50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 1 }} className='flex text-xl gap-x-6 items-center'>
                    <h2 className="font-orbit text-sm">FOLLOW</h2>
                    <FaFacebookF className="cursor-pointer hover:scale-[1.1]" />
                    <SiTwitter className="cursor-pointer" />
                    <FaTelegramPlane className="cursor-pointer" />
                </motion.div>
            </div>

            <motion.div initial={{ scale: 0, rotate: 360 }} whileInView={{ scale: 1, rotate: 0 }} transition={{ duration: 1, ease: [0.16, 0.77, 0.47, .97] }} className="absolute mx-auto left-0 right-0 top-0 bottom-0 my-auto w-fit h-fit">
                <img src="/logo.webp" alt="Center Footer " className="lg:opacity-[1] opacity-[0.3] w-[15rem] z-20 relative" />
            </motion.div>
        </footer>
    );
}

export default Footer;