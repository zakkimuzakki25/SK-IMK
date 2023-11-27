import PropTypes from 'prop-types'
import Rating from '@mui/material/Rating'
import { Link } from "react-router-dom"
import { useState } from 'react'

const BookCartCard = ({pic, title, rate, tot_review, handle}) => {
    const [isChecked, setIsChecked] = useState(false)

    const toggleCheck = () => {
        setIsChecked(!isChecked)
        handle(title)
    }

    return (
        <div className="flex flex-row p-5 gap-6 border border-zinc-300 rounded-md shadow-lg bg-white w-fit">
            <Link to={"/book/detail"} className="flex py-5 w-40 h-48 overflow-hidden justify-center bg-backgroundsolid hover:bg-primary2 hover:bg-opacity-80 hover:py-4 transition-all">
                <img src={pic} className="h-full shadow-md shadow-black" />
            </Link>
            <div className="flex flex-col gap-2 py-2">
                <h1 className="text-lg w-52">{title}</h1>
                <div className="flex flex-row gap-5 w-56">
                    <Rating value={rate} precision={0.5} readOnly />
                    <div className="text-accent text-lg">{rate} <span className="text-teks text-sm">({tot_review})</span></div>
                </div>
                <div className="text-red-600 text-base">Sisa 1</div>
            </div>
            
            <div className="h-full border-l-2 flex pl-4 justify-center items-center">
                {/* checkbox */}
                <input
                    type="checkbox"
                    style={{ width: '20px', height: '20px' }}
                    className="custom-checkbox"
                    checked={isChecked}
                    onChange={toggleCheck}
                />
            </div>
        </div>
    )
}

BookCartCard.propTypes = {
    pic: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    rate: PropTypes.number.isRequired,
    tot_review: PropTypes.number.isRequired,
    handle: PropTypes.func.isRequired,
}

export default BookCartCard