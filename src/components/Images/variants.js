export const containerVariants = {
    initial: { 
        opacity: 0,
    },
    animate: { 
        opacity: 1,
        transition: {
            staggerChildren: 0.8,
            staggerDirection: -1,
        },
    },
}

export const imageVariants = {
    initial: { 
        opacity: 0,
    },
    animate: { 
        opacity: 1,
    },
}

export const titleVariants = {
    initial: { 
        opacity: 0,
    },
    animate: { 
        opacity: 1,
        transition: {
            delay: 0.3
        }
    },
}