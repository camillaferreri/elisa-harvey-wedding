import { motion } from "framer-motion"
import { useEffect, useState } from "react"

import "./style.scss"

export const TextArea = ({ placeholder, value, onChange, error }) => {
    let [ counter, setCounter ] = useState()

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

    useEffect(() => {
        setCounter(140 - value.length)

    }, [value])

    return (
        <motion.label 
            className={`TextArea ${error && "error"}`}
            animate={value.length > 0 ? "focused" : "unfocused"}
        >
            <motion.span
                className="placeholder"
                variants={placeholderVariables}
                transition={{ ease: "easeOut" }}
            >
                {placeholder}
            </motion.span>
            <textarea
                value={value}
                onChange={e => {
                    if (e.target.value.length <= 140) {
                        onChange(e.target.value)
                    }
                }}
            ></textarea>
            <span className="counter">{counter}</span>
        </motion.label>
    )
}