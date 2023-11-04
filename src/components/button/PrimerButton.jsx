

// eslint-disable-next-line react/prop-types
const PrimerButton = ({name, handle}) => {
    return (
        <button className="flex py-2 sm:py-3 justify-center items-center gap-3 self-stretch bg-palleteBlue bg-accent hover:bg-accent text-white rounded-full text-xs sm:text-base border-black border border-opacity-40" onClick={handle}>{name}</button>
    )
}

export default PrimerButton