import styles from './Steps.module.scss'
import Headings from '../../atoms/headings/Headings'
import Paragraph from '../../atoms/paragraph/Paragraph'

const Steps = ({data}) => {
  return (
    <div className={styles.steps}>
        <Headings title= "Hello Title"/>
        <Paragraph description= "hello yall mushu mushu yall kronkie didle doo yall and olivia" />
    </div>
  )
}

export default Steps