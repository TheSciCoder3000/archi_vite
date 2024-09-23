import ServiceImg from "../assets/img/drawing.jpg"
import TinyServiceImg from "../assets/img/tiny-drawing.jpg"

import Architect from "../assets/img/architect.jpg"

import Gallery1 from "../assets/img/gallery1.jpg"
import Gallery2 from "../assets/img/gallery2.jpg"
import Gallery3 from "../assets/img/gallery3.jpg"
import Gallery4 from "../assets/img/gallery4.jpg"
import Gallery5 from "../assets/img/gallery5.jpg"
import Gallery6 from "../assets/img/gallery6.jpg"
import Gallery7 from "../assets/img/gallery7.jpg"
import Gallery8 from "../assets/img/gallery8.jpg"

import "../assets/css/Services.css"

import { motion } from 'framer-motion';
import ProgressiveImage from "react-progressive-graceful-image"

const parentVariant = {
    initial: { opacity: 1 },
    animate: { opacity: 1, transition: { delayChildren: 0.5, staggerChildren: 0.5, when: "beforeChildren" } },
}

const childImg = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0, transition: { delay: 0.5 } },
    viewport: { margin: "-100px 0px -100px 0px", once: true }
}

const Services = () => {
    const serviceList = [
        [
            {
                img: Gallery1,
                title: "hotel de luna",
                type: "big"
            },
            {
                img: Gallery2,
                title: "Upside Down De Lito",
                type: "small"
            },
        ],
        [
            {
                img: Gallery3,
                title: "Tangkad mo tol",
                type: "small"
            },
            {
                img: Gallery4,
                title: "Rest House ni Bossing",
                type: "big"
            }
        ],
        [
            {
                img: Gallery5,
                title: "Tahanan ni Idol",
                type: "big"
            },
            {
                img: Gallery6,
                title: "Viewspectaculous",
                type: "small"
            }
        ],
        [
            {
                img: Gallery7,
                title: "Beach Arc",
                type: "small"
            },
            {
                img: Gallery8,
                title: "Very large building",
                type: "big"
            }
        ],
    ]
    return (
        <div className="main-service-container">
            <div className="service-hero">
                <ProgressiveImage src={ServiceImg} placeholder={TinyServiceImg}>
                    {(src) => <img src={src} alt="an image" />}
                </ProgressiveImage>
                <div className="grade" />
                <motion.div initial={{ scaleY: 1, originY: 1 }} animate={{ scaleY: 0, originY: 1, transition: { duration: 0.3 } }} exit={{ scaleY: 1, originY: 1 }} className="hider" />
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 0.5 } }} exit={{ opacity: 0 }} className="service-hero-text-container">
                    <h3>SERVICES</h3>
                    <h1>Crafting Innovative Spaces with Precision and Vision</h1>
                </motion.div>
            </div>
            <div className="service-description">
                <div className="service-content">
                    <div className="img-container">
                        <img src={Architect} alt="" />
                    </div>
                    <div className="description-container">
                        <h2 className="archi-font">Our Services</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Aliquam tempore reprehenderit vero quam inventore voluptates
                            iusto quisquam corrupti culpa voluptatum, alias magni neque
                            omnis ad optio assumenda quaerat, quod sit sunt. Ratione id
                            blanditiis labore!
                        </p>
                    </div>
                </div>
            </div>
            <div className="service-gallery-container">
                <h1 className="archi-font">PROJECTS</h1>
                {serviceList.map((item, indx) =>
                    <motion.div variants={parentVariant} initial="initial" animate="animate" key={indx} className="service-row">
                        <motion.div variants={childImg} initial="initial" whileInView="whileInView" viewport="viewport" className={`service-item ${item[0].type}`}>
                            <img src={item[0].img} alt="" />
                            <h4 className="archi-font">{item[0].title}</h4>
                        </motion.div>
                        <motion.div variants={childImg} initial="initial" whileInView="whileInView" viewport="viewport" className={`service-item ${item[1].type}`}>
                            <img src={item[1].img} alt="" />
                            <h4 className="archi-font">{item[1].title}</h4>
                        </motion.div>
                    </motion.div>
                )}
            </div>
        </div >
    )
}

export default Services