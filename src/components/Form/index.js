import { useState } from "react"
import { motion } from "framer-motion"

import { formVariants, circleVariants, headerVariants, headerContentVariants, mainVariants, ctaVariants, ctaSpanVariants } from "./variants"

import { Input } from "../Input"
import { TextArea } from "../TextArea"
import { Loading } from "../Loading"

import "./style.scss"

export const Form = ({ isVisible, setIsVisible, addMessage, loading }) => {
    let [ sender, setSender ] = useState("")
    let [ senderValidated, setSenderValidated ] = useState(true)
    let [ message, setMessage ] = useState("")
    let [ messageValidated, setMessageValidated ] = useState(true)

    const buttonSubmit = () => {
        if (isVisible) {
            if (sender.length > 0 && message.length > 0) {
                addMessage(sender, message)
                setSender("")
                setMessage("")
            } else {
                setSenderValidated(false)
                setMessageValidated(false)
            }
        } else {
            setIsVisible(!isVisible)
            setSenderValidated(true)
            setMessageValidated(true)
        }
    }

    return (
        <motion.div 
            className="Form"
            initial={["initial", "reduced"]}
            animate={isVisible ? ["animate", "expanded"] : ["animate", "reduced"]}
            variants={formVariants}
        >
            <motion.div
                className="FormCircle"
                variants={circleVariants}
                transition={{ ease: [0.6, 0.01, -0.05, 0.9] }}
            />

            <motion.div 
                className="FormHeader"
                variants={headerVariants}
            >
                <motion.h2
                    variants={headerContentVariants}
                    transition={{ ease: "easeOut" }}
                >
                    far away but close
                </motion.h2>
                <motion.h4
                    variants={headerContentVariants}
                    transition={{ ease: "easeOut" }}
                >
                    leave a message & let them feel your love
                </motion.h4>
            </motion.div>

            <motion.div 
                className="FormMain"
                variants={mainVariants}
            >
                {loading ? 
                    <Loading />
                    :
                    <>
                    <Input 
                        placeholder="Your name"
                        value={sender}
                        onChange={setSender}
                        error={!senderValidated}
                    />
                    <TextArea 
                        placeholder="Your message"
                        value={message}
                        onChange={setMessage}
                        error={!messageValidated}
                    />
                    </>
                }
            </motion.div>

            <motion.button 
                onClick={buttonSubmit}
                initial="initial"
                animate="animate"
                variants={ctaVariants}
                disabled={loading}
                whileHover="hover"
            >
                <motion.span variants={ctaSpanVariants}>Send your message</motion.span>
            </motion.button>
        </motion.div>
    )
}