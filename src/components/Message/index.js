import { motion } from "framer-motion"

import { containerVariants, textVariants, lineVariants, senderVariants } from "./variants"

import "./style.scss"

export const Message = ({ text, sender, top, left }) => {
    return (
        <motion.div 
            className="Message"
            style={{
                top: `${top}em`,
                left: `${left}em`
            }}
            initial="initial"
            animate="animate"
            variants={containerVariants}
        >
            <motion.p variants={textVariants}>{text}</motion.p>
            <div>
                <motion.span className="line" variants={lineVariants}></motion.span>
                <motion.span className="sender" variants={senderVariants}>{sender}</motion.span>
            </div>
        </motion.div>
    )
}