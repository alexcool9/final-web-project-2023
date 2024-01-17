import React from 'react';
import { useEffect } from "react";
import Clients from '../components/Clients';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Intro from '../components/Intro';
import Products from '../components/Services';

import useCards from '../hooks/useCards';

const Home = () => {
    const { value, handleGetCards } = useCards();
    const { cards, error, isPending, filteredCards = [] } = value;

    useEffect(() => {
        handleGetCards();
    }, []);

    return (
        <>
            <Hero />
            <Products 
                layout={'grid'}
                products={filteredCards}
            />
            <Intro />
            <Clients />
            <Footer />
        </>

    )
}

export default Home;

