import React from 'react'
import './Hero.css'
import Lottie from "lottie-react";
import hazemmiriAnimation from '../../animation/hazemmiri.json'
import { motion } from 'framer-motion';
const Hero = () => {
  return (
    <section className='hero flex'>
      <div className="left-section">

         <div className="parent-avatar">
          <motion.img
            initial={{transform: "scale(0"}}
            animate={{transform: "scale(1)"}}
            transition={{damping: 7, type: "spring", stiffness: 100}}
          src="./1.jpg" className='avatar' alt="" />
          <span className='icon-verified'></span>
          </div> 
          
          <motion.h1
          initial={{scale: 0}}
          animate={{scale: 1}}
          transition={{duration: 2}}
          className='title'>
          Hi my name is ,
          Hazem_Miri
          I developer scalable web based application
          </motion.h1>
          <motion.p
          
          initial={{scale: 0}}
          animate={{scale: 1}}
          transition={{duration: 2}}
          className='subtitle'>
          
          I am a student passionate about Full Stack Js development, with a strong educational backgroundand a desire to gain practical experience in the field.Having recently graduated with a diploma in FullStack JavaScript Development, I am eager to applymy knowledge and make meaningful contributions toreal-world projects.
          </motion.p>

          <motion.div 
           initial={{scale: 0}}
           animate={{scale: 1}}
           transition={{duration: 2}}
          
          className="all-icons flex">
            <a href='' className="icon icon-twitter"></a>
            <a href='https://www.instagram.com/hazem__miri?' className="icon icon-instagram"></a>
            <a href='https://github.com/hazemmiri/' className="icon icon-github"></a >
            <a href='https://www.linkedin.com/in/hazem-miri/' className="icon icon-linkedin"></a>
          </motion.div>



      </div>

      <motion.div 
      
      initial={{scale: 0}}
      animate={{scale: 1}}
      transition={{duration: 2}}
      
      className="right-section animation ">
      <Lottie   
     
     animationData={hazemmiriAnimation} />
     
      </motion.div>
    </section>
  )
}

export default Hero