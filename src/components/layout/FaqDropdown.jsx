import { useState } from "react"
import PropTypes from 'prop-types'
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io"

const FaqDropdown = ({ question, answer }) => {
  const [clicked, setClicked] = useState(false)

  return (
    <div>
      <div
        onClick={() => {
          setClicked(!clicked)
        }}
        className={`${
          clicked ? "bg-primary400" : "bg-white"
        } flex border border-neutral-400 mb-1 py-2 px-6 rounded-md cursor-pointer`}
      >
        <div className="flex justify-between items-center text-sm w-full">
          <div className="flex gap-4 w-fit items-center">
            {clicked ? (
              <IoMdArrowDropup className="text-xl xl:text-3xl" />
            ) : (
              <IoMdArrowDropdown className="text-xl xl:text-3xl" />
            )}
            <p className="p1">{question}</p>
          </div>
        </div>
      </div>
      {clicked && (
        <div className="p-2 md:p-4 bg-white">
          <p className="p2 text-sm">{answer}</p>
        </div>
      )}
    </div>
  )
}

FaqDropdown.propTypes = {
    question: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
}

export default FaqDropdown
