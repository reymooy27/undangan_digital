import React, {useState} from 'react';
import {motion} from 'framer-motion';

const Tamu = () => {
  const [tamu, setTamu] = useState(6)

  const konfirmasi = ()=>{
    setTamu((tamu)=> tamu + 1)
  }

  return (
    <motion.div whileInView={{opacity: 1, translateY: 0}} 
                initial={{opacity: 0, translateY: 50}} 
                transition={{ease: 'easeInOut',duration: 1}} 
                viewport={{once: true}}
                className="flex items-center justify-center flex-col border-2 border-dotted border-green m-4 p-3">
      <h3 className="text-center"><b>{`${tamu} tamu`}</b> merespon akan datang, <br/>kirim konfirmasi</h3>
      <button onClick={konfirmasi} className="w-60 h-10 text-xs flex justify-center items-center rounded-md p-4 mt-5 bg-green text-white text-center uppercase hover:bg-greenDark transition-all ease-in-out duration-500">Konfirmasi Kehadiran</button>
    </motion.div>
  );
}

export default Tamu;
