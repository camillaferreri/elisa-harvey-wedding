import { motion } from "framer-motion"

import { containerVariants, contentVariants } from "./variants"

import "./style.scss"

export const Loading = ({  }) => {
    return (
        <motion.p 
            className="Loading"
            initial="initial"
            animate="animate"
            variants={containerVariants}
        >
            <motion.span variants={contentVariants}>l</motion.span>
            <motion.span variants={contentVariants}>o</motion.span>
            <motion.span variants={contentVariants}>a</motion.span>
            <motion.span variants={contentVariants}>d</motion.span>
            <motion.span variants={contentVariants}>i</motion.span>
            <motion.span variants={contentVariants}>n</motion.span>
            <motion.span variants={contentVariants}>g</motion.span>
        </motion.p>
    )
}