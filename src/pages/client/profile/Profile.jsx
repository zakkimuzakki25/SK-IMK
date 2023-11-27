import ProfileIMG from "../../../assets/images/Profile.jpg"
import Navbar from '../../../components/layout/Navbar'
import OtherButtonSquare from "../../../components/button/square/OtherButtonSquare"
import PrimerButtonSquare from "../../../components/button/square/PrimerButtonSquare"
import WarningButtonSquare from "../../../components/button/square/WarningButtonSquare"
import BarInfoSquare from "../../../components/input/BarInfoSquare"
import SideBarProfile from "../../../components/layout/SideBarProfile"

const Profile = () => {

    return (
        <div className="flex flex-col h-screen w-screen bg-backgroundlinear overflow-hidden">
            <Navbar />

            <div className="flex flex-row h-full">
                {/* SideBar */}
                <SideBarProfile />

                {/* content */}
                <div className="flex flex-col py-10 px-12 w-full pb-32 gap-10 overflow-y-auto">

                    {/* update photo */}
                    <div className="flex flex-row w-fit bg-white p-6 pr-20 border-2 gap-8 text-teks">
                        <div className="h-40 w-40 overflow-hidden rounded-sm">
                            <img src={ProfileIMG} />
                        </div>
                        <div className="flex flex-col h-full py-3 gap-3">
                            <div className="text-4xl">Upload A New Photo!</div>
                            <div className="text-xl">Profile.jpg</div>
                            <div className="button self-start">
                                <OtherButtonSquare name={"Update"}/>
                            </div>
                        </div>
                    </div>

                    {/* User Information */}
                    <div className="flex flex-col h-fit gap-3">

                        <div className="text-3xl">Informasi Pengguna</div>

                        <div className="flex flex-col w-full bg-white border-2 p-6 gap-4">
                            <div className="flex flex-row w-full gap-5">
                                <div className="w-full"><BarInfoSquare textLabel={"Username"} text={"_zakki"}/></div>
                                <div className="w-full"><BarInfoSquare textLabel={"Email"} text={"zakkimuzakki050@gmail.com"}/></div>
                            </div>
                            <div className="flex flex-row w-full gap-5">
                                <div className="w-full"><BarInfoSquare textLabel={"Fullname"} text={"Muhammad Iqbal Muzakki"}/></div>
                            </div>
                            <div className="flex flex-row w-full gap-5">
                                <div className="w-full"><BarInfoSquare textLabel={"Address in Malang"} text={"Jl. Candi V no 240D, Sukun"}/></div>
                            </div>
                            <div className="flex flex-row w-full gap-5">
                                <div className="w-full"><BarInfoSquare textLabel={"Gender"} text={"Laki-laki"}/></div>
                                <div className="w-full"><BarInfoSquare textLabel={"Birth Date"} text={"25 Maret 2004"}/></div>
                            </div>
                            <div className="flex flex-row w-full gap-5">
                                <div className="w-full"><WarningButtonSquare name={"Change Password"} /></div>
                                <div className="w-full"><PrimerButtonSquare name={"Update Profile"} /></div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile