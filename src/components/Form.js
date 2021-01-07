import React from 'react';
import {findDOMNode} from 'react-dom';

function Form (){
    let x = 0;
    
    let cards =[];
    function formGrabber(e){
        e.preventDefault();
        
        if(document.getElementById("question").value !=="" && document.getElementById("answer").value !==""){
            cards.push([document.getElementById("question").value,document.getElementById("answer").value]);
        }
        else
            alert("Please make sure both fields are filled out!");
        
       
        console.log(cards);
        
    }

    return (
        <div>
            <form className="cardForm">
                <input type="text" id="question" name="question"  required></input><br></br>
                <input type="text" id="answer" name="answer" required></input><br></br>
                <button onClick={formGrabber}>Submit</button>
            </form>
        </div>
    );
    }

export default Form; 