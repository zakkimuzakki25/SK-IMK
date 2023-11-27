import Navbar from '../../components/layout/Navbar'
import Footer from '../../components/layout/Footer'
import faqData from '../../data/faq.json'
import FaqDropdown from '../../components/layout/FaqDropdown'

const Faq = () => {
    return (
        <div className='flex flex-col w-screen h-screen overflow-hidden'>
            <Navbar />
            {/* Content */}
            <div className="flex flex-col flex-grow py-10 px-24 overflow-y-auto">
                <div className="text-3xl font-bold mb-4 text-center w-full">FAQ</div>
                {/* List FAQ */}
                <div className="text-lg mb-6 gap-5 flex flex-col">
                    {faqData.map((faq, index) => (
                        <FaqDropdown key={index} question={faq.question} answer={faq.answer} />
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    ) 
}

export default Faq
