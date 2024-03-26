import React from 'react'
import Intro from "./Intro.jsx"
import Quiz from './Quiz.jsx'
function App() {

  const [gameActive, setGameActive] = React.useState(false)
  const [quizData, setQuizData] = React.useState()

// this is run when the intro button is clicked, check for what selections were made and adjust the fetch accordingly
  async function handleClick(formData) {
    const categoryValue = formData.category==="any"? "":`&category=${formData.category}` 
    const difficultyValue = formData.difficulty==="any"? "":`&difficulty=${formData.difficulty}`
    try{
      const response = await fetch(`https://opentdb.com/api.php?amount=${formData.amount}${categoryValue}${difficultyValue}`)
      if(!response.ok||!response){
        throw new Error("no response from server wait five seconds and try again")    
      }else{
        const data = await response.json()
        setQuizData(data)
        setGameActive(true)
  
      }

    }catch(error){
      console.log(error)
    }
  }

  // flipping this boolean restarts the game and controls which page is rendered
  function restartGame() {
    setGameActive(false)
  }

    return (
      <div> 
        {!gameActive && <Intro handleClick={handleClick}/>}        
        {gameActive && <Quiz data={quizData}
                            restartGame={restartGame}
        />}
      </div>
    )
}

export default App
