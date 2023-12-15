'use client'

import { useEffect } from 'react'

export default function Error({ error, reset }) {

    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error)
      }, [error])
    return(
        <>
        <div className="text-lg">404 |  Please try again.</div>
        <button onClick={() => reset()}>Try again</button>
        </>
    ) 

    
}