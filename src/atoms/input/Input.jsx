import styles from './Input.module.scss'

const Input = ({ id, label, placeholder, type, setFormData, formData }) => {
    let handleChange = (e) => {
        setFormData({
            ...formData,
            [id]: e.target.value
        })
    }

    return (
        <>
            <label
                className={styles.label}
                htmlFor={id}>
                {label}
            </label>
            <input
                className={styles.input}
                type={type}
                placeholder={placeholder}
                id={id} name={id}
                required
                value={formData[id]}
                onChange={handleChange}
            />
        </>
    )
}

export default Input