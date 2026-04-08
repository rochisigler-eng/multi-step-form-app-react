import Input from "../../../../atoms/input/Input"
import styles from './One.module.scss'

const One = ({data, setFormData, formData}) => {
  
  return (
    <div className={styles.stepOne}>
      <Input id="name" placeholder="e.g. Stephen King" label="Name" type="text" setFormData={setFormData} formData={formData} />
      <Input id="email" placeholder="e.g. StephenKing@gmail.com" label="Email Address" type="text" setFormData={setFormData} formData={formData} />
      <Input id="phone" placeholder="e.g. +5411-1234-5467" label="Phone Number" type="number" setFormData={setFormData} formData={formData} />
    </div>
  )
}

export default One