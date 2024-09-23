import HeroImg from '../assets/img/new_hero.jpg';
import MaskImg from '../assets/img/mask_hero.png';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const MultiLayeredHero = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    })
    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <div ref={ref} className="hero-container">
            <motion.div initial={{ scaleY: 1, originY: 1 }} animate={{ scaleY: 0, originY: 1, transition: { duration: 0.35 } }} exit={{ scaleY: 1 }} className="hider" />
            <motion.h1
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1, transition: { delay: 0.3 } }}
                exit={{ opacity: 0 }}
                style={{ y: textY }}>
                <span>DIS</span>COVER
            </motion.h1>
            <img className="hero-img" src={HeroImg} alt="hero_img" />
            <motion.img style={{ y: backgroundY }} className="mask-img" src={MaskImg} alt="hero_img" />
        </div>
    )
}

export default MultiLayeredHero