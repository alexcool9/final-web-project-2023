import React, { useState } from "react";
import { useUser } from '../../users/providers/UserProvider';
import useCards from "../../hooks/useCards";


const LikeButton = ({ cardId, cardLikes, onLike }) => {

  const { user } = useUser();
  const { handleLikeCard } = useCards();

  const [isLike, setLike] = useState(() => {
    if(!user) return false;
    return cardLikes.includes(user._id)
  });

  const onClick = async (e)=> {
    e.preventDefault();
    e.stopPropagation();

    console.log('id', cardId);

    setLike(!isLike);
    await handleLikeCard(cardId);
    onLike();
  }



  return (
    <>
      <span onClick={onClick}>
        {/* <svg className="absolute right-0 z-40 bg-red-500" width="50px" height="50px" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg"><path d="M25 39.7l-.6-.5C11.5 28.7 8 25 8 19c0-5 4-9 9-9 4.1 0 6.4 2.3 8 4.1 1.6-1.8 3.9-4.1 8-4.1 5 0 9 4 9 9 0 6-3.5 9.7-16.4 20.2l-.6.5zM17 12c-3.9 0-7 3.1-7 7 0 5.1 3.2 8.5 15 18.1 11.8-9.6 15-13 15-18.1 0-3.9-3.1-7-7-7-3.5 0-5.4 2.1-6.9 3.8L25 17.1l-1.1-1.3C22.4 14.1 20.5 12 17 12z"/></svg> */}
        {/* { 'Hello ' + user._id } */}
        <svg className={`absolute right-0 z-40 w-10 h-10 hover:stroke-red-600 ${isLike && 'fill-red-600'}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
        </svg>
      </span>
    </>
  );
};


export default LikeButton;