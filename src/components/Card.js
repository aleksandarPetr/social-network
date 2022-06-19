import styles from '../styles/Card.module.css';
import React from 'react';

export function Card(props) {
    return (
        <div className={styles.card}>
            <p>ID: {props.id}</p>
            <p>First name: {props.firstName}</p>
            <p>Surname: {props.surname}</p>
            <p>Age: {props.age}</p>
            <p>Gender: {props.gender}</p>
            <p>Friends: {props.friends.join(" ")}</p>
        </div>
    )
}
