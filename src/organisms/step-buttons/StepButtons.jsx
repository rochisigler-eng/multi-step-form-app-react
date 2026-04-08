import styles from './StepButtons.module.scss'
import { useState } from 'react'

const StepButtons = ({setCurrentStep, currentStep}) => {
  
  return (
    <div className={styles.buttons}>
      {
        currentStep>0?
        <button type='button' className={styles.goBack} onClick={()=>setCurrentStep(currentStep-1)}>Go Back</button>
        : null
      }
      <button type='button' className={styles.nextStep} onClick={()=>setCurrentStep(currentStep+1)}>Next Step</button>
    </div>
  )
}

export default StepButtons