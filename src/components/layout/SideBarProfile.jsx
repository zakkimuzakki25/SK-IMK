import { Link, useLocation } from "react-router-dom";
import ProfileIMG from "../../assets/images/Profile.jpg"
import DataSidebar from "../../data/profile/SideBar.json"

const SideBarProfile = () => {
    let loc = useLocation()

    const logoutHandle = () => {
        window.localStorage.setItem("ftoken", "")
        window.location.reload()
    }

    return (
        <div className="flex flex-col bg-primary1 items-center py-11 gap-3">
            <div className="h-56 w-56 rounded-full overflow-hidden">
                <img src={ProfileIMG} alt="profile photo" />
            </div>
            <div className="flex flex-col items-start">
                {DataSidebar.map((list, index) => {
                    return (
                    <Link
                        key={index}
                        to={list.path}
                        className={`${
                            loc.pathname.includes(list.path) ? "bg-white bg-opacity-20 cursor-default" : "hover:bg-primary2 hover:bg-opacity-30"
                        } flex flex-row text-white text-xl gap-2 py-3 pl-20 pr-32 w-80`}
                    >
                        <img src={list.icon} className="h-9"/>
                        <div className="self-center">{list.name}</div>
                    </Link>
                    );
                })}
                <button onClick={logoutHandle} className="text-xl text-white pt-2 pl-20 hover:text-teks">Log Out</button>
            </div>
        </div>
    )
}

export default SideBarProfile