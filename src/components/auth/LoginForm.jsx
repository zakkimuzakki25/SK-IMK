import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Input from "../input/Input"
import PrimerButton from "../button/PrimerButton"

const LoginForm = () => {
    const nav = useNavigate()

    const [message, setMessage] = useState('')

    const handleLogin = () => {
        nav('/')
    }

    return (
        <form onSubmit={handleLogin}>
        <div className="flex px-8 sm:px-11 py-12 flex-col items-center gap-3 rounded-3xl">
            <div className='flex items-end self-stretch text-2xl sm:text-4xl font-bold text-black pb-2'>Log In</div>
            <Input
                textLabel={"Username/Email"}
                type="text"
                id="username"
                holder="Enter your email here"
            />
            <Input
                textLabel="Password"
                type="password"
                id="password"
                holder="Enter your password here"
            />
            <div className="flex flex-col px-2  self-stretch">
            <Link to="" className="text-black text-xxs sm:text-sm font-inter font-medium sm:leading-5 hover:text-palleteSubmitHover self-stretch text-right pb-3" >
                Forget password?
            </Link>
            </div>
            <PrimerButton 
            name="LogIn"
            />
            <div className="flex items-center gap-1 sm:gap-2 self-stretch">
            <div className="flex-grow h-0.5 bg-black mx-2"></div> 
            <div className="text-xs sm:text-xs text-black">Or</div> 
            <div className="flex-grow h-0.5 bg-black mx-2"></div> 
            </div>
                <div className="w-full text-black text-xs sm:text-sm font-semibold px-2">Don't have membership? <Link to="/register" className='text-accent font-bold hover:text-palleteSubmitHover'>Registration</Link></div>
            </div>
        </form>
    )
}

export default LoginForm
