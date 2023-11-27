import Navbar from "../../components/layout/Navbar"
import Footer from "../../components/layout/Footer"
import BookImage from "../../assets/images/home/ilustrasi-buku.png"
import EBookImage from "../../assets/images/home/ilustrasi-ebook.svg"
import BookDatas from "../../data/home/Book.json"
import EBookDatas from "../../data/home/EBook.json"
import BookCard from "../../components/card/BookCard"
import CS from "../../assets/icon/CS.svg"
import EBookCard from "../../components/card/EBookCard"
import { Link } from "react-router-dom"

const Home = () => {
    const recommendedBooks = BookDatas.slice(0, 5)
    const recommendedEBooks = EBookDatas.slice(0, 5)
    
    return (
        <div className="overflow-hidden flex flex-col w-screen h-screen">
            <Navbar />
            
            <div className="flex flex-col overflow-y-auto">
                {/* Book */}
                <div className="flex flex-col bg-backgroundlinear pb-10">
                    <div className="flex flex-row h-fit items-center">
                        <div className="flex flex-col gap-2 py-24" style={{paddingLeft: "72px", paddingRight: "72px"}}>
                            <div className="text-accent text-5xl">NGALAAM LIBRARY</div>
                            <div className="text-primary1 text-2xl">Ngalaam Library kini hadir dengan online services. Di mana pun kamu berada, Ngalaam selalu hadir untuk menghubungkan dan merekomendasikan berbagai buku kepadamu. Jadilah pribadi yang kreatif dan inovatif. Telusuri dan temukan bacaan yang kamu inginkan. Reserve or Borrow it now!</div>
                        </div>
                        <img className="h-80 my-8 mr-24 object-contain" src={BookImage} />
                    </div>
                    <div className="flex flex-col gap-6 py-6 px-6">
                        <div className="flex flex-row justify-between px-12">
                            <div className="text-4xl">Recommendation</div>
                            <Link className="text-3xl text-accent hover:text-black" to={'book/recommendation'}>All</Link>
                        </div>
                        <div className="flex flex-row gap-7 px-6 py-3">
                            {recommendedBooks.map((e) => (
                                <BookCard key={e.id} title={e.title} pic={e.pic} rate={e.rate} tot_review={e.tot_review} />
                            ))}
                        </div>
                    </div>
                </div>

                {/* E-Book */}
                <div className="flex flex-col bg-primary2 py-10">
                    <div className="flex flex-row h-fit items-center">
                        <img className="h-80 my-8 ml-24 object-contain" src={EBookImage} />
                        <div className="flex flex-col gap-2 py-24" style={{paddingLeft: "72px", paddingRight: "72px"}}>
                            <div className="text-white text-5xl">E-Book</div>
                            <div className="text-white text-2xl">Make it Easy, Membaca semakin mudah. Baca buku, Di mana pun, kapan pun dengan nyaman. Dapatkan kumpulan E-Books terbaik dan nikmati kemudahan membaca dengan fitur yang menyenangkan. Jadi, what do you waiting for? Go!</div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-6 py-6 px-6">
                        <div className="flex flex-row justify-between px-12 text-white">
                            <div className="text-4xl">Recommendation</div>
                            <Link className="text-3xl text-white hover:text-black" to={'e-book/recommendation'}>All</Link>
                        </div>
                        <div className="flex flex-row gap-7 px-6 py-3">
                            {recommendedEBooks.map((e) => (
                                <EBookCard key={e.id} title={e.title} pic={e.pic} rate={e.rate} tot_review={e.tot_review} />
                            ))}
                        </div>
                    </div>
                </div>

                <Footer />
            </div>

            <Link to={'/about'} className="fixed bottom-5 right-6 hover:cursor-pointer rounded-full hover:bottom-7 transition-all shadow-sm hover:shadow-black">
                <img src={CS} alt="cs button w-full" />
            </Link>
        </div>
    )
}
  
export default Home
  