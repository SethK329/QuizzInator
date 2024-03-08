import React from 'react'
import Intro from "./Intro.jsx"
import Quiz from './Quiz.jsx'
function App() {

  const [gameState, setGameState] = React.useState(false)
  const [quizData, setQuizData] = React.useState()

  React.useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://opentdb.com/api.php?amount=5")
      const data = await response.json()
      setQuizData(data)
      console.log(quizData)      
    }

    fetchData()
  }, [])


  function handleClick() {
    setGameState(true)
    console.log('clicked')
  }

    return (
      <div> 
        {!gameState && <Intro handleClick={handleClick}/>}        
        {gameState && <Quiz data={quizData}/>}  
      </div>
    )
}

export default App
