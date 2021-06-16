import { motion } from "framer-motion"

import "./style.scss"

export const Cta = ({ icon, text, onClick, ...rest }) => {
    return (
        <motion.div
            className="Cta"
            onClick={onClick}
            {...rest}
        >
            <img src={icon} alt="" />
            <h5>{text}</h5>
        </motion.div>
    )
}