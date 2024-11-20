import { motion } from "framer-motion";
import { FunctionComponent } from "react";
import { useInView } from "react-intersection-observer";

interface PropChild {
    children: JSX.Element
}

const Opac: FunctionComponent<PropChild> = (props) => {

    const [ref, inView] = useInView({ triggerOnce: true, threshold: 1 })


    return (
        <motion.div className="" initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ ease: [0.16, 0.77, 0.47, .97], duration: 2, delay: 0.5 }} ref={ref}>
            {props.children}
        </motion.div>
    );
}

export default Opac;