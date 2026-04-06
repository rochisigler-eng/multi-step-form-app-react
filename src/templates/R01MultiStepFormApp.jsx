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

  const data = [
    {
      id:0,
      stepName: "Your Info",
      title: "Personal info",
      description: "Please provide your name, email address, and phone number.",
      options:["Name", "Email Address", "Phone Number"],
      optionDescription: ["e.g.Stephen King", "e.g.StephenKing@gmail.com","e.g.11-2345-6789"]
    },
    {
      id:1,
      stepName: "Select Plan",
      title: "Select Your Plan",
      description: "You have the option of monthly or yearly billing.",
      options:["Arcade", "Advanced", "Pro"],
      optionDescription: ["9", "12","15"]
    },
    {
      id:2,
      stepName: "Add-Ons",
      title: "Pick add-ons",
      description: "Add-ons help enhance your gaming experience.",
      options:["Online service", "Larger storage", "Customizable profile"],
      optionDescription: ["Access to multiplayer games", "Extra 1TB of cloud save","Custom theme on your profile"]
    },
    {
      id:3,
      stepName: "Summary",
      title: "Finishing up",
      description: "Double-check everything looks OK before confirming.",
      options:["", "", ""],
      optionDescription: ["", "",""]
    }
  ]

  return (
    <form className={styles.formContainer}>
      <div className={styles.formPath}>
      <AllSteps
      data={data}
      />
      </div>
      <div className={styles.StepInformation}>
      <StepOne
      data={data}
      />
      {/* <StepTwo
      data={data}
      />
      <StepThree
      data={data}
      />
      <StepFour
      data={data}
      />
      <StepFive /> */}
      <StepButtons />
      </div>
    </form>
  )
}

export default R01MultiStepFormApp