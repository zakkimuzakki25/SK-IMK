import PrimerBlueButtonRounded from "../button/rounded/PrimerBlueButtonRounded"
import PropTypes from 'prop-types'
import Rating from '@mui/material/Rating'
import { Link } from "react-router-dom"

const BookCard = ({pic, title, rate, tot_review}) => {

    return (
        <div className="flex flex-col p-5 gap-2 border border-zinc-300 rounded-md shadow-lg bg-white">
            <Link to={'/book/detail'} className="flex py-5 w-52 h-64 overflow-hidden justify-center bg-backgroundsolid hover:bg-primary2 hover:bg-opacity-80 hover:py-4 transition-all">
                <img src={pic} className="h-full shadow-md shadow-black" />
            </Link>
            <h1 className="text-lg w-52 flex-1">{title}</h1>
            <div className="flex flex-row justify-between">
                <Rating value={rate} precision={0.5} readOnly />
                <div className="text-accent text-lg">{rate} <span className="text-teks text-sm">({tot_review})</span></div>
            </div>
            <PrimerBlueButtonRounded name={"Rate"}/>
        </div>
    )
}

BookCard.propTypes = {
    pic: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    rate: PropTypes.number.isRequired,
    tot_review: PropTypes.number.isRequired,
}

export default BookCard