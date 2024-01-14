import { useEffect, useState, useCallback } from "react";
import Footer from '../components/Footer';
import Cards from '../components/Services';
import NavBar from '../components/Navbar/NavBar';
import useCards from './../hooks/useCards';
import AddNewCard from './AddNewCard';

import { useUser } from './../users/providers/UserProvider';


const Products = () => {
    const { user } = useUser();
    const { value, handleGetCards, handleDeleteCard, handleGetFavCards, handleGetMyCards } = useCards();
    const { cards, error, isPending, filteredCards = [] } = value;

    const [selectedTab, setSelectedTab] = useState('all');

    const [layout, setLayout] = useState('list');

    useEffect(() => {
        handleGetCards();
        console.log('handleGetCardshandleGetCards')

    }, []);

    const layoutToggle = (value) => {
        setLayout(value)
    }

    const changeLikeStatus = useCallback(async () => {
        await handleGetFavCards();
    }, []);

    return (
        <>
            <div>
                <NavBar />
            </div>
            <div className="flex justify-center items-center mt-8 w-full bg-white py-12 lg:py-20 bg-gray-200 min-w-fit"  x-data="{'layout': 'list'}">

                <div 
                    className="mx-auto bg-gray-200 mb-24 min-w-full max-w-screen-lg"
                    x-data="{'layout': 'list'}"
                >
                    <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
                        <li className="me-2">
                            <a href="#" aria-current="page" className={`inline-block p-4 rounded-t-lg ${selectedTab === 'all' && 'active bg-gray-100 text-blue-600 dark:bg-gray-800 dark:text-blue-500'}`} onClick={()=>{setSelectedTab('all');handleGetCards()}}>All Cards</a>
                        </li>
                        <li className="me-2">
                            <a href="#" className={`inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300 ${selectedTab === 'fav' && 'active bg-gray-100 dark:bg-gray-800'}`} onClick={()=>{setSelectedTab('fav'); handleGetFavCards()}}>Favorite Cards</a>
                        </li>
                        <li className="me-2">
                            <a href="#" className={`inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300 ${selectedTab === 'self' && 'active bg-gray-100 text-blue-600 dark:bg-gray-800'}`} onClick={()=>{setSelectedTab('self'); handleGetMyCards()}}>My Card</a>
                        </li>
                        <li className="me-2">
                            <a href="#" className={`inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300 ${!user?.isBusiness && 'cursor-not-allowed'} ${selectedTab === 'newCard' && 'active bg-gray-100 text-blue-600 dark:bg-gray-800'}`}  onClick={()=>{setSelectedTab('newCard')}}>Add Card +</a>
                        </li>
                        {/* <li>
                            <a className="inline-block p-4 text-gray-400 rounded-t-lg cursor-not-allowed dark:text-gray-500">Disabled</a>
                        </li> */}
                    </ul>
                
                    {
                        selectedTab !== 'newCard' &&
                        <nav className="p-4 bg-indigo-700 text-indigo-100">
                            Layout:
                            <button type="button" className={`mx-1 px-2 py-1 hover:bg-indigo-900 ${layout === 'list' ? 'bg-indigo-800' : '' }`} onClick={()=>layoutToggle('list')}>List</button>
                            <button type="button" className={`mx-1 px-2 py-1 hover:bg-indigo-900 ${layout === 'grid' ? 'bg-indigo-800' : '' }`} onClick={()=>layoutToggle('grid')}>Grid</button>
                        </nav>
                    }
                    {
                        selectedTab !== 'newCard' &&
                            <section className="flex flex-wrap">
                                    <Cards
                                        layout={layout}
                                        products={filteredCards}
                                        onLike={changeLikeStatus}
                                        onDelete={handleDeleteCard}
                                    />
                            </section>
                    }
                    {
                        selectedTab === 'newCard' && <AddNewCard/>
                    }


                </div>
            </div>
            <Footer />
        </>

    )
}

export default Products;

