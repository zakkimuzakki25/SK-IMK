/* eslint-disable react/prop-types */
const Input = ({
    textLabel,
    type = "text",
    id,
    holder,
    handleChange,
    value,
  }) => {
  
    return (
        <div className="flex flex-col items-start gap-1 sm:gap-y-2 self-stretch">
            <label 
            htmlFor={id}
            className='self-stretch text-black font-inter text-sm sm:text-xl font-medium leading-6'
            >
            {textLabel}
            </label>
            <input
                value={value}
                required
                type={type}
                id={id}
                placeholder={holder}
                className="border-2 w-52 xl:w-72 text-xs sm:text-sm border-neutral-300 rounded-full py-1 px-2 md:py-3 md:px-4 xl:py-2 bg-white focus:outline-none"
                onChange={handleChange}
            />
        </div>
    );
  };
  
  export default Input