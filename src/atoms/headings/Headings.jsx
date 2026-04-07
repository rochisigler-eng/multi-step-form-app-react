import styles from './Headings.module.scss'

const Headings = ({title}) => {
  return (
    <h2 className={styles.stepTitle}>{title}</h2>
  )
}

export default Headings