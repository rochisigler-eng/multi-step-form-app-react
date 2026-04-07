import styles from './Paragraph.module.scss'

const Paragraph = ({description}) => {
  return (
    <p className={styles.description}>{description}</p>
  )
}

export default Paragraph