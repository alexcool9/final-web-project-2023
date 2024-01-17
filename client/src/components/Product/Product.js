import React from 'react';
// import { Link } from 'react-router-dom';
import { func, string } from "prop-types";
import { HashLink } from 'react-router-hash-link';
import cardType from '../../models/types/cardType';
import LikeButton from './LikeButton';
import DeleteButton from './DeleteButton';
import { useUser } from '../../users/providers/UserProvider';

const Product = ({card, layout, onLike, onDelete, isDelete}) => {
    const { user } = useUser();

    return (
        <>
            <HashLink className="px-4 font-extrabold text-gray-500 hover:text-blue-900" to={`/products/${card._id}`}>
                <div className={`relative bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-600 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group ${layout === 'list' ? 'w-full m-4 mb-0' : 'p-2'}`}>
                    { user?.isBusiness && isDelete && <DeleteButton cardId={card._id} onDelete={onDelete} /> }
                    { user?.isBusiness && <LikeButton cardId={card._id} cardLikes={card.likes} isFirstRight={!isDelete} onLike={onLike} /> }
                    <div className={`m-2 text-justify text-sm ${layout === 'list' && 'flex sm:flex-row flex-col'}`}>
                        <img alt="card img" className={`rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out ${layout === 'list' && 'w-48'}`} src={card.imgUrl}/>
                        <div className={`flex-1 flex flex-col justify-between text-xl pt-4 ${layout === 'list' && 'ml-4'}`}>
                            <h2 className="font-semibold my-4 text-xl text-center">{card.title}</h2>
                            <h3 className="font-semibold my-4 text-2xl text-center">{card.price}$</h3>
                            <p className={`text-md font-medium ${layout === 'grid' && 'hidden'}`}>
                                {card.description}
                            </p>
                        </div>
                    </div>
                    <div className='flex justify-end'>
                        <button className="inline-flex bg-gray-300 hover:text-blue-900 items-center justify-center w-auto px-6 py-3 shadow-xl rounded-xl" onClick={()=>{}}>
                            More details
                        </button>
                    </div>
                </div>
            </HashLink>
        </>
    )
}

Product.propTypes = {
  card: cardType.isRequired,
  layout: string.isRequired,
//   onDelete: func.isRequired,
//   onLike: func.isRequired,
}

export default Product;