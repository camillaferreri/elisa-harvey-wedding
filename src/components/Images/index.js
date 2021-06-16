import { motion } from "framer-motion"
import { useState } from "react"

import image1 from "../../images/image-1.jpg"
import image2 from "../../images/image-2.jpg"
import image3 from "../../images/image-3.jpg"
import image4 from "../../images/image-4.jpg"
import image5 from "../../images/image-5.jpg"
import { containerVariants, imageVariants, titleVariants } from "./variants"

import "./style.scss"

export const Images = () => {
    let [ images, setImages ] = useState([ 
        { 
            url: image4,
            highlight: 5
        },
        { 
            url: image5,
            highlight: 4
        },
        { 
            url: image1,
            highlight: 3
        },
        { 
            url: image2,
            highlight: 2
        },
        { 
            url: image3,
            highlight: 1
        },
    ])

    const updateImage = () => {
        let newOrder = images.map(image => {
            return {
                url: image.url,
                highlight: image.highlight < images.length ? ++image.highlight : 1
            }
        })
        setImages(newOrder)
    }

    return (
        <div className="Images">
            <motion.div 
                className="ImagesContainer"
                onClick={updateImage}
                initial="initial"
                animate="animate"
                variants={containerVariants}
                whileHover={{ rotate: -1, scale: 1.03 }}
            >
                {images.map((image, index) => (
                    <motion.img 
                        key={index}
                        src={image.url} 
                        alt=""
                        variants={imageVariants}
                        style={{
                            zIndex: image.highlight, 
                        }}
                    />
                ))}
            </motion.div>

            <motion.h1
                initial="initial"
                animate="animate"
                variants={titleVariants}
            >love knows no distance</motion.h1>
        </div>
    )
}