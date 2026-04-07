import styles from './StepButtons.module.scss'
import { useState } from 'react'

const StepButtons = ({setStepDisplay, stepDisplay}) => {
  
  return (
    <div className={styles.buttons}>
      {
        stepDisplay>0?
        <button type='button' className={styles.goBack} onClick={()=>setStepDisplay(stepDisplay-1)}>Go Back</button>
        : null
      }
      <button type='button' className={styles.nextStep} onClick={()=>setStepDisplay(stepDisplay+1)}>Next Step</button>
    </div>
  )
}

export default StepButtons