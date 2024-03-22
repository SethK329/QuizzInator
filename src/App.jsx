import React from 'react'
import Intro from "./Intro.jsx"
import Quiz from './Quiz.jsx'
function App() {

  const [gameActive, setGameActive] = React.useState(false)
  const [quizData, setQuizData] = React.useState()

  // React.useEffect(() => {
  //   async function fetchData() {
  //     if(!gameActive){
  //       const response = await fetch("https://opentdb.com/api_category.php")
  //       if(!response.ok||!response){
  //         throw new Error("no response from server")
  //         setTimeout(fetchData, 5000)
  //       }
  //       console.log("i ran")
  //       const data = await response.json()
  //       console.log(data)
  //       // setQuizData(data)
  //     }
  //   }

  //   fetchData()
  // }, [gameActive])


  function handleClick() {
    if(quizData){
      setGameActive(true)
    }
  }

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
