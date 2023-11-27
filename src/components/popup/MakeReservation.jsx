import OtherButtonSquare from '../button/square/OtherButtonSquare'
import PrimerButtonSquare from '../button/square/PrimerButtonSquare'
import PropTypes from 'prop-types'
import { useState } from 'react'

const MakeReservation = ({ cancelHandle, nextHandle, setDate }) => {
  const [selectedDate, setSelectedDate] = useState('')

  const handleDateChange = (event) => {
    const date = event.target.value
    setSelectedDate(date)
    setDate(date)
  };

  return (
    <div className='flex flex-col rounded-2xl bg-white overflow-hidden'>
      <div className="py-3 bg-primary2 text-white font-semibold text-xl justify-center flex">Choose your reservation date</div>
      <div className="px-10 flex flex-col justify-center pb-5 pt-2 border-2">
        {/* box calendar */}
        <div className="py-4 self-start font-semibold">Select Date:</div>
        <input
          type="date"
          value={selectedDate}
          onChange={handleDateChange}
          className="border rounded p-2 mb-5"
        />
        <div className="flex flex-row gap-3">
          <div className="w-60"><OtherButtonSquare name={"Cancel"} handle={cancelHandle}/></div>
          <div className="w-60"><PrimerButtonSquare name={"Next"} handle={nextHandle}/></div>
        </div>
      </div>
    </div>
  )
}

MakeReservation.propTypes = {
  cancelHandle: PropTypes.func.isRequired,
  nextHandle: PropTypes.func.isRequired,
  setDate: PropTypes.func.isRequired
}

export default MakeReservation
