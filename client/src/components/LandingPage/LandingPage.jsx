import React from "react";
import { Link } from "react-router-dom";
import styles from '../LandingPage/LandingPage.module.css';

export default function LandingPage(){
    return (
        <div className={styles.landing}>
            <h1 className={styles.wlc}>Bienvenidos</h1>
            <Link to= '/home'> 
               <button className={styles.btn}>Inicio</button>
            </Link>
        </div>
       
    )
}