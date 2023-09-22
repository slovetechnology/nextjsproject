import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React, { Suspense } from 'react'

const layout = ({ children }) => {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    )
}

export default layout
