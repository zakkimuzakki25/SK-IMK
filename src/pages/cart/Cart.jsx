import { useState } from "react"
import BookDatas from '../../data/home/Book.json'
import Navbar from "../../components/layout/Navbar"
import BookCartCard from "../../components/card/BookCartCard"
import PrimerButtonSquare from "../../components/button/square/PrimerButtonSquare"
import Confirmation from "../../components/popup/Confirmation"
import Succes from "../../components/popup/Succes"

const Cart = () => {
    const [borrowClicked, setBorrowClicked] = useState(false)
    const [clickedYesBorrow, setClickedYesBorrow] = useState(false)
    const books = BookDatas.slice(0, 5)

    const [list, setList] = useState([])

    const handleCheck = (value) => {
        if (!list.includes(value)) {
            setList([...list, value])
        } else {
            setList(list.filter((item) => item !== value))
        }
    }

    const yesBorrowHandle = () => {
        setBorrowClicked(false)
        setClickedYesBorrow(true)
    }

    const noHandle = () => {
        setBorrowClicked(false)
        setClickedYesBorrow(false)
    }

    const borrowHandle = () => {
        setBorrowClicked(true)
    }

    return (
        <div className="flex flex-col h-screen w-screen bg-backgroundlinear overflow-hidden">
            <Navbar/>
            
            {/* content */}
            <div className="overflow-y-auto flex flex-row">
                {/* side */}
                <div className="flex flex-col py-6 px-8 gap-4 h-fit sticky bottom-0 w-fit">
                    <div className="text-3xl text-teks">FILTER</div>
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

                {/* list */}
                <div className="flex flex-col gap-7 py-12 px-3">
                    {books.map((e) => (
                        <BookCartCard key={e.id} title={e.title} pic={e.pic} rate={e.rate} tot_review={e.tot_review} handle={handleCheck}/>
                    ))}
                </div>

                {/* summary */}
                <div className="flex flex-col bg-white border-2 shadow-lg my-12 rounded-md px-5 py-3 mx-10 h-fit gap-3 sticky top-0">
                    <div className="text-xl text-teks border-b-2 pb-1">Summary</div>
                    <div className="pb-3">
                        {list.length > 0 ? list.map((e, i) => (
                            <div className="" key={i}>{i+1}. {e}</div>
                        )) : (
                            <div className="px-5 py2 my-10 self-center m-auto w-fit font-bold text-opacity-60 text-teks">Harap pilih buku terlebih dahulu</div>
                        )}
                    </div>
                    <div className="border-t-2 py-2">Tanggal Pengembalian Buku dan detail informasi lainnya akan dikirimkan ke email akun anda. Jika rusak atau hilang, maka akan dikenakan denda sesuai dengan S&K yang berlaku</div>
                    <div className="datetime"></div>
                    {list.length > 0 && (<PrimerButtonSquare name={"Borrow"} handle={borrowHandle}/>)}
                </div>
            </div>
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
        </div>
    )
}

export default Cart