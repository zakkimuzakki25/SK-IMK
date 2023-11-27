import Navbar from '../../components/layout/Navbar'
import logo from '../../assets/logo/logo-0.svg'
import Footer from '../../components/layout/Footer'
import PrimerButtonSquare from '../../components/button/square/PrimerButtonSquare'
import { useNavigate } from 'react-router-dom'

const About = () => {
    const nav = useNavigate()

    const contactUsHandle = () => {
        window.open('https://wa.me/6283851569111', '_blank')
    }

    const faqHandle = () => {
        nav('/faq')
    }

  return (
    <div className='flex flex-col w-screen h-screen overflow-hidden'>
      <Navbar />
      
      {/* Content */}
      <div className="flex flex-col  flex-grow py-10 px-24 overflow-y-auto">
        <div className="text-3xl font-bold mb-4 text-center w-full">ABOUT US</div>
        <div className="text-2xl font-semibold mb-6">Ngalam Library</div>
        <div className="text-lg mb-4">
          Selamat datang di Ngalam Library, rumah bagi pengetahuan dan petualangan literasi. Ngalam Library adalah perpustakaan daring yang didedikasikan untuk memfasilitasi akses dan penyebaran informasi bagi komunitas pembaca di seluruh dunia. Dengan koleksi yang kaya dan beragam, Ngalam Library berkomitmen untuk menjadi mitra setia dalam perjalanan Anda mengeksplorasi dunia pengetahuan.
        </div>
        <div className="text-xl font-semibold mb-2">Visi:</div>
        <div className="text-lg mb-4">
          Menjadi sumber daya utama dan terpercaya dalam menginspirasi dan meningkatkan literasi di berbagai lapisan masyarakat.
        </div>
        <div className="text-xl font-semibold mb-2">Misi:</div>
        <div className="text-lg mb-4">
          <ol className="list-decimal pl-6">
            <li>Akses Literasi Universal: Memberikan akses mudah dan merata ke sumber literasi bagi semua, tanpa memandang usia, latar belakang, atau lokasi geografis.</li>
            <li>Koleksi yang Beragam: Menyediakan koleksi buku dan sumber literasi lainnya yang beragam, mencakup berbagai topik, genre, dan bahasa.</li>
            <li>Inovasi Teknologi: Mengintegrasikan teknologi terkini untuk meningkatkan pengalaman pengguna dan memfasilitasi pembelajaran online.</li>
            <li>Komunitas Pembaca yang Aktif: Membangun dan memelihara komunitas pembaca yang aktif, saling mendukung, dan berbagi wawasan.</li>
            <li>Edukasi Literasi: Menyelenggarakan program-program edukasi literasi untuk mendorong pembelajaran sepanjang hayat dan mengembangkan keterampilan literasi.</li>
          </ol>
        </div>
        <div className="text-lg mb-4">
          Ngalam Library mengundang Anda untuk bergabung dalam perjalanan literasi bersama kami. Jadilah bagian dari komunitas yang peduli tentang pengetahuan, belajar, dan berbagi. Bersama-sama, mari kita menjadikan literasi sebagai kekuatan untuk mengubah dunia dan membentuk masa depan yang cerdas dan terdidik.
        </div>
        <img src={logo} className="h-48 w-48 self-center" />
        <div className="text-lg mb-4 text-center mt-10">
          Terima kasih telah memilih Ngalam Library sebagai teman setia Anda dalam eksplorasi literasi. Selamat membaca!
        </div>

        <div className="flex flex-row gap-5 mt-5">
            <PrimerButtonSquare name={"Contact Us"} handle={contactUsHandle}/>
            <PrimerButtonSquare name={"Support - FAQ"} handle={faqHandle}/>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default About
