import AllStepsSlider from "../organisms/all-steps/AllStepsSlider"
import Steps from "../organisms/steps/Steps"
import StepButtons from "../organisms/step-buttons/StepButtons"
import { useState } from 'react'
import styles from './R01MultiStepFormApp.module.scss'


const R01MultiStepFormApp = () => {
  const [stepDisplay, setStepDisplay] = useState(0)
  console.log(stepDisplay)

  const data = [
    {
      id: 0,
      stepName: "Your Info",
      title: "Personal info",
      description: "Please provide your name, email address, and phone number.",
      options: ["Name", "Email Address", "Phone Number"],
      optionDescription: ["e.g.Stephen King", "e.g.StephenKing@gmail.com", "e.g.11-2345-6789"]
    },
    {
      id: 1,
      stepName: "Select Plan",
      title: "Select Your Plan",
      description: "You have the option of monthly or yearly billing.",
      options: ["Arcade", "Advanced", "Pro"],
      optionDescription: ["9", "12", "15"]
    },
    {
      id: 2,
      stepName: "Add-Ons",
      title: "Pick add-ons",
      description: "Add-ons help enhance your gaming experience.",
      options: ["Online service", "Larger storage", "Customizable profile"],
      optionDescription: ["Access to multiplayer games", "Extra 1TB of cloud save", "Custom theme on your profile"]
    },
    {
      id: 3,
      stepName: "Summary",
      title: "Finishing up",
      description: "Double-check everything looks OK before confirming.",
      options: ["", "", ""],
      optionDescription: ["", "", ""]
    }
  ]

  return (
    <form className={styles.formContainer}>
      <div className={styles.formPath}>
        <AllStepsSlider
          data={data}
        />
      </div>
      <div className={styles.StepInformation}>
        <Steps data={data} />
        <StepButtons
          setStepDisplay={setStepDisplay}
          stepDisplay={stepDisplay}
        />
      </div>
    </form>
  )
}

export default R01MultiStepFormApp