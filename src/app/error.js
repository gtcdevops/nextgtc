'use client'

import { useEffect } from 'react'

export default function Error({ error, reset }) {

    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error)
      }, [error])
    return(
        <main className="min-h-screen items-center">
        <div className="text-lg text-center">404 |  Please try again.</div>
        <button onClick={() => reset()}
        className="text-center"
        >Try again</button>
        </main>
    ) 

    
}