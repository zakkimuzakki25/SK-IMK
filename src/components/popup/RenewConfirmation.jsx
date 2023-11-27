import WarningButtonRounded from '../button/rounded/WarningButtonRounded'
import PrimerButtonRounded from '../button/rounded/PrimerButtonRounded'
import PropTypes from 'prop-types'

const RenewConfirmation = ({noHandle, yesHandle}) => {

  return (
    <div className='flex flex-col rounded-2xl bg-white overflow-hidden'>
        <div className="py-3 bg-primary2 text-white font-semibold text-xl justify-center flex">Renew Confirmation</div>
        <div className="px-10 flex flex-col justify-center pb-5 pt-2 border-2">
            <div className="pt-4 self-center">you can only renew once</div>
            <div className="pb-4 self-center font-semibold">Are you sure?</div>
            <div className="flex flex-row gap-3">
              <div className="w-60"><WarningButtonRounded name={"No"} handle={noHandle}/></div>
              <div className="w-60"><PrimerButtonRounded name={"Yes"} handle={yesHandle}/></div>
            </div>
        </div>
    </div>
  )
}

RenewConfirmation.propTypes = {
  noHandle: PropTypes.func.isRequired,
  yesHandle: PropTypes.func.isRequired
}

export default RenewConfirmation