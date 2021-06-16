export const containerVariants = {
    initial: { 
        opacity: 0,
    },
    animate: { 
        opacity: 1,
    },
}

export const textVariants = {
    initial: { 
        opacity: 0,
        y: 20
    },
    animate: { 
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.1
        }
    },
}

export const lineVariants = {
    initial: { 
        width: 0
    },
    animate: { 
        width: "1rem",
        transition: {
            delay: 0.4,
            duration: 0.3,
        }
    },
}

export const senderVariants = {
    initial: { 
        width: "0%",
    },
    animate: { 
        width: "100%",
        transition: {
            ease: "easeInOut", 
            delay: 0.8,
            duration: 0.5
        }
    },
}