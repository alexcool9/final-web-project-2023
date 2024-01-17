import React, { useState } from "react";
import { useUser } from '../../users/providers/UserProvider';
import useCards from "../../hooks/useCards";


const LikeButton = ({ cardId, cardLikes, onLike, isFirstRight }) => {

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
        <svg className={`absolute ${isFirstRight ? 'right-2' : 'right-12'} z-40 w-10 h-10 hover:stroke-red-600 ${isLike && 'fill-red-600'}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
        </svg>
      </span>
    </>
  );
};


export default LikeButton;