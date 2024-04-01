import React from "react"
import ReactConfetti from "react-confetti";
import useWindowSize from 'react-use/lib/useWindowSize';

// made this its own component so that the confetti is always in view even when scrolled down

export default function Confetti() {
    const { width, height } = useWindowSize()
    return(
        <div className="confetti" ari-label="confetti">
            <ReactConfetti width={width}
                           height={height}
            />
        </div>
    )
}