import React from 'react'
import styles from '../styles/Paragraph.module.css'

export function Paragraph() {
    return (
        <div className={styles.paragraph}>
            <h2 className={styles.title}>
                Examine our network
            </h2>
            <p className={styles.text}>
                Choose a person from Meet App group and we will display all the following information about that person.            </p>
        </div>
    )
}
