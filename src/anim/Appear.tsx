import { motion } from "framer-motion";
import { FunctionComponent } from "react";
import { useInView } from 'react-intersection-observer'

interface PropChild {
    children: JSX.Element
}

const Appear: FunctionComponent<PropChild> = (props) => {

    const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.5 })

    return (
        <div className="overflow-hidden" ref={ref}>
            <motion.div initial={{ opacity: 0, }} animate={inView ? { y: [-80, 0], opacity: 1 } : {}} transition={{ ease: [0.16, 0.77, 0.47, .97], duration: 1.5, delay: 0.2 }} className="">
                {props.children}
            </motion.div>
        </div>

    );
}

export default Appear;