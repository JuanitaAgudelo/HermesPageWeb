import React from 'react'
import MainScreen from '../../components/MainScreen/MainScreen'
import Navbar from '../../components/Navbar/Navbar'
import styles from "./homepage.module.css"
import Galeria from '../../components/Galeria/Galeria'
export default function Homepage() {
  return (
    <div style={{height:"200vh"}}>
        <Navbar/>
        <MainScreen/>
        <Galeria/>
    </div>
  )
}
