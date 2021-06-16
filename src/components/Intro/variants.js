export const containerVariants = {
    hidden: { 
        opacity: 0,
        transition: {
            staggerChildren: 0.4,
            staggerDirection: -1
        },
    },
    visible: { 
        opacity: 1,
        transition: {
            staggerChildren: 0.4,
        },
    },
}

export const lineVariants = {
    hidden: { 
        opacity: 0,
        y: 20,
        skewY: 5,
    },
    visible: { 
        opacity: 1,
        y: 0,
        skewY: 0,
    },
}

export const ctaVariants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1
    },
}