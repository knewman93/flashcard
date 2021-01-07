import React from 'react';
import '/Users/keith/Documents/Programming Projects/flashcard/src/index.css';
function Navbar (props){
    return(
        <div className="navbar">
                <p>Score Right: {props.numberOfCorrectAnswers} Wrong: {props.numberOfWrongAnswers} {"   "}</p>
                <button onClick={props.changeFormDisplay} className="glyphicon glyphicon-plus"></button>
                <button onClick={props.generateRandomCard} className="glyphicon glyphicon-question-sign"></button>
        </div>
    );
}

export default Navbar;