//working on the remove function so it can generate a new random number 


import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import './index.css';

let idTracker = 3;
let randomCardNumber = 0 ;
class App extends React.Component {
  constructor(props) {
    super(props);
 
    this.state = {
      randomNumber: randomCardNumber,
      list: [
        {id: 1, question: "What anime is Edward Elric from", answer: "Full Metal Alchemist"},
        {id: 2, question: "What anime is Goku from", answer: "Dragon Ball"},
        {id: 3, question: "What anime is Renton from", answer: "Euraka 7"}
      ],
      numberOfCorrectAnswers:0,
      numberOfWrongAnswers:0
    };
  }
  
  onChangeValue = event => {
    this.setState({ value: event.target.value });
  };
 
  onAddItem = () => {
    ++idTracker;
    this.setState(state => {
      const question = [
        {
          id: idTracker, question: document.getElementById("question").value, answer: document.getElementById("answer").value
        }
      ];
      const list = state.list.concat(question);
      console.log(idTracker);
      return {
        list,
        value: '',
      }
    });
  };

  updateItem = (i) => {
    const objectID = i.id;
    let updatedQuestion = "";
    let updatedAnswer = "";
    console.log(document.getElementById("updateForm").style.display);
    if(document.getElementById("updateForm").style.display === "none"){
      document.getElementById("updateForm").style.display = "block";
      console.log("success");
    }
    else{
      document.getElementById("updateForm").style.display = "none";
    }

    if(document.getElementById("updatedQuestion").value !==""){
      updatedQuestion = document.getElementById("updatedQuestion").value;
    }
    else{
      updatedQuestion = i.question;
    }
    if(document.getElementById("updatedAnswer").value !== ""){
      updatedAnswer = document.getElementById("updatedAnswer").value;
      
    }
    else{
      updatedAnswer = i.answer;
    }
    const question = [{
      id: objectID, question: updatedQuestion, answer: updatedAnswer
    }];
    // removes the selected object from the array 
    this.setState(state => {
      const list = state.list.map((item) =>{
        if(item.id === i.id){ // test your condition statement 
          item.question = updatedQuestion
          item.answer = updatedAnswer
          return item;
        }
        else if(item.id !== i.id){
          return item
        }
        
      });
      return{
        list,
      };
    });
  }
  removeItem = (id)=>{
   
    this.setState(state => {
    const list = state.list.filter(item => item.id !== id);
    console.log(list);
    return {
      list,
    };
    
  });
  
  }

  changeFormDisplay(){
    if(document.getElementById("addForm").style.display==="none")
      document.getElementById("addForm").style.display="block";
    else
      document.getElementById("addForm").style.display="none"

  }

  generateRandomCard=()=>{ // you have to use an arrow function when working with state
    const listLength = this.state.list.length
    randomCardNumber = Math.floor(Math.random()* listLength)
    console.log(randomCardNumber)
    this.setState(state =>{
      return{
        randomNumber: randomCardNumber
      };
    })
  }
  checkAnswer = () => {
    if(this.state.list[randomCardNumber].answer === document.getElementById("answerSubmitted").value){
      this.setState(state=>{
        return{
          numberOfCorrectAnswers: this.state.numberOfCorrectAnswers+1
        };  
      })
    }
    else{
      this.setState(state=>{
        return{
          numberOfWrongAnswers: this.state.numberOfWrongAnswers+1
        };  
      })
    }
  }

  render() {
    return (
      
      <div className="mainDiv">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"></link> 
        <Navbar
            changeFormDisplay = {this.changeFormDisplay}
            generateRandomCard = {this.generateRandomCard}
            numberOfCorrectAnswers = {this.state.numberOfCorrectAnswers}
            numberOfWrongAnswers = {this.state.numberOfWrongAnswers}
          />
          
          
          <div className="flashCard">
          <p>{this.state.list[this.state.randomNumber].question}</p><br></br>
          <p> Answer: <input type="text" id="answerSubmitted"></input></p>
          <button onClick={()=>this.checkAnswer()} className="glyphicon glyphicon-ok"></button>
          <button onClick={() => this.updateItem(this.state.list[this.state.randomNumber].id)} className="glyphicon glyphicon-cog"></button> {/*Bind is need to run this function without is triggering itself*/}
          <button onClick={() => this.removeItem(this.state.list[this.state.randomNumber].id)} className="	glyphicon glyphicon-remove"></button>
          </div>

        <div id="updateForm">
         <input  id="updatedQuestion"/>
          <input type ="test" id= "updatedAnswer"/>
        </div>
        
        <div id="addForm">
          <input
            type="text"
            onChange={this.onChangeValue}
            id="question"
          />
          <input
            type="text"
            onChange={this.onChangeValue}
            id="answer"
          />
          <button
            type="button"
            onClick={this.onAddItem}
            disabled={!this.state.value}
          >
            Add
          </button>
        </div>

      </div>
    );
  }
}
 
export default App;
