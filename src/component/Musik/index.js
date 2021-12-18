import React, {useEffect, useState} from 'react'
import Image from 'next/image'

export default function Musik() {

  const [msk, setMsk] = useState(true)

  
  useEffect(() => {
    const musik = document.getElementById('musik')
    msk ? musik.play() : musik.pause()
  }, [msk])

  const control = ()=>{
    setMsk(!msk)
    console.log('click')
  }

  return (
    <div className="audio">
      <audio autoPlay loop id="musik">
        <source src="Midnight Youth - Golden Love.mp3" type="audio/mp3"/>
      Your browser does not support the audio element.
      </audio>
      <div className="w-8 h-8 rounded-full" onClick={control}>
        <Image className="w-full h-full object-cover" width={'100%'} height={'100%'} src={msk ? '/pause-outline.svg' : '/play-outline.svg'} alt="" />
      </div>
    </div>
  )
}
