import PrimerButtonRounded from "../button/rounded/PrimerButtonRounded"
import PropTypes from 'prop-types'
import LabelPDF from "../../assets/labels/PDF.svg"
import { Link } from "react-router-dom"

const Ebookcard = ({pic, title}) => {
    const readHandle = () => {
        window.open("https://www.joliet86.org/assets/1/6/Journey_to_stars.pdf", "_blank");
    }

    return (
        <div className="relative flex flex-col p-5 gap-2 border border-zinc-300 rounded-md shadow-lg bg-white">
            <Link to={"/e-book/detail"} className="flex py-5 w-52 h-64 overflow-hidden justify-center bg-backgroundsolid hover:bg-primary2 hover:bg-opacity-80 hover:py-4 transition-all">
                <img src={pic} className="h-full shadow-md shadow-black" />
            </Link>
            <h1 className="text-lg w-52 flex-1">{title}</h1>
            <PrimerButtonRounded name={"read"} handle={readHandle}/>
            <img src={LabelPDF} alt="label pdf" className="h-5 absolute right-0 shadow-md"/>
        </div>
    )
}

Ebookcard.propTypes = {
    pic: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
}

export default Ebookcard
