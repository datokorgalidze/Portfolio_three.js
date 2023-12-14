import React from 'react';
import {BallCanvas} from "./canvas";
import SectionWrapper from './hoc/SectionWrapper';
import { technologies } from '../constants';
import { motion } from "framer-motion";
import { textVariant } from '../untils/motion';
import { styles } from '../styles';

const Tech = () => {
  return (
    <>
     <motion.div variants={textVariant()}>
    <div className='mb-20'>
    <h2 className={`${styles.sectionHeadText} text-center`}>
         Technologies
        </h2>
        <p className={`${styles.sectionSubText} text-center`}>
         that I have used
        </p>
      </div>
      </motion.div>
    <div className='flex flex-row flex-wrap  justify-center gap-10 '> 
      {technologies.map((technologiy) => (
         <div className='w-28 h-28' key={technologiy.name}>
          <BallCanvas icon = {technologiy.icon}/>
         </div>
      ))}
    </div>
    </>
  )
}

export default SectionWrapper (Tech, "");