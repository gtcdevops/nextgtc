import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Contactform from "../components/Contactform"

const page = () => {
  return (
    <main className="min-h-screen items-center">
    <Navbar />
    <Contactform />
    <Footer />
  </main>  )
}

export default page