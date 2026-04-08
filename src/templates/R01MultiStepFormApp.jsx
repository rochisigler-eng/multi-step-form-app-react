import AllStepsSlider from "../organisms/all-steps/AllStepsSlider"
import Steps from "../organisms/steps/Steps"
import StepButtons from "../organisms/step-buttons/StepButtons"
import { useState } from 'react'
import styles from './R01MultiStepFormApp.module.scss'
import One from '../organisms/steps/variants/one/One'
import Two from '../organisms/steps/variants/two/Two'
import Three from '../organisms/steps/variants/three/Three'
import Four from '../organisms/steps/variants/four/Four'
import Five from '../organisms/steps/variants/five/Five'


const R01MultiStepFormApp = () => {
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    plan: "",
    isMonthly: true,
    isYearly: false,
    addOns: []
  })
  console.log(formData)

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

  const variants = {
    0: <One data={data} setFormData={setFormData} formData={formData} />,
    1: <Two data={data} setFormData={setFormData} formData={formData} />,
    2: <Three data={data} setFormData={setFormData} formData={formData} />,
    3: <Four data={data} />,
    4: <Five data={data} />
  }

  return (
    <form className={styles.formContainer}>
      <div className={styles.formPath}>
        <AllStepsSlider
          data={data}
        />
      </div>
      <div className={styles.StepInformation}>
        <Steps
          data={data}
          currentStep={currentStep}
          variants={variants}
        />
        <StepButtons
          setCurrentStep={setCurrentStep}
          currentStep={currentStep}
        />
      </div>
    </form>
  )
}

export default R01MultiStepFormApp