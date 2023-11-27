import PrimerButtonRounded from "../button/rounded/PrimerButtonRounded"
import OtherButtonRounded from "../button/rounded/OtherButtonRounded"
import PropTypes from 'prop-types'
import Rating from '@mui/material/Rating'
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import Confirmation from "../popup/Confirmation"
import Succes from "../popup/Succes"
import MakeReservation from "../popup/MakeReservation"
import SuccesReservation from "../popup/SuccesReservation"

const BookCard = ({pic, title, rate, tot_review}) => {
    const ftoken = window.localStorage.getItem('ftoken')
    const nav = useNavigate()

    const [selectedDate, setSelectedDate] = useState('')
    const [borrowClicked, setBorrowClicked] = useState(false)
    const [clickedYesBorrow, setClickedYesBorrow] = useState(false)
    const [resClicked, setResClicked] = useState(false)
    const [clickedYesRes, setClickedYesRes] = useState(false)
    const [nextRes, setNextRes] = useState(false)

    const borrowHandle = () => {
        if (ftoken != '') {
            setBorrowClicked(true)
        } else {
            nav('/book/detail')
        }
    }

    const resHandle = () => {
        if (ftoken != '') {
            setResClicked(true)
        } else {
            nav('/book/detail')
        }
    }

    const yesBorrowHandle = () => {
        setBorrowClicked(false)
        setClickedYesBorrow(true)
    }

    const yesResHandle = () => {
        setResClicked(false)
        setClickedYesRes(true)
    }

    const nextHandleRes = () => {
        setClickedYesRes(false)
        setNextRes(true)
    }

    const noHandle = () => {
        setBorrowClicked(false)
        setResClicked(false)
        setClickedYesBorrow(false)
        setClickedYesRes(false)
        setNextRes(false)
    }

    return (
        <div className="flex flex-col p-5 gap-2 border border-zinc-300 rounded-md shadow-lg bg-white">
            <Link to={"/book/detail"} className="flex py-5 w-52 h-64 overflow-hidden justify-center bg-backgroundsolid hover:bg-primary2 hover:bg-opacity-80 hover:py-4 transition-all">
                <img src={pic} className="h-full shadow-md shadow-black" />
            </Link>
            <h1 className="text-lg w-52 flex-1">{title}</h1>
            <div className="flex flex-row justify-between">
                <Rating value={rate} precision={0.5} readOnly />
                <div className="text-accent text-lg">{rate} <span className="text-teks text-sm">({tot_review})</span></div>
            </div>
            <OtherButtonRounded name={"reservation"} handle={resHandle}/>
            <PrimerButtonRounded name={"borrow"} handle={borrowHandle}/>

            {borrowClicked && (
                <div className="fixed bg-white bg-opacity-50 w-screen h-screen z-50 top-0 right-0 left-0 bottom-0 justify-center flex items-center">
                    <Confirmation noHandle={noHandle} yesHandle={yesBorrowHandle}/>
                </div>
            )}
            {clickedYesBorrow && (
                <div className="fixed bg-white bg-opacity-50 w-screen h-screen z-50 top-0 right-0 left-0 bottom-0 justify-center flex items-center">
                    <Succes okHandle={noHandle}/>
                </div>
            )}

            {/* reservation */}
            {resClicked && (
                <div className="fixed bg-white bg-opacity-50 w-screen h-screen z-50 top-0 right-0 left-0 bottom-0 justify-center flex items-center">
                    <Confirmation noHandle={noHandle} yesHandle={yesResHandle}/>
                </div>
            )}
            {clickedYesRes && (
                <div className="fixed bg-white bg-opacity-50 w-screen h-screen z-50 top-0 right-0 left-0 bottom-0 justify-center flex items-center">
                    <MakeReservation nextHandle={nextHandleRes} cancelHandle={noHandle} setDate={setSelectedDate}/>
                </div>
            )}
            {nextRes && (
                <div className="fixed bg-white bg-opacity-50 w-screen h-screen z-50 top-0 right-0 left-0 bottom-0 justify-center flex items-center">
                    <SuccesReservation okHandle={noHandle} theDate={selectedDate}/>
                </div>
            )}
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