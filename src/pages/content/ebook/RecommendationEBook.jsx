import { Link, useParams } from "react-router-dom"
import Navbar from "../../../components/layout/Navbar"
import { useState } from "react"
import EBookCard from "../../../components/card/EBookCard"
import Books from "../../../data/home/EBook.json"
import EBookImage from "../../../assets/images/home/ilustrasi-ebook.svg"

// eslint-disable-next-line react/prop-types
const RecommendationEBook = () => {
    const { searchKey } = useParams()

    const [sortAlfabet, setSortAlfabet] = useState(false)
    const sortAlfabetHandle = () => {
        setSortAlfabet(!sortAlfabet)
    }

    const [sortTerlaris, setSortTerlaris] = useState(false)
    const sortTerlarisHandle = () => {
        setSortTerlaris(!sortTerlaris)
    }

    const [sortTerbaru, setSortTerbaru] = useState(false)
    const sortTerbaruHandle = () => {
        setSortTerbaru(!sortTerbaru)
    }

    const [sortRating, setSortRating] = useState(false)
    const sortRatingHandle = () => {
        setSortRating(!sortRating)
    }

    return (
        <div className="flex flex-col h-screen w-screen bg-primary2 overflow-hidden">
            <Navbar SearchKey={searchKey}/>

            {/* content */}
            <div className="flex flex-row overflow-auto h-full">
                {/* side */}
                <div className="flex flex-col py-6 px-8 gap-4 h-fit sticky bottom-0">
                    <div className="text-3xl text-white">FILTER</div>
                    <div className="bg-white p-5 border-2 rounded-lg border-gray-400 w-44 gap-2      flex flex-col">
                        <div className="text-lg ">Jenis Buku</div>
                        <div className="flex flex-col">
                            <label className="flex flex-row gap-2 hover:text-primary2">
                                <input type="checkbox" value="fiction" />
                                Fiction
                            </label>
                            <label className="flex flex-row gap-2 hover:text-primary2">
                                <input type="checkbox" value="nonfiction" />
                                Non-Fiction
                            </label>
                            <label className="flex flex-row gap-2 hover:text-primary2">
                                <input type="checkbox" value="art" />
                                Art
                            </label>
                            <label className="flex flex-row gap-2 hover:text-primary2">
                                <input type="checkbox" value="selfhelp" />
                                Self-Help
                            </label>
                            <label className="flex flex-row gap-2 hover:text-primary2">
                                <input type="checkbox" value="technology" />
                                Technology
                            </label>
                        </div>
                    </div>

                    {/* Nama Pengarang */}
                    <div className="bg-white p-5 border-2 rounded-lg border-gray-400 w-44 gap-2      flex flex-col">
                        <div className="text-lg ">Nama Pengarang</div>
                        <div className="filter-options">
                            <label className="flex flex-row gap-2 hover:text-primary2">
                                <input type="checkbox" value="author1" />
                                Stuart Clark
                            </label>
                            <label className="flex flex-row gap-2 hover:text-primary2">
                                <input type="checkbox" value="author2" />
                                F. Scott Fitzgerald
                            </label>
                            <label className="flex flex-row gap-2 hover:text-primary2">
                                <input type="checkbox" value="author3" />
                                Raditya Dika
                            </label>
                        </div>
                    </div>

                    {/* Tahun Terbit */}
                    <div className="bg-white p-5 border-2 rounded-lg border-gray-400 w-44 gap-2      flex flex-col">
                        <div className="text-lg ">Tahun Terbit</div>
                        <div className="filter-options">
                            <label className="flex flex-row gap-2 hover:text-primary2">
                                <input type="checkbox" value="2010" />
                                2010
                            </label>
                            <label className="flex flex-row gap-2 hover:text-primary2">
                                <input type="checkbox" value="2015" />
                                2015
                            </label>
                            <label className="flex flex-row gap-2 hover:text-primary2">
                                <input type="checkbox" value="2020" />
                                2020
                            </label>
                        </div>
                    </div>

                    {/* Genre Buku */}
                    <div className="bg-white p-5 border-2 rounded-lg border-gray-400 w-44 gap-2      flex flex-col">
                        <div className="text-lg ">Genre Buku</div>
                        <div className="filter-options">
                            <label className="flex flex-row gap-2 hover:text-primary2">
                                <input type="checkbox" value="fantasy" />
                                Fantasy
                            </label>
                            <label className="flex flex-row gap-2 hover:text-primary2">
                                <input type="checkbox" value="mystery" />
                                Mystery
                            </label>
                            <label className="flex flex-row gap-2 hover:text-primary2">
                                <input type="checkbox" value="thriller" />
                                Thriller
                            </label>
                            <label className="flex flex-row gap-2 hover:text-primary2">
                                <input type="checkbox" value="romance" />
                                Romance
                            </label>
                        </div>
                    </div>
                </div>
                
                {/* book section */}
                <div className="flex flex-col p-7 sticky gap-2">
                    <div className="gap-4 flex flex-col px-2">
                        <div className="flex flex-row h-fit items-center">
                            <img className="h-48 mb-3 object-contain" src={EBookImage} />
                            <div className="flex flex-col gap-2 " style={{paddingLeft: "72px", paddingRight: "72px"}}>
                                <div className="text-white text-4xl">E-Book</div>
                                <div className="text-white text-md">Make it Easy, Membaca semakin mudah. Baca buku, Di mana pun, kapan pun dengan nyaman. Dapatkan kumpulan E-Books terbaik dan nikmati kemudahan membaca dengan fitur yang menyenangkan. Jadi, what do you waiting for? Go!</div>
                            </div>
                        </div>
                        <div className="flex flex-row gap-2">
                            <div className="text-xl mr-3 text-white">Urutkan</div>
                            <button className={`${
                                sortAlfabet ? "bg-accent text-white" : "bg-white"
                            } px-5 py-1 border-2 rounded-sm border-accent text-sm`} onClick={sortAlfabetHandle}>
                                A-Z
                            </button>
                            <button className={`${
                                sortTerlaris ? "bg-accent text-white" : "bg-white"
                            } px-5 py-1 border-2 rounded-sm border-accent text-sm`} onClick={sortTerlarisHandle}>
                                Terlaris
                            </button>
                            <button className={`${
                                sortTerbaru ? "bg-accent text-white" : "bg-white"
                            } px-5 py-1 border-2 rounded-sm border-accent text-sm`} onClick={sortTerbaruHandle}>
                                Terbaru
                            </button>
                            <button className={`${
                                sortRating ? "bg-accent text-white" : "bg-white"
                            } px-5 py-1 border-2 rounded-sm border-accent text-sm`} onClick={sortRatingHandle}>
                                Rating
                            </button>
                            <div className="flex flex-row justify-center mr-16 items-center text-white">atau<Link className="ml-2 text-xl text-white hover:text-teks" to={`/book/recommendation`}>Book</Link></div>
                        </div>
                    </div>

                    {/* Books */}
                    <div className="flex flex-wrap gap-5 py-3">
                        {Books.map((e) => (
                            <EBookCard key={e.id} title={e.title} pic={e.pic} rate={e.rate} tot_review={e.tot_review} />
                        ))}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default RecommendationEBook