import React from "react"
import ReactConfetti from "react-confetti";
import useWindowSize from 'react-use/lib/useWindowSize';

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