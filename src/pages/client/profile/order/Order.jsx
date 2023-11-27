// import ProfileIMG from "../../../assets/images/Profile.jpg"
// import OtherButtonSquare from "../../../components/button/square/OtherButtonSquare"
// import PrimerButtonSquare from "../../../components/button/square/PrimerButtonSquare"
// import WarningButtonSquare from "../../../components/button/square/WarningButtonSquare"
// import BarInfoSquare from "../../../components/input/BarInfoSquare"
import borrowedBook from '../../../../data/profile/BookBorrowed.json'
import Navbar from '../../../../components/layout/Navbar'
import DataSideOrder from "../../../../data/profile/SideOrder.json"
import SideBarProfile from "../../../../components/layout/SideBarProfile"
import { Link, useLocation } from "react-router-dom"
import BorrowBookCard from '../../../../components/card/BorrowBookCard'

const Order = () => {
    let loc = useLocation()

    return (
        <div className="flex flex-col h-screen w-screen bg-backgroundlinear overflow-hidden">
            <Navbar />

            <div className="flex flex-row h-full">
                {/* SideBar */}
                <SideBarProfile />

                {/* content left*/}
                <div className="flex flex-col py-10 px-12 w-fit pb-32 gap-10">
                    {DataSideOrder.map((list, index) => {
                        return (
                        <Link
                            key={index}
                            to={list.path}
                            className={`${
                                loc.pathname === list.path ? "cursor-default border-primary1 text-primary1" : "hover:border-teks text-gray-600 hover:text-teks"
                            } bg-white flex flex-row text-xl gap-2 py-3 px-10 border-2 border-gray-300 w-60 justify-center`}
                        >
                            <div className="self-center">{list.name}</div>
                        </Link>
                        );
                    })}
                </div>

                {/* content right*/}
                <div className="flex flex-wrap py-10 pb-32 gap-5 overflow-y-auto pr-5">
                    {borrowedBook.map((e) => (
                        <BorrowBookCard key={e.id} title={e.title} pic={e.pic} rate={e.rate} tot_review={e.tot_review} />
                    ))}
                </div>
                
            </div>
        </div>
    )
}

export default Order