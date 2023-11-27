import { Link } from "react-router-dom"
import Navbar from "../../../components/layout/Navbar"
import { Rating } from "@mui/material"
import { useEffect, useState } from "react"
import PrimerBlueButtonSquare from "../../../components/button/square/PrimerBlueButtonSquare"
import PrimerButtonSquare from "../../../components/button/square/PrimerButtonSquare"
import favBorder from '../../../assets/icon/fav/fav-border.svg'
import favFill from '../../../assets/icon/fav/fav-fill.svg'

const BookDetail = () => {
    const [returnDate, setReturnDate] = useState("")
    const [returnTime, setReturnTime] = useState("")
    const [fav, setFav] = useState(false)

    const handleFavClick = () => {
        setFav(!fav)
    }

    useEffect(() => {
        const currentDate = new Date()
        const returnDate = new Date(currentDate.getTime() + 7 * 24 * 60 * 60 * 1000)
        const formattedDate = `${returnDate.getDate()} ${returnDate.toLocaleString('default', { month: 'long' })} ${returnDate.getFullYear()}`
        const formattedTime = `${returnDate.getHours()}:${returnDate.getMinutes()}:${returnDate.getSeconds()}`
        setReturnDate(formattedDate)
        setReturnTime(formattedTime)
    }, [])

    return (
        <div className="flex flex-col h-screen w-screen bg-backgroundlinear overflow-hidden">
            <Navbar/>

            {/* content */}
            <div className="flex flex-col px-10 pt-5 gap-5 overflow-hidden">

                <div className="rute">
                    <Link to={'/book/search/business&money'} className="hover:text-primary1 text-lg">Books</Link> {" > "} 
                    <Link to={'/book/search/business&money'} className="hover:text-primary1 text-lg">Business & Money</Link>
                </div>

                <div className="flex flex-row gap-14 pl-5 overflow-hidden">
                    {/* left */}
                    <div className="flex flex-col gap-3">
                        <div className="flex py-5 px-7 w-80 justify-center bg-backgroundsolid border-4">
                            <img src="/src/assets/images/books/Book3.webp" className="h-full shadow-md shadow-black" />
                        </div>
                        <div className="flex flex-col author gap-2">
                            <div className="font-semibold">Author:</div>
                            <div className="text-3xl text-primary1">F. Scott Fitzgerald</div>
                        </div>
                    </div>

                    {/* right */}
                    <div className="flex flex-col gap-2 overflow-y-auto pr-10 pb-5">
                        <div className="px-1 text-5xl">The Great Gatsby</div>
                        <div className="px-1 text-4xl text-gray-500">2020</div>
                        <div className="px-1 text-2xl">by <span className="text-primary2 font-semibold">F. Scott Fitzgerald</span> (Author)</div>
                        <div className="flex flex-row gap-5 items-center">
                            <div className="flex flex-row gap-3">
                                <Rating size="large" value={4.5} precision={0.5} readOnly />
                                <div className="text-accent text-2xl">{4.5} <span className="text-teks text-lg">({851})</span></div>
                            </div>
                            <button className="mr-10" onClick={handleFavClick}>
                                {fav ? <img src={favFill} alt="Favorited" className="h-10"/> : <img src={favBorder} alt="Not Favorited" className="h-10"/>}
                            </button>
                        </div>
                        <div className="p-3 bg-opacity-50 border bg-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sagittis eu volutpat odio facilisis mauris sit. Purus gravida quis blandit turpis cursus. Nulla porttitor massa id neque. Enim praesent elementum facilisis leo. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt. Leo a diam sollicitudin tempor id. Nunc congue nisi vitae suscipit tellus mauris.</div>

                        <div className="flex flex-row gap-3 border">
                            <div className="flex flex-col gap-2 bg-white bg-opacity-50 p-5">
                                <div className="a">Penilaian Buku</div>
                                <div className="flex flex-row gap-3">
                                    <Rating size="small" value={4.5} precision={0.5} readOnly />
                                    <div className="text-accent text-base">{4.5} <span className="text-teks text-xs">({851})</span></div>
                                </div>

                                <div className="comment">
                                    <div className="text-primary1">@jonathan</div>
                                    <div className="b">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sagittis eu volutpat odio facilisis mauris sit. Purus gravida quis blandit turpis cursus. Nulla porttitor massa id neque. </div>
                                </div>

                                <div className="comment">
                                    <div className="text-primary1">@afasingra12</div>
                                    <div className="b">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sagittis eu volutpat odio facilisis mauris sit. Purus gravida quis blandit turpis cursus. Nulla porttitor massa id neque. </div>
                                </div>

                                <div className="comment">
                                    <div className="text-primary1">@ethanxier</div>
                                    <div className="b">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sagittis eu volutpat odio facilisis mauris sit. Purus gravida quis blandit turpis cursus. Nulla porttitor massa id neque. </div>
                                </div>
                            </div>

                            <div className="flex flex-col gap-1 bg-white bg-opacity-50 p-5 w-full sticky h-fit">
                                <div className="text-lg">Borrow Now</div>
                                <div className="text-red-600 text-lg">Hanya 1 lagi</div>
                                <div className="w-full bg-gray-400 my-1" style={{height: "1px"}}></div>
                                <div className="text-gray-600">
                                    <div className="text">Tanggal dan Jam Pengembalian :</div>
                                    <div className="hari">{returnDate}</div>
                                    <div className="jam">{returnTime}</div>
                                </div>
                                <div className="flex flex-col gap-3 mt-2">
                                    <PrimerButtonSquare name={"Borrow"}/>
                                    <PrimerBlueButtonSquare name={"Reservation"}/>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default BookDetail