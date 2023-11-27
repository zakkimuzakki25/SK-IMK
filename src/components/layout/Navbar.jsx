import { Link, useLocation } from "react-router-dom"
import Logo from "../../assets/logo/Logo-4.svg"
import SearchIcon from "../../assets/icon/Search.svg"
import FavouriteIcon from "../../assets/icon/Favourite.svg"
import CartIcon from "../../assets/icon/Cart.svg"
import Profile from "../../assets/images/Profile.jpg"
import { useState } from "react"

// eslint-disable-next-line react/prop-types
const Navbar = ({SearchKey}) => {
    const [searchKey, setSearchKey] = useState('')
    const token = window.localStorage.getItem('ftoken')

    const location = useLocation()

    const handleSearch = () => {
        if (searchKey != '') {
            if (location.pathname.includes('e-book')) {
                window.location.href = `/e-book/search/${searchKey}`
            } else {
                window.location.href = `/book/search/${searchKey}`
            }
        }
    }

    return(
        <div className="flex justify-between items-center sticky top-0 pr-8 pl-12 py-4 w-full h-fit bg-primary1 shadow-lg z-50">
            <div className="flex items-center">
                <Link to="/" className='items-start'>
                    <img className='h-14 hover:scale-110 transition-all' src={Logo} alt="Logo Seacrust " />
                </Link>
            </div>

            <div className="flex flex-row gap-5 justify-center">
                <form onSubmit={(e) => { e.preventDefault(); handleSearch()}}>
                    <div className="flex items-start self-stretch rounded-full border-2 border-gray-300 overflow-hidden bg-white py-2 px-2">
                        <button
                        className="flex justify-center w-3 sm:w-8 h-full cursor-pointer items-center focus:outline-none border-none hover:border-none"
                        type="submit"
                        >
                        <img src={SearchIcon} alt="Search Icon" className="w-2 sm:w-5" />
                        </button>
                        <div className="w-28 sm:w-36 md:w-56 lg:w-72 xl:w-96 px-2 text-xxs md:text-base justify-center bg-transparent border-none">
                            <input
                            type="text"
                            id="key"
                            placeholder={SearchKey ? SearchKey : "Search"}
                            className="focus:outline-none w-full"
                            autoComplete="off"
                            required
                            onChange={(e) => setSearchKey(e.target.value)}
                            />
                        </div>
                    </div>
                </form>
                <Link to={"/user/favourite"}>
                    <img src={FavouriteIcon} alt="Search Icon" className="h-full hover:scale-105" />
                </Link>
                <Link to={"/user/cart"}>
                    <img src={CartIcon} alt="Search Icon" className="h-full hover:scale-105" />
                </Link>
            </div>

            <div className="w-fit text-right text-no-underline text-black text-base">
                {token ? (
                <>
                    <Link to='/user/profile' className='flex gap-2 sm:gap-5 items-center self-stretch justify-end'>
                        <div className='text-xxs text-lg font-normal text-right text-white hover:text-teks'>Muhammad Iqbal Muzakki</div>
                        <div className="w-12 h-12 rounded-full overflow-hidden justify-end">
                            <img src={Profile} alt="profile"/>
                        </div>
                    </Link>
                </>
                ) : (
                <>
                    <div className="flex w-fit text-right gap-1 sm:gap-3">
                    <Link to="/login" className='hover:text-teks text-white font-normal text-xxs sm:text-base'>Log In</Link>
                    <div className="text-white">|</div>
                    <Link to="/register" className='hover:text-teks text-white font-normal text-xxs sm:text-base'>Registration</Link>
                    </div>
                </>
                )}
            </div>
        </div>
    )
}

export default Navbar