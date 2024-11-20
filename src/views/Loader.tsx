import { motion } from "framer-motion";

const Loader = () => {
    return (
        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1.2 }} key="Loader" className="w-full h-screen bg-black absolute top-0 left-0">
            <img src="/loader.gif" alt="Loader" className="w-full h-full object-contain absolute left-0 right-0 mx-auto" />

            <motion.h2 animate={{ opacity: [0, 1] }} transition={{ repeat: Infinity, duration: 2, repeatType: "reverse", ease: "linear" }} className="font-orbit text-white absolute top-20 left-20">LOADING...</motion.h2>
            <h2 className="font-orbit text-white absolute bottom-20 right-20">ALIEN INVASION</h2>

        </motion.section>
    );
}

export default Loader;