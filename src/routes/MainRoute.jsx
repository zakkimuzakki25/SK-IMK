import { Route, Routes } from 'react-router-dom'
import Login from '/src/pages/auth/Login'
import Register from '/src/pages/auth/Register'
import Home from '/src/pages/home/Home'
import Profile from '/src/pages/client/profile/Profile'
import { Auth } from './Auth'
import Protected from './Protected'
import Order from '../pages/client/profile/order/Order'
import FavouriteBook from '../pages/client/profile/favourite/FavouriteBook'
import OrderHistory from '../pages/client/profile/order/OrderHistory'
import EBookHistory from '../pages/client/profile/order/EBookHistory'
import FavouriteEBook from '../pages/client/profile/favourite/FavouriteEBook'
import BookDetail from '../pages/content/book/BookDetail'
import EBookDetail from '../pages/content/ebook/EBookDetail'
import SearchBook from '../pages/content/book/SearchBook'
import SearchEBook from '../pages/content/ebook/SearchEBook'
import RecommendationBook from '../pages/content/book/RecommendationBook'
import RecommendationEBook from '../pages/content/ebook/RecommendationEBook'
import Cart from '../pages/cart/Cart'
import About from '../pages/help/About'
import Faq from '../pages/help/FAQ'

const MainRoute = () => {
    return (
            <div>
                <Routes>
                        {/* Auth */}
                        <Route element={<Auth />}>
                            <Route path="/login" element={<Login />} />
                            <Route path="/register" element={<Register />} />
                        </Route>

                        {/* Protected */}
                        <Route element={<Protected />}>
                            <Route path="/user/profile" element={<Profile />} />
                            <Route path="/user/cart" element={<Cart />} />
                            <Route path="/user/order" element={<Order />} />
                            <Route path="/user/order/order-history" element={<OrderHistory />} />
                            <Route path="/user/order/e-book-history" element={<EBookHistory />} />
                            <Route path="/user/favourite" element={<FavouriteBook />} />
                            <Route path="/user/favourite/e-book" element={<FavouriteEBook />} />

                            <Route path="/book/detail" element={<BookDetail />} />
                            <Route path="/book/search/:searchKey" element={<SearchBook />} />
                            <Route path="/book/recommendation" element={<RecommendationBook />} />

                            <Route path="/e-book/detail" element={<EBookDetail />} />
                            <Route path="/e-book/search/:searchKey" element={<SearchEBook />} />
                            <Route path="/e-book/recommendation" element={<RecommendationEBook />} />

                            <Route path="/about" element={<About />} />
                            <Route path="/faq" element={<Faq />} />
                        </Route>

                        {/* General */}
                        <Route path="/" element={<Home />} />

                </Routes>
            
            </div>
    )
}
  
  export default MainRoute