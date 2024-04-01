import React from 'react'
import Intro from "./Intro.jsx"
import Quiz from './Quiz.jsx'
function App() {

  const [gameActive, setGameActive] = React.useState(false)
  const [quizData, setQuizData] = React.useState()
  const [errorMessage, setErrorMessage] = React.useState(false)
  const [loadingSpinner, setLoadingSpinner] = React.useState(false)

// this is run when the error message is triggered and removes the message after 5 seconds
React.useEffect(()=>{
    const errorTimer = setTimeout(()=>{
      setLoadingSpinner(false)    
      setErrorMessage(false)}, 5000)
    return ()=>clearTimeout(errorTimer)
},[errorMessage])

// this is run when the intro button is clicked, check for what selections were made and adjust the fetch accordingly
  async function handleClick(formData) {
    const categoryValue = formData.category==="any"? "":`&category=${formData.category}` 
    const difficultyValue = formData.difficulty==="any"? "":`&difficulty=${formData.difficulty}`
    try{
      setLoadingSpinner(true)
      const response = await fetch(`https://opentdb.com/api.php?amount=${formData.amount}${categoryValue}${difficultyValue}`)
      if(!response.ok){
        throw new Error("no response from server")
      }else{
        const data = await response.json()
        setQuizData(data)
        setLoadingSpinner(false)
        setGameActive(true)
      }
      
    }catch(error){
      // this triggers a useEffect that conditionally renders an error message for 5 seconds
      console.log(error)
      setErrorMessage(true)
    }
  }

  // flipping this boolean restarts the game and controls which page is rendered
  function restartGame() {
    setGameActive(false)
  }

    return (
      <div>
        {!gameActive && <Intro handleClick={handleClick} 
                               errorMessage={errorMessage}
                               loadingSpinner={loadingSpinner}/>}        
        {gameActive && <Quiz data={quizData}
                            restartGame={restartGame}
        />}
      </div>
    )
}

export default App
