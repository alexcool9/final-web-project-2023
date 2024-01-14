import React from 'react';
import { useEffect } from "react";
import NavBar from '../components/Navbar/NavBar';
import Cta from '../components/Cta';
import Intro from '../components/Intro';
import Footer from '../components/Footer';

import useCards from '../hooks/useCards';

const About = () => {
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
            <div>
                <NavBar />
            </div>
            <div className="mt-16">
                <Intro />
                <Cta/>
            </div>
            <Footer />
        </>

    )
}

export default About;

