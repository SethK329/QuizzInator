import React from 'react'
import Intro from "./Intro.jsx"
import Quiz from './Quiz.jsx'
function App() {

  const [gameState, setGameState] = React.useState(false)
  const[newQuestions, setNewQuestions] = React.useState(true)
  const [quizData, setQuizData] = React.useState()

  React.useEffect(() => {
    async function fetchData() {
      if(newQuestions){
        const response = await fetch("https://opentdb.com/api.php?amount=5")
        if(!response.ok){
          throw new Error("no response from server")
  
        }
        const data = await response.json()
        setQuizData(data)
        console.log(quizData)      
      }
    }

    fetchData()
  }, [newQuestions])


  function handleClick() {
    if(quizData){
      setGameState(true)
      setNewQuestions(false)
    }
    console.log('clicked')
  }

  function restartGame() {
    setGameState(false)
    setNewQuestions(true)
  }

    return (
      <div> 
        {!gameState && <Intro handleClick={handleClick}/>}        
        {gameState && <Quiz data={quizData}
                            restartGame={restartGame}
        />}
      </div>
    )
}

export default App
