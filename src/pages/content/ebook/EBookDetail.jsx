import { Link } from "react-router-dom"
import Navbar from "../../../components/layout/Navbar"
import { useState } from "react"
import PrimerButtonSquare from "../../../components/button/square/PrimerButtonSquare"
import favBorder from '../../../assets/icon/fav/fav-border-white.svg'
import favFill from '../../../assets/icon/fav/fav-fill-white.svg'
import WarningButtonSquare from "../../../components/button/square/WarningButtonSquare"

const EBookDetail = () => {
    const [fav, setFav] = useState(false)

    const handleFavClick = () => {
        setFav(!fav)
    }

    const readHandle = () => {
        window.open("https://www.joliet86.org/assets/1/6/Journey_to_stars.pdf", "_blank");
    }

    const downloadHandle = () => {
        window.open("https://www.joliet86.org/assets/1/6/Journey_to_stars.pdf", "_blank");
    }

    return (
        <div className="flex flex-col h-screen w-screen bg-primary2 overflow-hidden">
            <Navbar/>

            {/* content */}
            <div className="flex flex-col px-10 pt-5 gap-5 overflow-hidden">

                <div className="text-white">
                    <Link to={'/e-book/search/business&money'} className="hover:text-teks text-lg">E-Books</Link> {" > "} 
                    <Link to={'/e-book/search/business&money'} className="hover:text-teks text-lg">Business & Money</Link>
                </div>

                <div className="flex flex-row gap-14 pl-5 overflow-hidden">
                    {/* left */}
                    <div className="flex flex-col gap-3">
                        <div className="flex py-5 px-7 w-80 justify-center bg-white border-4">
                            <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/goodnight-stories-children-book-cover-design-template-84ae7dd5e570ea99d81f1185bcc4923d_screen.jpg?ts=1637011941" className="h-full shadow-md shadow-black" />
                        </div>
                        <div className="flex flex-col author gap-2">
                            <div className="text-white font-semibold">Author:</div>
                            <div className="text-3xl text-white">Stuart Clark</div>
                        </div>
                    </div>

                    {/* right */}
                    <div className="flex flex-col gap-2 overflow-y-auto pr-10 pb-5">
                        <div className="text-white px-1 text-5xl">Journey to the Stars</div>
                        <div className="text-white px-1 text-4xl">2000</div>
                        <div className="text-teks px-1 text-2xl">by <span className="text-white ">Stuart Clark</span> (Author)</div>
                        <button className="w-fit" onClick={handleFavClick}>
                            {fav ? <img src={favFill} alt="Favorited" className="h-10"/> : <img src={favBorder} alt="Not Favorited" className="h-10"/>}
                        </button>
                        <div className="p-3 border bg-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sagittis eu volutpat odio facilisis mauris sit. Purus gravida quis blandit turpis cursus. Nulla porttitor massa id neque. Enim praesent elementum facilisis leo. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt. Leo a diam sollicitudin tempor id. Nunc congue nisi vitae suscipit tellus mauris.</div>

                        <div className="flex flex-col gap-1 bg-white p-5 sticky h-fit w-60 mt-1">
                            <div className="text-lg">Read Now</div>
                            <div className="flex flex-col gap-3 mt-2">
                                <WarningButtonSquare name={"Download PDF"} handle={downloadHandle}/>
                                <PrimerButtonSquare name={"Read"} handle={readHandle}/>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default EBookDetail