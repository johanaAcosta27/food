/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styles from '../Paginado/Paginado.module.css'

export default function Paginado ({recipesPerPage ,  allRecipes , paginado}) {
const pageNumbers = []
    for (let i = 0 ; i < Math.ceil(allRecipes/recipesPerPage) ; i++){
   pageNumbers.push(i+1) 
} 
return (
          
    <nav  >
        <ul className={styles.ul} >
            {
                pageNumbers && pageNumbers.map(n => ( 
                    <li key={n}  >
                    <a className={styles.container} onClick= {() => paginado(n)} >{n}</a> 
                    </li>
                ))
            }
        </ul>
    </nav>
            
)
}











// /* eslint-disable jsx-a11y/anchor-is-valid */
// //controlado fijar <><>
// import React from 'react';
// //me traigo como prop las del otro componente({recipesPerPage. allRecipes, paginado})
// export default function Paginado({recipesPerPage, allRecipes, paginado}){
//     const pageNumber = [];

//     //redondea para arrriba todas mis recetas que tengo en pa pg
//     for(let i=0; i<=Math.ceil(allRecipes/recipesPerPage); i++){
//         pageNumber.push(i+1) //push(i+1)
//         //recorro el arreglo me tire un num redondo de la div de todos las recetas / cantidad por pagina
//         //pusheco a mi [] pageNumbrt
//     }
  
//     return (
// //         <div>
            
// //         {/* {pageNumber.length <= 1 ? 
// //         <></> :
// //         <nav className="pagination">
            
// //             <ul className="pages">
// //                 {pageNumber?.map(p =>(
// //                     <li className="page" key={p}>
// //                         <button className="pageBtn" onClick={() => paginado(p)} style={{width:"30px"}}>{p}</button>
// //                     </li>
// //                 ))}
// //             </ul>

// //         </nav>
// //         }  

// //     </div>
// // )
// // }; */}
//         <nav>
//             <ul className='paginado'>
//                 { //si tengo ese [] mapeame y devolveme por ese arrreglo cada numerito de ese paginado
//                     pageNumber &&
//                 pageNumber.map(number => (
//                     <li className='number' key={number}>
//                         <a onClick={() => paginado(number)}>{number}</a>
//                     </li>
//                 ))
//                 //number=> cada numero de la pag que necesito renderizar de todos mis recetas

//                 }
//             </ul> 
//         </nav>
//     )
// }