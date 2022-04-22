/* eslint-disable no-unused-vars */
import React from "react"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getRecipes, filterDiet, orderSort, orderScort, getRecipesByName} from "../../actions/index";
import Card from "../Card/Card";
import Paginado from "../Paginado/Paginado";
import styles from '../Home/Home.module.css'

export default function Home () {
const dispatch = useDispatch();
const allRecipes = useSelector((state) => state.recipes )

                                                 
const[search,setSearch] =useState('')                      

const[orden,setOrden] =useState('')                                                         
const[order,setOrder] =useState('')   

const[currentPage,setCurrentPage] =useState(1)                                                   
const[recipesPerPage,setrecipesPerPage]=useState(9)                             
const indexLastRecipe = currentPage * recipesPerPage                               
const indexFirstRecipe = indexLastRecipe - recipesPerPage                        
const currentRecipes = allRecipes.slice(indexFirstRecipe,indexLastRecipe)       
                                                                              

const paginado = (pageNumber) => {
    setCurrentPage(pageNumber)
}

useEffect(() => {
    dispatch(getRecipes())   
},[dispatch]);

function handleOnClick(e){
e.preventDefault();
dispatch(getRecipes())   
}

function handleFilterTypeDiet (e) {
    dispatch(filterDiet(e.target.value))
}
function handleSort (e){
    e.preventDefault();
    dispatch(orderSort(e.target.value))
    setCurrentPage(1);
    setOrden(`ordenado ${e.target.value}`)

}
function handlePuntuation (e) {
    e.preventDefault();
    dispatch(orderScort(e.target.value))
    setCurrentPage(1);
    setOrder(`ordenado ${e.target.value}`)
}

function handleSubmit (e){
        e.preventDefault(e)
        dispatch(getRecipesByName(search))
         setSearch('')
            
         } 
function handleInputName (e){
         setSearch(e.target.value)
         }


return (
            <div className={styles.bkg}>
            <div className={styles.containerBar}>
            <h1 className={styles.h1}> Recetas </h1>
            <div className={styles.search}>
             <form onSubmit={(e) => {handleSubmit(e)}}> 
               <input type='text' placeholder='search...' value={search} onChange={(e) => {handleInputName(e)}} className={styles.input}></input>
               <button  type='submit' className={styles.btnsearch}>Buscar</button>
            </form>
            </div>
            </div>
            
             <div className={styles.filterC}>
                <Link to = '/recipe'> <button className={styles.create}>Crear Receta </button></Link>
                <button onClick = {e => handleOnClick(e)} className={styles.refresh}> Volver a Receta</button>

                
                <div className={styles.filt}>
               
                <select onChange={e => handleSort(e)} className={styles.select}>
                    <option value="asc">Ascendent(A-Z)</option>
                    <option value="des">Descendent(Z-A)</option>
                </select>
                </div>
                <div>
                <select  onChange={e => handlePuntuation(e)} className={styles.select}>
                    <option value="mayormenor">Mayor a Menor</option>
                    <option value="menormayor">Menor a Mayor</option>
                </select>
                </div>
                <div>
                <select onChange={e => handleFilterTypeDiet(e)} className={styles.select}>
                    <option value="All">Todas las recetas</option>
                    <option value="gluten free">Libre de gluten</option>
                    <option value="ketogenic">Cetogenico</option>
                    <option value="vegetarian">Vegetariano</option>
                    <option value="lacto-vegetarian">Lacto-Vegetarian </option>
                    <option value="lacto ovo vegetarian">Ovo-Vegetarian</option>
                    <option value="vegan">Vegano</option>
                    <option value="pescatarian">Pescatariano</option>
                    <option value="paleolithic">Paleo</option>
                    <option value="primal">Primitivo</option>
                    <option value="whole 30">Entre 30</option>
                </select>
                </div>
     </div>
     
     <div className={styles.paginado}> 
            <Paginado
            recipesPerPage = {recipesPerPage}
            allRecipes = {allRecipes.length}
            paginado= {paginado}
            />
            </div>     

        <div className={styles.cards}>
            { 
            currentRecipes?.map( e => {
                return (
                    
                    <Link to={'/recipes/' + e.id}>
                    <Card name={e.name} img={e.img} 
                    typeDiets={e.typeDiets} 
                    key={e.name}/>
                    </Link>
                    )  
                })      
            }    
            </div>
            <div className={styles.paginado}> 
            <Paginado
            recipesPerPage = {recipesPerPage}
            allRecipes = {allRecipes.length}
            paginado= {paginado}
            />
            </div>  
    </div>
)
}
