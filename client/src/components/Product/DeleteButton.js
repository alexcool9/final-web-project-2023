import React from "react";

const DeleteButton = ({ cardId, onDelete }) => {

  const onClick = async (e)=> {
    e.preventDefault();
    e.stopPropagation();
    onDelete(cardId);
  }

  return (
    <>
      <span onClick={onClick}>
        <svg className={`absolute right-2 z-40 w-10 h-10 hover:stroke-red-600`} width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M15.205 4.71967C15.4978 5.01256 15.4978 5.48744 15.205 5.78033L11.023 9.96229L15.205 14.1443C15.4979 14.4372 15.4979 14.9121 15.205 15.205C14.9121 15.4978 14.4372 15.4978 14.1443 15.205L9.96233 11.0229L5.78033 15.205C5.48744 15.4978 5.01256 15.4978 4.71967 15.205C4.42678 14.9121 4.42678 14.4372 4.71967 14.1443L8.90167 9.96229L4.71971 5.78033C4.42682 5.48744 4.42682 5.01256 4.71971 4.71967C5.0126 4.42678 5.48748 4.42678 5.78037 4.71967L9.96233 8.90163L14.1443 4.71967C14.4372 4.42678 14.9121 4.42678 15.205 4.71967Z"/>
        </svg>
      </span>
    </>
  );
};


export default DeleteButton;