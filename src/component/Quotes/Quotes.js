import React from 'react'
import {motion} from 'framer-motion';

export default function Quotes() {
  return (
    <div className="h-screen p-12 bg-green">
        <motion.h3 whileInView={{opacity: 1}} transition={{ease: 'easeInOut', duration: 1.5}} initial={{opacity: 0}} viewport={{once: true}} className="text-center text-white">Dan nikahkanlah orang-orang yang sendirian di antara kamu, 
          dan orang-orang yang layak (menikah) dari hamba sahayamu yang 
          lelaki dan hamba-hamba sahayamu yang perempuan. jika mereka 
          miskin Allah akan mengkayakan mereka dengan karunianya. 
          Dan Allah Maha Luas (pemberiannya) dan Maha Mengetahui
          . (QS. An Nuur (24) : 32)</motion.h3>
    </div>
  )
}
