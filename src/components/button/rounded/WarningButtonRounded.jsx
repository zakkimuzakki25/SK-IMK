

// eslint-disable-next-line react/prop-types
const WarningButtonRounded = ({name, handle}) => {
    return (
        <button className="flex py-2 sm:py-2 justify-center items-center gap-3 self-stretch bg-palleteBlue bg-white hover:text-teks text-red-600 rounded-full text-xs sm:text-base border-red-600 w-full border-2" onClick={handle}>{name}</button>
    )
}

export default WarningButtonRounded