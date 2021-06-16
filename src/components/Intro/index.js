import { motion } from "framer-motion"

import { containerVariants, lineVariants, ctaVariants } from "./variants"

import { Cta } from "../Cta"

import tapIcon from "../../images/tap-icon.svg"

import "./style.scss"

export const Intro = ({ isVisible, toggleVisibility }) => {
    const lines = [
        "since we can’t be with you on this special day,",
        "we gathered friends and family to wish you the best",
        "and let you feel our love from far away"
    ]    

    return (
        <motion.div 
            className="Intro"
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={containerVariants}
            transition={{ ease: "easeOut", delay: 1 }}
        >
            {lines.map((line, index) => (
                <div key={index}>
                    <motion.p 
                        variants={lineVariants}
                        transition={{ ease: "easeOut" }}
                    >{line}</motion.p>
                </div>
            ))}

            <Cta 
                icon={tapIcon}
                text="Click to continue"
                onClick={toggleVisibility}
                variants={ctaVariants}
                transition={{ ease: "easeOut", delay: 1.5 }}
            />
        </motion.div>
    )
}