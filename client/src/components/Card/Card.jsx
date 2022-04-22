import React from "react";
import styles from '../Card/Card.module.css'


export default function Card ({name , img , typeDiets ,  id}) { 
return (
    <div key = {id} className={styles.cardAll}>
        <div className={styles.cards}>
        <h3 className={styles.title}>{name}</h3>
        <img  className={styles.img} src = { img? img:'https://www.mexicodestinos.com/blog/wp-content/uploads/2012/06/comida-mexicana.jpg' } alt ='img not found' width='200px'  height='250px'/>
        <div className={styles.containerDiet}>  
        {typeDiets.map(t =>  <h5 className={styles.typeDiet} key={t.name}> {t.name}</h5>)}  </div> 
        </div>
    </div>
)
}
 


