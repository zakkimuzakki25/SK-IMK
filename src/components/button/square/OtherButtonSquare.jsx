

// eslint-disable-next-line react/prop-types
const OtherButtonSquare = ({name, handle}) => {
    return (
        <button className="flex py-2 px-4 justify-center items-center gap-3 self-stretch bg-palleteBlue bg-white hover:text-teks hover:border-teks text-accent rounded-md text-base border-accent border-2 font-semibold" onClick={handle}>{name}</button>
    )
}

export default OtherButtonSquare