import React from 'react';


function FlashCard(props){
    return(
        <div className="flash-card">
            <h2>{props.question}</h2>
            <p>{props.answer}</p>
        </div>
    );
}

export default FlashCard;