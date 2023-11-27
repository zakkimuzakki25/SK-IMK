import PrimerButtonSquare from '../button/square/PrimerButtonSquare'
import PropTypes from 'prop-types'
import checkIcon from '../../assets/icon/check.svg'
import { useEffect, useState } from 'react'

const Succes = ({okHandle}) => {
  const [timeLeft, setTimeLeft] = useState(43180)
  
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(prevTime => prevTime - 1)
    }, 1000)

    return () => clearInterval(interval)
  }, []);

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    return `${hours} Jam ${minutes} Menit ${remainingSeconds} Detik`;
  };

  return (
    <div className='flex flex-col rounded-2xl bg-white overflow-hidden'>
        <div className="py-3 bg-primary2 text-white font-semibold text-xl justify-center flex">Succes</div>
        <div className="px-10 flex flex-col pb-7 pt-2 border-2">
          <img src={checkIcon} className='w-36 items-self m-auto py-5'/>
          <div className="py-4 self-start font-semibold">Don&apos;t forget to pick up your book at :</div>
          <div className="pb-4 self-start w-96">567 Willow Park Avenue Graha Candi Residence, Blok C2 Singosari Subdistrict Malang City, East Java 65141 Indonesia</div>
          <div className="flex flex-row gap-10 justify-between">
            <div className="bg-backgroundsolid border border-black py-2 px-4">Batas Waktu Pengambilan <span className='font-semibold w-96'>{formatTime(timeLeft)}</span></div>
            <div className="w-44"><PrimerButtonSquare name={"Ok"} handle={okHandle}/></div>
          </div>
        </div>
    </div>
  )
}

Succes.propTypes = {
  okHandle: PropTypes.func.isRequired,
}

export default Succes