'use client'


import Navbar from "./Navbar"
import Footer from "./Footer"


const HomeWraper = ({ children,session }) => {

    return (
        <div>
            <header>
                <Navbar session={session} />
            </header>
            <main>
                {children}
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )

}


export default HomeWraper