import { useState, useRef, useEffect } from "react"
import axios from "axios"
import { motion } from "framer-motion"

import { containerVariants, contentVariants, ctaVariants } from "./variants"
import { calcMessagePosition } from "../../utils/calcMessagePosition"
import { API_URL } from "../../utils/api"
import { messages as messagesData } from "../../data/messages"

import { Cta } from "../Cta"
import { Images } from "../Images"
import { Form } from "../Form"
import { Message } from "../Message"

import dragIcon from "../../images/drag-icon.svg"

import "./style.scss"

export const Main = ({ isVisible }) => {
    const ref = useRef(null)
    let [ isFormVisible, setIsFormVisible ] = useState(false)
    let [ isFormLoading, setIsFormLoading ] = useState(false)
    let [ wrapperPosition, setWrapperPosition ] = useState({ x: 0, y: 0 })
    let [ messages, setMessages ] = useState([])
    let [ usedBoxes, setUsedBoxes ] = useState([])

    const onWrapperClick = () => {
        if (isFormVisible) {
            setIsFormVisible(false)
        }
    }

    const addMessage = (sender, text) => {
        setIsFormLoading(true)
        const { top, left, newUsedBoxes } = calcMessagePosition(usedBoxes)
        
        axios.post(
                API_URL, {
                    sender, 
                    text,
                    top,
                    left
                })
                .then(result => {
            setMessages([...messages, {
                sender, 
                text,
                top,
                left
            }])
            setUsedBoxes([...usedBoxes, ...newUsedBoxes])
            // console.log("---")
            // console.log("top", top)
            // console.log("x", (15 - top) * (window.innerHeight / 12))
            // console.log("left", left)
            // console.log("y", (15 - left) * (window.innerHeight / 12))
            // setWrapperPosition({ 
            //     x: (15 - top) * (window.innerHeight / 12),
            //     y: left < 15 ? (left - 15) * (window.innerHeight / 12) : (15 - left) * (window.innerHeight / 12),
            // })
            setIsFormVisible(false)
            setIsFormLoading(false)
        })
        .catch(e => console.log(e))

    }

    useEffect(() => {
        
        axios.get(API_URL)
            .then(result => {
                let boxes = []
                result.data.map(({ top, left }) => boxes.push(
                    { top, left }, 
                    { top: top, left: left +1 },
                    { top: top, left: left +2 }
                ))
                
                setMessages(result.data)
                setUsedBoxes(boxes)
            })
        
        // let boxes = []
        // messagesData.map(({ top, left }) => boxes.push(
        //     { top, left }, 
        //     { top: top, left: left +1 },
        //     { top: top, left: left +2 }
        // ))
        // setMessages(messagesData)
        // setUsedBoxes(boxes)
    }, [])

    const contentVariants = {
        initial: {
            filter: `blur(0px)`,
            x: wrapperPosition.x,
            y: wrapperPosition.y,
        },
        blurred: {
            filter: `blur(3px)`,
            x: wrapperPosition.x,
            y: wrapperPosition.y,
        }
    }

    return (
        <motion.div 
            className="Main"
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={containerVariants}
            transition={{ ease: "easeOut" }}
        >
            <motion.div
                ref={ref}
                className="Wrapper"
                initial="initial"
                animate={isFormVisible ? "blurred" : "initial"}
                variants={contentVariants}
                onClick={onWrapperClick}
                drag
                dragPropagation 
                dragTransition={{ power: 0.3 }}
                dragConstraints={{
                    top: window.innerWidth > 620 ? -window.innerHeight * 1.1 : -window.innerHeight * 1.4,
                    bottom: window.innerWidth > 620 ? window.innerHeight * 1.1 : window.innerHeight * 1.4,
                    left: window.innerWidth > 620 ? -window.innerHeight : -window.innerHeight * 1.6, 
                    right: window.innerWidth > 620 ? window.innerHeight  : window.innerHeight * 1.6,
                }}
            >
			    <Images />

                {messages.map((message, index) => (
                    <Message 
                        key={index}
                        text={message.text}
                        sender={message.sender}
                        top={message.top}
                        left={message.left}
                    />
                ))}
            </motion.div>
			
            <Cta 
                icon={dragIcon}
                text="Drag to discover"
                variants={ctaVariants}
                transition={{ ease: "easeOut", delay: 0.5 }}
                style={{
                    pointerEvents: "none"
                }}
            />

            <Form 
                isVisible={isFormVisible}
                setIsVisible={setIsFormVisible}
                loading={isFormLoading}
                addMessage={addMessage}
            />
        </motion.div>
    )
}