import React from 'react'
import {motion} from 'framer-motion';

export default function Mempelai() {



  return (
    <div className="flex flex-col items-center pt-12">
      <motion.h2 whileInView={{opacity: 1, translateY: 0}} initial={{opacity: 0, translateY: 50}} transition={{ease: 'easeInOut',duration: 1}} viewport={{once: true}} className="mb-16 font-title text-6xl text-green">Calon Pengantin</motion.h2>
      <motion.div layout whileInView={{opacity: 1, translateY: 0}} initial={{opacity: 0, translateY: 50}} transition={{ease: 'easeInOut',duration: 1}} viewport={{once: true}} className="w-full flex flex-col xl:flex-row items-center justify-evenly pb-10">
        <div className="rounded-full w-36 h-36 bg-black"></div>
        <div className="text-center">
          <h3 className="font-title text-5xl">Amaludin Asisah Abinah</h3>
          <h3 className="font-bold">Putra kelima dari</h3>
          <span>Dr Ayahanda Colombus &</span><br/>
          <span>Hj Sysoipus</span>
        </div>
      </motion.div>
      <div className="font-title text-8xl">&</div>
      <motion.div layout whileInView={{opacity: 1, translateY: 0}} initial={{opacity: 0, translateY: 50}} transition={{ease: 'easeInOut',duration: 1}} viewport={{once: true}} className="w-full flex flex-col xl:flex-row items-center justify-evenly pt-10">
        <div className="flex flex-col text-center order-2 xl:order-1">
          <h3 className="font-title text-5xl">Amaludin Asisah Abinah</h3>
          <h3 className="font-bold">Putra kelima dari</h3>
          <span>Dr Ayahanda Colombus &</span><br/>
          <span>Hj Sysoipus</span>
        </div>
        <div className="flex flex-col rounded-full w-36 h-36 bg-black order-1 xl:order-2"></div>
      </motion.div>
    </div>
  )
}
