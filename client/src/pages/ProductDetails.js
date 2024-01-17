import React, {useEffect} from 'react';
import Footer from '../components/Footer';
import ProductInfo from '../components/ProductInfo';
import NavBar from '../components/Navbar/NavBar';
import useCards from './../hooks/useCards';
import { useParams } from "react-router-dom";


const ProductDetails = () => {
    const { value, handleGetCard } = useCards();
    const { card, error } = value;
    const { id } = useParams();

    useEffect(() => {
        handleGetCard(id);
    }, []);

    return (
        <>
            <NavBar />
            <ProductInfo
                card={card}
            />            
            <Footer />
        </>

    )
}

export default ProductDetails;

