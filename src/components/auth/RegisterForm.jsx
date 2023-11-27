import { Link, useNavigate } from 'react-router-dom'
import Input from "../input/InputRounded"
import PrimerButton from "../button/rounded/PrimerButtonRounded"

const RegisterForm = () => {
    const nav = useNavigate()

    const handleRegister = () => {
        window.localStorage.setItem("ftoken", "faketoken")
        nav("/login")
    }

    return (
        <form onSubmit={handleRegister}>
        <div className="flex px-8 flex-col items-center gap-3 rounded-3xl">
            <div className='flex items-end self-stretch text-2xl sm:text-4xl font-bold text-black pb-2'>Member Registration</div>
            <Input
                textLabel={"Fullname"}
                type="text"
                id="fullname"
                holder="Enter your fullname here"
            />
            <Input
                textLabel={"Username"}
                type="text"
                id="username"
                holder="Enter your username here"
            />
            <Input
                textLabel={"Email"}
                type="text"
                id="email"
                holder="Enter your email here"
            />
            <Input
                textLabel={"Address in Malang"}
                type="text"
                id="address"
                holder="Enter your address here"
            />
            <Input
                textLabel="Password"
                type="password"
                id="password"
                holder="Enter your password here"
            />
            <PrimerButton 
            name="Registration"
            />
            <div className="flex items-center gap-1 sm:gap-2 self-stretch">
            <div className="flex-grow h-0.5 bg-black mx-2"></div> 
            <div className="text-xs sm:text-xs text-black">Or</div> 
            <div className="flex-grow h-0.5 bg-black mx-2"></div> 
            </div>
                <div className="w-full text-black text-xs sm:text-sm font-semibold px-2">Have a membership? <Link to="/login" className='text-accent font-bold hover:text-palleteSubmitHover'>Log In</Link></div>
            </div>
        </form>
    )
}

export default RegisterForm
