import React from 'react';
import Logged from './Logged';
import NotLogged from './NotLogged';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { useUser } from '../../users/providers/UserProvider';
import useUsers from './../../users/hooks/useUsers';

const NavLinks = () => {
    const { user } = useUser();
    const { handleLogout } = useUsers();

    return (
        <>
            <HashLink className="px-4 font-extrabold text-gray-500 hover:text-blue-900" to="/about">
                Our story
            </HashLink>
            <HashLink className="px-4 font-extrabold text-gray-500 hover:text-blue-900" to="/products">
                Products
            </HashLink>
            <HashLink className="px-4 font-extrabold text-gray-500 hover:text-blue-900" to="/reviews">
                Reviews
            </HashLink>
            <HashLink className="px-4 font-extrabold text-gray-500 hover:text-blue-900" to="/contact">
                Contact Us
            </HashLink>
            {
                !user && <Link className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-auto px-6 py-3 shadow-xl rounded-xl" to="/login">
                Sign in
                </Link>
            }

            {!user && <NotLogged />}

            {user && <Logged />}

            {
                user && <button className="inline-flex hover:text-blue-900 items-center justify-center w-auto px-6 py-3 rounded-xl" onClick={e => handleLogout(true)}>
                Sign out
                </button>
            }
        </>
    )
}

export default NavLinks;