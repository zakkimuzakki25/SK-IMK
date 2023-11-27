

// eslint-disable-next-line react/prop-types
const WarningButtonSquare = ({name, handle}) => {
    return (
        <button className="flex px-4 py-2 sm:py-2 justify-center items-center w-full gap-3 self-stretch bg-palleteBlue bg-redpallete hover:text-black text-white rounded-md text-base border border-teks" onClick={handle}>{name}</button>
    )
}

export default WarningButtonSquare