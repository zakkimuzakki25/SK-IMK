import { Link } from 'react-router-dom'
import Logo from '../../assets/logo/Logo-1.svg'
import RegisterForm from '../../components/auth/RegisterForm'
import bgAuth from '../../assets/images/bg-auth.jpg'
// import { Link } from 'react-router-dom'

const Register = () => {
    return (
        <div className="flex flex-col overflow- justify-start items-center py-12 bg-backgroundlinear bg-fixed min-h-screen h-full w-full">
            <div className="pb-10 px-3">
                <Link to="/"><img className='h-20 hover:scale-105 transition-all' src={Logo} alt="Logo Seacrust"/></Link>
            </div>
            <div className="flex w-full h-full gap-5 justify-center">
                <div className="flex bg-cover border shadow-xl" style={
                    {
                        width: '25%',
                        backgroundPositionX: '-180px',
                        backgroundImage: `url(${bgAuth})`,
                    }
                }>
                    <div className="flex h-full w-full text-4xl font-semibold text-white justify-center items-center text-center shadow-slate-600 shadow-2xl bg-backgroundlinear3 p-5 hover:cursor-default" style={{
                        wordSpacing: '2px',
                        letterSpacing: '2px'
                    }}>Your passport to endless adventures</div>
                </div>
                <RegisterForm />
            </div>
        </div>
    )
  }
  
  export default Register;