export const formVariants = {
    initial: {
        opacity: 0,
        transition: {
            delay: 1
        }
    },
    reduced: {
        opacity: 1,
        transition: {
            delay: 1
        }
    },
    animate: {}
}

export const circleVariants = {
    expanded: {
       scale: 1,
       y: "55%"
    },
    reduced: {
        scale: 0.3,
        y: "55%"
    },
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        transition: {
            delay: 2.8
        },
    }
}

export const headerVariants = {
    expanded: {
        opacity: 1,
        transition: {
            staggerChildren: 0.4,
            delayChildren: 0.5
        },
        transitionEnd: {
            display: "block"
        }
    },
    reduced: {
        opacity: 0,
        transition: {
            staggerChildren: 0.4,
            staggerDirection: -1
        },
        transitionEnd: {
            display: "none"
        }
    },
}

export const headerContentVariants = {
    expanded: {
        opacity: 1,
        y: 0
    },
    reduced: {
        opacity: 0,
        y: 20
    },
}

export const mainVariants = {
    expanded: {
        opacity: 1,
        transition: { 
            ease: "easeOut", 
        },
        transitionEnd: {
            display: "block"
        }
    },
    reduced: {
        opacity: 0,
        transitionEnd: {
            display: "none"
        }
    },
}

export const ctaVariants = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        transition: {
            delay: 3.1
        },
    }
}

export const ctaSpanVariants = {
    initial: {
        y: 0
    },
    animate: {
        y: 0
    },
    hover: {
        y: [0, -25, 25, 0],
        skewY: [0, 5, 5, 0],
        transition: {
            times: [0, 0.25, 0.25, 0.5],
            duration: 1.5,
            ease: "easeInOut",
        }
    }
}