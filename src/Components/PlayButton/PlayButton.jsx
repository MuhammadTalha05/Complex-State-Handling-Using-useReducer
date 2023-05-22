import React, { useState } from 'react'
import styles from './PlayButton.module.css'

const PlayButton = () => {
 
    const [buttonState, setButtonState] = useState(false)

    const handlePerform = ()=>{
        setButtonState(!buttonState)
    }
   

  return (
    <>
        <div>
            <button className={styles.btn} onClick={handlePerform}>{buttonState ? "Pause" : "Play"}</button>
        </div>
    </>
  )
}

export default PlayButton