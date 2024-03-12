import React from "react";

export default function Intro(props){
    return(
        <div>
            <h1>Quizzical</h1>
            <p>If quizzes are quizzical what does that make tests?
                <br></br>
                Let's take a quiz!
            </p>
            <button onClick={props.handleClick}>Start Game</button>
        </div>
    )
}