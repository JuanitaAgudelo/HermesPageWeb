import React from 'react'
import styles from './Navbar.module.css'

export default function Navbar () {
  return (
    <nav className={styles.navbar__container}>
      <ul className={styles.items}>
        <li className={styles.item}>
          <a href='#'>Inicio</a>
        </li>
        <li className={styles.item}>
          <a href='#Galeria'>Galeria</a>
        </li>
        <li className={styles.item}>
          <a href='#'>Conocenos</a>
        </li>
        <li className={styles.item}>
          <a href='#'>Calendario</a>
        </li>
        <li className={styles.item}>
          <a href='#'>Formulario de contacto</a>
        </li>
      </ul>
    </nav>
  )
}
