import React from 'react'
import {motion} from 'framer-motion';

export default function Side1() {
  return (
    <div className="w-full min-h-screen p-11 bg-weddingside bg-opacity-30 bg-blend-darken bg-no-repeat bg-cover bg-center flex flex-col justify-between items-center">
      <div className="text-center">
        <span className="pb-2 block text-white">Undangan Pernikahan</span>
        <h1 className="font-title text-8xl text-white">Anis & Ansi</h1>
        <span className="flex mx-10 justify-evenly text-white">17 <b>.</b> 7 <b>.</b> 2021</span>
      </div>
      <div>
        <motion.h3 animate={{scale:[1,1.1,1.1,1,1]}} transition={{repeat: Infinity, duration: 1.5, ease: 'easeInOut'}} className="text-white">scroll kebawah</motion.h3>
      </div>
    </div>
  )
}
