/* eslint-disable react/prop-types */
const BarInfoSquare = ({
    textLabel,
    id,
    text,
}) => {

    return (
        <div className="flex flex-col items-start gap-1 sm:gap-y-3 self-stretch">
            <label
                htmlFor={id}
                className='self-stretch text-black font-inter text-lg font-medium leading-6'
            >
                {textLabel}
            </label>
            <div id={id} className="border-2 w-full text-base border-neutral-400 rounded-md py-2 px-3 md:py-3 md:px-4 xl:py-2 bg-white focus:outline-none">
                {text ? text : "-"}
            </div>
        </div>
    )
}

export default BarInfoSquare