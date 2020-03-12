import React from 'react';
import './App.css';

class App extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
      answer: '',
      question: '',
      category: '',
      points: 0
    }
    this.handleSubmit = this.handleSubmit.bind(this)

  }

handleSubmit (event) {
  event.preventDefault()
       fetch("http://jservice.io/api/random")
         .then( response =>{
           return response.json()
         })
         .then(
           (response) => {
            // console.log(response[0]);
          //   console.log(response[0].category.title);
            this.setState({answer: response[0].answer,
                          question: response[0].question,
                          category: response[0].category.title,
                          points: response[0].value})
           }
         )
         .catch(
           (err) => {
             console.error(err)
           }
         )

   }


  render() {
    console.log(this.state.answer)
    console.log(this.state.question);
    return (

    <div>
      <h1>Jeopardy</h1>
      <h2>Let's play!</h2>
      <h3>Score: </h3>
      <h3>Category: {this.state.category}</h3>
      <h4>Question: {this.state.question}</h4>
      <h4>Points: {this.state.points}</h4>
      <h4>Answer: {this.state.answer}</h4>



      <button onClick={this.handleSubmit}>Random Trivia Question</button>




    </div>
  )
  }
}

export default App
