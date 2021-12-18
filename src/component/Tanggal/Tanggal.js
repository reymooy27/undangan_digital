import {useState, useEffect} from 'react'
import {motion} from 'framer-motion';

const Tanggal = ()=>{
  const targetTime = new Date("2021-12-25").getTime();
  const [currentTime, setCurrentTime] = useState(Date.now());

  const timeBetween = targetTime - currentTime;
  const seconds = Math.floor((timeBetween / 1000) % 60);
  const minutes = Math.floor((timeBetween / 1000 / 60) % 60);
  const hours = Math.floor((timeBetween / (1000 * 60 * 60)) % 24);
  const days = Math.floor(timeBetween / (1000 * 60 * 60 * 24));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(Date.now());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  
  return(
    <div className="flex flex-col items-center my-16">
      <motion.h1 whileInView={{opacity: 1, translateY: 0}} 
                  initial={{opacity: 0, translateY: 50}} 
                  transition={{ease: 'easeInOut',duration: 1}} 
                  viewport={{once: true}} 
                  className="font-title text-6xl text-green text-center">Acara Akan Diselenggarakan</motion.h1>
      <motion.div whileInView={{opacity: 1, translateY: 0}} 
                  initial={{opacity: 0, translateY: 50}} 
                  transition={{ease: 'easeInOut',duration: 1}} 
                  viewport={{once: true}}
                  className='w-full'
                  >
        <div className="p-3 text-center">
          <h1 className="text-6xl font-bold">{days}</h1>
          <span className="font-bold">Hari</span>
        </div>
        <div className="w-full flex justify-evenly p-5 px-10">
          <div>
            <h4 className="text-center font-bold text-3xl">{hours}</h4>
            <span className="text-center font-bold">Jam</span>
          </div>
          <div>
            <h4 className="text-center font-bold text-3xl">{minutes}</h4>
            <span className="text-center font-bold">Menit</span>
          </div>
          <div>
            <h4 className="text-center font-bold text-3xl">{seconds}</h4>
            <span className="text-center font-bold">Detik</span>
          </div>
        </div>
      </motion.div>
      <motion.h3 whileInView={{opacity: 1, translateY: 0}} 
                  initial={{opacity: 0, translateY: 50}} 
                  transition={{ease: 'easeInOut',duration: 1}} 
                  viewport={{once: true}} 
                  className="p-3">Minggu, 18 Juli 1210</motion.h3>
      <motion.button whileInView={{opacity: 1, translateY: 0}} 
                    initial={{opacity: 0, translateY: 50}} 
                    transition={{ease: 'easeInOut',duration: 0.7}} 
                    viewport={{once: true}} 
                    className="w-40 h-10 text-xs mx-auto flex items-center justify-center my-3 rounded-3xl p-4 bg-green text-white text-center uppercase hover:bg-greenDark transition-all ease-in-out duration-500">simpan ke kalender</motion.button>
    </div>
  )
}
export default Tanggal;