import React from 'react'
import { Logo } from './Logo'
import styles from '../styles/Header.module.css';

export function Header() {
    return (
            <div className={styles.header}>
                <Logo />
            </div>
    )
}
