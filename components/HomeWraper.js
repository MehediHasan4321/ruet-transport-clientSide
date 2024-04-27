'use client'


import Navbar from "./Navbar"
import Footer from "./Footer"


const HomeWraper = ({ children }) => {

    return (
        <div>
            <header>
                <Navbar />
            </header>
            <main className="mb-20">
                {children}
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )

}


export default HomeWraper