import Side1 from '../Side1/Side1'
import Quotes from '../Quotes/Quotes'
import Mempelai from '../Mempelai/Mempelai'
import Tanggal from '../Tanggal/Tanggal'
import Tamu from '../Tamu/Tamu'
import Lokasi from '../Lokasi/Lokasi'
import RangkaianAcara from '../RangkaianAcara'

export default function Side() {
  return (
    <div className="h-full w-full lg:w-2/6 flex overflow-scroll overflow-x-hidden flex-col bg-mate">
      <Side1/>
      <Quotes/>
      <Mempelai/>
      <Tanggal/>
      <Tamu/>
      <Lokasi/>
      <RangkaianAcara/>
    </div>
  )
}
