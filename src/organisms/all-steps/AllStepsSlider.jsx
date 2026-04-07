import styles from './AllStepsSlider.module.scss'

const AllStepsSlider = ({data}) => {
  return (
    <div className={styles.allSteps}>
      <ul className={styles.stepList}>
        {
          data.map((step)=>{
            return(
            <li className={styles.listStep} key={step.id}>
              <div className={styles.listNumber}>
                {step.id+1}
              </div>
              <div>
                <p style={{color: '#fff', fontSize: '1rem', textTransform: 'uppercase', fontWeight: '200'}}>Step {step.id+1}</p>
                <p style={{color: '#fff', fontSize: '1.5rem', textTransform: 'uppercase', fontWeight: '800'}}>{step.stepName}</p>
              </div>
            </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default AllStepsSlider