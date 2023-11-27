import PrimerButtonRounded from "../button/rounded/PrimerButtonRounded"
import OtherButtonRounded from "../button/rounded/OtherButtonRounded"
import PropTypes from 'prop-types'
import Rating from '@mui/material/Rating'
import { Link } from "react-router-dom"
import { useState } from "react"
import ReturnInfo from "../popup/ReturnInfo"
import RenewConfirmation from "../popup/RenewConfirmation"
import SuccesRenewing from "../popup/SuccesRenewing"

const BorrowBookCard = ({pic, title, rate, tot_review}) => {
    const [returnClicked, setReturnClicked] = useState(false)
    const [renewClicked, setRenewClicked] = useState(false)
    const [renewYes, setRenewYes] = useState(false)

    const returnHandle = () => {
        setReturnClicked(true)
    }

    const renewHandle = () => {
        setRenewClicked(true)
    }

    const yesHandleRenew = () => {
        setRenewYes(true)
    }

    const okHandle = () => {
        setReturnClicked(false)
        setRenewClicked(false)
        setRenewYes(false)
    }

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
            <div className="flex-row flex gap-2">
                <div className="w-full flex"><OtherButtonRounded name={"renew"} handle={renewHandle}/></div>
                <div className="w-full flex"><PrimerButtonRounded name={"return"} handle={returnHandle}/></div>
            </div>
            {/* return */}
            {returnClicked && (
                <div className="fixed bg-white bg-opacity-50 w-screen h-screen z-50 top-0 right-0 left-0 bottom-0 justify-center flex items-center">
                    <ReturnInfo okHandle={okHandle} />
                </div>
            )}
            {/* renew */}
            {renewClicked && (
                <div className="fixed bg-white bg-opacity-50 w-screen h-screen z-50 top-0 right-0 left-0 bottom-0 justify-center flex items-center">
                    <RenewConfirmation noHandle={okHandle} yesHandle={yesHandleRenew}/>
                </div>
            )}
            {renewYes && (
                <div className="fixed bg-white bg-opacity-50 w-screen h-screen z-50 top-0 right-0 left-0 bottom-0 justify-center flex items-center">
                    <SuccesRenewing okHandle={okHandle}/>
                </div>
            )}
        </div>
    )
}

BorrowBookCard.propTypes = {
    pic: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    rate: PropTypes.number.isRequired,
    tot_review: PropTypes.number.isRequired,
}

export default BorrowBookCard