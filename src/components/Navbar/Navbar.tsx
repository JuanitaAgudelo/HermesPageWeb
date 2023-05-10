import React from 'react'
import styles from "./Navbar.module.css"


export default function Navbar() {


    return (
    <nav className={styles.navbar__container}>
            <ul className={styles.items}>
                <li className={styles.item} >Inicio</li>
                <li className={styles.item} >Galeria</li>
                <li className={styles.item} >Conocenos</li>
                <li className={styles.item} >Calendario</li>
                <li className={styles.item} >Formulario de contacto</li>
            </ul>
    </nav>

  )
}
