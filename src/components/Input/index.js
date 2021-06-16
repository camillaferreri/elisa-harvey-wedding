import { motion } from "framer-motion"

import "./style.scss"

export const Input = ({ placeholder, value, onChange, error }) => {
    const placeholderVariables = {
        focused: {
            y: 0,
            scale: .8
        },
        unfocused: {
            y: 28,
            scale: 1
        }
    }

    return (
        <motion.label 
            className={`Input ${error && "error"}`}
            animate={value.length > 0 ? "focused" : "unfocused"}
        >
            <motion.span
                variants={placeholderVariables}
                transition={{ ease: "easeOut" }}
            >
                {placeholder}
            </motion.span>
            <input 
                type="text"
                value={value}
                onChange={e => onChange(e.target.value)}
            />
        </motion.label>
    )
}