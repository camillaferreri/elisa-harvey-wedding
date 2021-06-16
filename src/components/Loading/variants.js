export const containerVariants = {
    animate: {
        opacity: 1,
        transition: { 
            when: "afterChildren",
            duration: 1,
            staggerChildren: 0.1
        }
    },
}

export const contentVariants = {
    initial: {
        y: 25
    },
    animate: {
        y: -25,
        transition: { 
            duration: 1.5, 
            repeat: Infinity,
            ease: "linear"
        }
    },
}