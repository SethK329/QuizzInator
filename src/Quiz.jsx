import React from "react"
import { v4 as uuidv4 } from 'uuid';
import {decode} from 'he';

export default function Quiz(props) {
    const [questionData, setQuestionData] = React.useState(generateQuizData())
    const [quizElements, setQuizElements] = React.useState(quizElementsGenerator())
    console.log(questionData)
    
    // run only once setting up the form data when the component mounts using a map to allow for varied amounts of questions.
  function generateQuizData(){
      return(
        props.data.results.map((question)=>{
          let id = uuidv4()
          return(
                    {
                        ...question,
                        id : id,
                        checkedAnswer : false
                    }
               )
          })
        )        
    }

        

    function checkAnswers(){
            // for(let i = 0; i < props.data.results.length; i++){
            //     if(questionData[props.data.results[i].question] === props.data.results[i].correct_answer){
            //         console.log("correct")
            //     } else{
            //         console.log("incorrect")
            //     }
            // }
            console.log("clicked")
    }
    
    // standard form data handling for controled components
    function handleChange(e){
        const {name, value} = e.target
        setQuestionData(prevQuestion=>{
            return(
                prevQuestion.map(question=>{
                    if(question.id === name){
                        return{
                            ...question,
                            [name]: value
                        }
                    }else{
                        return question
                    }
                })
            )
            
        })
        console.log('clicked')
    }

    /**
     * Generates quiz elements based on the data results.
     * gets called when initializing quizElements state
     * @return {Array} an array of quiz elements
     */
    function quizElementsGenerator(){
        return(questionData.map((question)=>{
           let decodedQuestion = decode(question.question)
           return(
               <div key={question.id} id={question.id} className="question">
                   <h2>{decodedQuestion}</h2>
                   <fieldset className="answer-container">
                       <legend>Select an answer</legend>
                       {randomizeAnswers(question)}    
                   </fieldset>
               </div>
   
          ) 
       }))
        
    }

    /**
     * Randomizes the answers for a given question and returns a mapped array of JSX elements for each answer.
     *
     * @param {object} question - the question object containing incorrect and correct answers
     * @return {array} an array of JSX elements representing the randomized answers
     */
    function randomizeAnswers(question){
        let questionsArray = [...question.incorrect_answers, question.correct_answer]
        let randomArray = questionsArray.sort(() => Math.random() - 0.5)
        return randomArray.map((answer) =>{
            let id =uuidv4()
            let decodedAnswer = decode(answer)
            return ( <div key={id}className="answers">
                        <label htmlFor={id}>{decodedAnswer}</label>
                        <input id={id} name={question.id} value={answer} onChange={handleChange} type="radio"/>
                    </div>)
        })
    }

    return(
        <div>
            {quizElements}
            <button onClick={checkAnswers}>Check Answers</button>
        </div>
    )
}