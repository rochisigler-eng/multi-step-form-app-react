import styles from './Steps.module.scss'
import Headings from '../../atoms/headings/Headings'
import Paragraph from '../../atoms/paragraph/Paragraph'

const Steps = ({ data, currentStep }) => {
  const step = data[currentStep]

  return (
    <div className={styles.steps}>
      <Headings title={step.title} />
      <Paragraph description={step.description} />
    </div>
  )
}

export default Steps