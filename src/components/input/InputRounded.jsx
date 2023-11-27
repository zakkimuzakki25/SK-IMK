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
        <div className="flex flex-col w-full items-start gap-1 gap-y-2">
            <label 
            htmlFor={id}
            className='self-stretch text-black font-inter sm:text-xl font-medium'
            >
            {textLabel}
            </label>
            <input
                value={value}
                required
                type={type}
                id={id}
                placeholder={holder}
                className="border-2 w-full text-sm border-neutral-300 rounded-full py-2 px-4 bg-white focus:outline-none"
                onChange={handleChange}
            />
        </div>
    );
  };
  
  export default Input