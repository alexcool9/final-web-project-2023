import React from 'react';
import { useEffect } from "react";
import Clients from '../components/Clients';
import Cta from '../components/Cta';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Intro from '../components/Intro';
import Portfolio from '../components/Portfolio';
import Products from '../components/Services';

import useCards from '../hooks/useCards';

const Home = () => {
    const { value, handleGetCards, handleDeleteCard } = useCards();
    const { cards, error, isPending, filteredCards = [] } = value;

    useEffect(() => {
        handleGetCards();
    }, []);

    const onDeleteCard = async (cardId) => {
        await handleDeleteCard(cardId);
        await handleGetCards();
    };

    return (
        <>
            <Hero />
            <Products 
                layout={'grid'}
                products={filteredCards}
            />
            <Intro />
            {/* <Portfolio /> */}
            <Clients />
            {/* <Cta/> */}
            <Footer />
        </>

    )
}

export default Home;

