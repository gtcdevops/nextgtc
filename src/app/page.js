import Navbar from "./components/Navbar"
import BookingStart from "./components/BookingStart";
import Footer from "./components/Footer";



export default function Home() {
  return (
    <main className="min-h-screen items-center">
      <Navbar />
      <BookingStart />
      <Footer />
      </main>
  )
}
