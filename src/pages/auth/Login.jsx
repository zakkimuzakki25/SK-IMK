import { Link } from 'react-router-dom'
import Logo from '../../assets/logo/Logo-1.svg'
import LoginForm from '../../components/auth/LoginForm'
// import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div className="flex flex-col justify-center items-center py-12 bg-backgroundlinear h-screen w-screen overflow-hidden">
            <div className="pb-10 px-3">
                <Link to="/"><img className='h-20 hover:scale-105 transition-all' src={Logo} alt="Logo Seacrust"/></Link>
            </div>
            <div className="flex flex-row w-full gap-16 justify-center">
                <div className="bg-bgAuth bg-cover border shadow-xl" style={
                    {
                        width: '25%',
                        height: '100%',
                        backgroundPositionX: '-120px',
                    }
                }>
                    <div className="flex h-full w-full text-4xl font-semibold text-white justify-center items-center text-center shadow-slate-600 shadow-2xl bg-backgroundlinear3 p-5 hover:cursor-default" style={{
                        wordSpacing: '2px',
                        letterSpacing: '2px'
                    }}>Your passport to endless adventures</div>
                </div>
                <LoginForm />
            </div>
        </div>
    )
  }
  
  export default Login;