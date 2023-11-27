

// eslint-disable-next-line react/prop-types
const PrimerBlueButtonRounded = ({name, handle}) => {
    return (
        <button className="flex py-2 sm:py-2 justify-center items-center gap-3 w-full self-stretch bg-palleteBlue bg-primary2 hover:text-teks text-white rounded-full text-xs sm:text-base border-black border border-opacity-40" onClick={handle}>{name}</button>
    )
}

export default PrimerBlueButtonRounded