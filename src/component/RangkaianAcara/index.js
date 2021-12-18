/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import {motion} from 'framer-motion';

function RangkaianAcara() {
  return (
    <div className="text-center">
      <div className="mb-10">
        <motion.h3 whileInView={{opacity: 1, translateY: 0}} 
                    initial={{opacity: 0, translateY: 50}} 
                    transition={{ease: 'easeInOut',duration: 1}} 
                    viewport={{once: true}}
                    className="font-title text-6xl text-green">Akad Nikah</motion.h3>
        <motion.p whileInView={{opacity: 1, translateY: 0}} 
                    initial={{opacity: 0, translateY: 50}} 
                    transition={{ease: 'easeInOut',duration: 1}} 
                    viewport={{once: true}}>Jumat, 15 Oktober 2021</motion.p>
        <motion.p whileInView={{opacity: 1, translateY: 0}} 
                    initial={{opacity: 0, translateY: 50}} 
                    transition={{ease: 'easeInOut',duration: 1}} 
                    viewport={{once: true}}>pukul 10:00 WITA - selesai</motion.p>
        <motion.p whileInView={{opacity: 1, translateY: 0}} 
                    initial={{opacity: 0, translateY: 50}} 
                    transition={{ease: 'easeInOut',duration: 1}} 
                    viewport={{once: true}}>Jalan Kemunging Raya, di Masjid Al Barokah</motion.p>
        <motion.button whileInView={{opacity: 1, translateY: 0}} 
                    initial={{opacity: 0, translateY: 50}} 
                    transition={{ease: 'easeInOut',duration: 1}} 
                    viewport={{once: true}}
                    className="w-40 h-10 text-xs mx-auto flex items-center justify-center my-3 rounded-3xl p-4 bg-green text-white text-center uppercase hover:bg-greenDark transition-all ease-in-out duration-500"
                    >lihat lokasi</motion.button>
      </div>

      <div className="mb-10">
        <motion.h3 whileInView={{opacity: 1, translateY: 0}} 
                    initial={{opacity: 0, translateY: 50}} 
                    transition={{ease: 'easeInOut',duration: 1}} 
                    viewport={{once: true}} className="font-title text-6xl text-green">Resepsi</motion.h3>
        <motion.p whileInView={{opacity: 1, translateY: 0}} 
                    initial={{opacity: 0, translateY: 50}} 
                    transition={{ease: 'easeInOut',duration: 1}} 
                    viewport={{once: true}}>Jumat, 15 Oktober 2021</motion.p>
        <motion.p whileInView={{opacity: 1, translateY: 0}} 
                    initial={{opacity: 0, translateY: 50}} 
                    transition={{ease: 'easeInOut',duration: 1}} 
                    viewport={{once: true}}>pukul 10:00 WITA - selesai</motion.p>
      </div>

      <div className="mb-10">
        <motion.h3 whileInView={{opacity: 1, translateY: 0}} 
                    initial={{opacity: 0, translateY: 50}} 
                    transition={{ease: 'easeInOut',duration: 1}} 
                    viewport={{once: true}} className="font-title text-6xl text-green">Unduh Mantu</motion.h3>
        <motion.p whileInView={{opacity: 1, translateY: 0}} 
                    initial={{opacity: 0, translateY: 50}} 
                    transition={{ease: 'easeInOut',duration: 1}} 
                    viewport={{once: true}}>Jumat, 15 Oktober 2021</motion.p>
        <motion.p whileInView={{opacity: 1, translateY: 0}} 
                    initial={{opacity: 0, translateY: 50}} 
                    transition={{ease: 'easeInOut',duration: 1}} 
                    viewport={{once: true}}>pukul 10:00 WITA - selesai</motion.p>
        <motion.p whileInView={{opacity: 1, translateY: 0}} 
                    initial={{opacity: 0, translateY: 50}} 
                    transition={{ease: 'easeInOut',duration: 1}} 
                    viewport={{once: true}}>Jalan Kemunging Raya, di Masjid Al Barokah</motion.p>
        <motion.button whileInView={{opacity: 1, translateY: 0}} 
                    initial={{opacity: 0, translateY: 50}} 
                    transition={{ease: 'easeInOut',duration: 1}} 
                    viewport={{once: true}}
                    className="w-40 h-10 text-xs mx-auto flex items-center justify-center my-3 rounded-3xl p-4 bg-green text-white text-center uppercase hover:bg-greenDark transition-all ease-in-out duration-500"
                    >lihat lokasi</motion.button>
      </div>

      <div className="mb-10">
        <motion.p whileInView={{opacity: 1, translateY: 0}} 
                    initial={{opacity: 0, translateY: 50}} 
                    transition={{ease: 'easeInOut',duration: 1}} 
                    viewport={{once: true}}>Merupakan suatu kehormatan dan kebahagiaan bagi
          kami apabila, Bapak / Ibu / Saudara / i. 
          berkenan hadir untuk memberikan do'a 
          restunya kami ucapkan terimakasih.</motion.p>
      </div>

      <div className="mb-10">
        <motion.h5 whileInView={{opacity: 1, translateY: 0}} 
                    initial={{opacity: 0, translateY: 50}} 
                    transition={{ease: 'easeInOut',duration: 1}} 
                    viewport={{once: true}}
                    className="font-bold">Turut mengundang: </motion.h5> 
        <motion.p whileInView={{opacity: 1, translateY: 0}} 
                    initial={{opacity: 0, translateY: 50}} 
                    transition={{ease: 'easeInOut',duration: 1}} 
                    viewport={{once: true}}>Keluarga besar SUjono</motion.p>
        <motion.p whileInView={{opacity: 1, translateY: 0}} 
                    initial={{opacity: 0, translateY: 50}} 
                    transition={{ease: 'easeInOut',duration: 1}} 
                    viewport={{once: true}}>Keluarga besar SUjono</motion.p>
        <motion.p whileInView={{opacity: 1, translateY: 0}} 
                    initial={{opacity: 0, translateY: 50}} 
                    transition={{ease: 'easeInOut',duration: 1}} 
                    viewport={{once: true}}>Keluarga besar SUjono</motion.p>
      </div>
    </div>
  )
}

export default RangkaianAcara
