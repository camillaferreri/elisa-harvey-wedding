import { motion } from "framer-motion"

import "./style.scss"

export const Header = () => {
    return (
        <header className="Header">
            <motion.h3
                transition={{ duration: 0.4 }}
                initial={{
                    opacity: 0
                }}
                animate={{
                    opacity: 1
                }}
            >Elisa & Harvey’s wedding</motion.h3>
        </header>
    )
}