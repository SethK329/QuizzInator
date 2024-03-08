import React from "react"
import { v4 as uuidv4 } from 'uuid';
import {decode} from 'he';

export default function Quiz(props) {
    const [questionData, setQuestionData] = React.useState({})
    const [quizElements, setQuizElements] = React.useState(quizElementsGenerator())
    console.log(questionData)
    console.log(quizElements)
    // run only once setting up the form data when the component mounts using a map to allow for varied amounts of questions.
    React.useEffect(() => {
        props.data.results.map((question) => {
            setQuestionData(prevQuestion=>({
                ...prevQuestion,
                [question.question]: ""
            }))            
        })
    },[props])

    function checkAnswers(){
            for(let i = 0; i < props.data.results.length; i++){
                if(questionData[props.data.results[i].question] === props.data.results[i].correct_answer){
                    console.log("correct")
                } else{
                    console.log("incorrect")
                }
            }
    }
    
    // standard form data handling for controled components
    function handleChange(e){
        const {name, value} = e.target
        setQuestionData(prevQuestion=>{
            return{
                ...prevQuestion,
                [name]: value
            }
        })
        console.log('clicked')
    }

    /**
     * Generates quiz elements based on the data results.
     * gets called when initializing quizElements state
     * @return {Array} an array of quiz elements
     */
    function quizElementsGenerator(){
        return(props.data.results.map((question)=>{
           let id = uuidv4()
           let decodedQuestion = decode(question.question)
           return(
               <div key={id} id={id} className="question">
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
                        <input id={id} name={question.question} value={answer} onChange={handleChange} type="radio"/>
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