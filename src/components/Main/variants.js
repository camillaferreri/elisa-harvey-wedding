export const containerVariants = {
    visible: { 
        opacity: 1,
    },
    hidden: { 
        opacity: 0,
    },
}

export const contentVariants = {
    initial: {
        filter: `blur(0px)`,
        x: 0,
        y: 0,
    },
    blurred: {
        filter: `blur(3px)`,
        x: 0,
        y: 0,
    }
}

export const ctaVariants = {
    visible: { 
        opacity: 1,
        transition: {
            delay: 2
        }
    },
    hidden: { opacity: 0 },
}