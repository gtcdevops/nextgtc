import React from "react";
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import BookingSummary from "@/components/BookingSummary"



export default function Page () {

  return (
    <main className="min-h-screen items-center">
    <Navbar />

<BookingSummary/>
{/* <BookingSummary createTodo={createTodo}/> */}
  <Footer />
  </main>  
  )
}



