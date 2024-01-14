import React from 'react';
import NavBar from '../components/Navbar/NavBar';
import Cta from '../components/Cta';
import Portfolio from '../components/Portfolio';
import Footer from '../components/Footer';


const Reviews = () => {

    return (
        <>
            <div>
                <NavBar />
            </div>
            <div className="mt-16">
                <Portfolio />
                <Cta/>
            </div>
            <Footer />
        </>

    )
}

export default Reviews;

