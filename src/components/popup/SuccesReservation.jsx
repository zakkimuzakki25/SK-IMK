import PrimerButtonSquare from '../button/square/PrimerButtonSquare'
import PropTypes from 'prop-types'
import checkIcon from '../../assets/icon/check.svg'

const SuccesReservation = ({okHandle, theDate}) => {

  return (
    <div className='flex flex-col rounded-2xl bg-white overflow-hidden'>
        <div className="py-3 bg-primary2 text-white font-semibold text-xl justify-center flex">SuccesReservation</div>
        <div className="px-10 flex flex-col pb-7 pt-2 border-2">
          <img src={checkIcon} className='w-36 items-self m-auto py-5'/>
          <div className="py-4 self-start font-semibold">Don&apos;t forget to pick up your book on the <span className='text-primary2 text-lg'>{theDate}</span> at :</div>
          <div className="pb-4 self-start w-96">567 Willow Park Avenue Graha Candi Residence, Blok C2 Singosari Subdistrict Malang City, East Java 65141 Indonesia</div>
          <div className="flex flex-row gap-10 justify-between">
            <div className="w-44"><PrimerButtonSquare name={"Ok"} handle={okHandle}/></div>
          </div>
        </div>
    </div>
  )
}

SuccesReservation.propTypes = {
  okHandle: PropTypes.func.isRequired,
  theDate: PropTypes.string.isRequired,
}

export default SuccesReservation