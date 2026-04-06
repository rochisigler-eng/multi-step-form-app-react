import AllSteps from "../organisms/all-steps/AllSteps"
import StepOne from "../organisms/step-one/StepOne"
import StepTwo from "../organisms/step-two/StepTwo"
import StepThree from "../organisms/step-three/StepThree"
import StepFour from "../organisms/step-four/StepFour"
import StepFive from "../organisms/step-five/StepFive"
import StepButtons from "../organisms/step-buttons/StepButtons"
import { useState } from 'react'
import styles from './R01MultiStepFormApp.module.scss'


const R01MultiStepFormApp = () => {
  const {stepDisplay, setStepDisplay} = useState('one')

  return (
    <div className={styles.formContainer}>
      <div className={styles.formPath}>
      <AllSteps />
      </div>
      <div className={styles.StepInformation}>
      <StepOne />
      {/* <StepTwo />
      <StepThree />
      <StepFour />
      <StepFive /> */}
      <StepButtons />
      </div>
    </div>
  )
}

export default R01MultiStepFormApp