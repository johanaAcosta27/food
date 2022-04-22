/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTypeDiets, postRecipes } from "../../actions/index";
import { useDispatch, useSelector } from "react-redux";
import styles from "./RecipeCreate.module.css";

function controlForm(input) {
  let errors = {};
  if (!input.name) {
    //si no tengo input en name
    errors.name = "Complete con un nombre de receta";
  } else if (!input.summary) {
    errors.summary = "Por favor agregue algunos comentarios sobre su receta";
  } else if (input.spoonacularScore < 1 || input.spoonacularScore > 100) {
    errors.spoonacularScore = "La puntuación debe ser un número entre 1 y 100";
  } else if (input.healthScore < 1 || input.healthScore > 100) {
    errors.healthScore = "La puntuación debe ser un número entre 1 y 100";
  }
  return errors;
}

export default function CreateRecipe() {
  const dispatch = useDispatch();
  let listDiets = useSelector((state) => state.typediets);

  const [errors, setErrors] = useState({}); // validaciones
  const [input, setInput] = useState({
    name: "",
    summary: "",
    spoonacularScore: "",
    healthScore: "",
    analyzedInstructions: "",
    typeDiets: [],
  });

  useEffect(() => {
    dispatch(getTypeDiets());
  }, [dispatch]);
  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      controlForm({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  }
  function handleSelect(e) {
    setInput({
      ...input,
      typeDiets: [...input.typeDiets, e.target.value],
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(postRecipes(input));
    alert("Receta creada con exitoS!");
    setInput({
      name: "",
      summary: "",
      spoonacularScore: "",
      healthScore: "",
      analyzedInstructions: "",
      typeDiets: [],
    });
  }
  function handleDelete(e) {
    setInput({
      ...input,
      typeDiets: input.typeDiets.filter((diet) => diet !== e),
    });
  }

  return (
    <div className={styles.bkg}>
      <div className={styles.container}>
        <h1 className={styles.h1}>Crear Receta</h1>
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
          className={styles.form}
        >
          <div>
            <label>Nombre:</label>
            <input
              type="text"
              name="name"
              defaultValue={"default"}
              value={input.name}
              onChange={(e) => {
                handleChange(e);
              }}
            />
            {errors.title && <p className={styles.error}>{errors.title}</p>}
          </div>
          <div>
            <label>Comentario:</label>
            <input
              type="text"
              name="summary"
              defaultValue={"default"}
              value={input.summary}
              onChange={(e) => {
                handleChange(e);
              }}
            />
            {errors.summary && <p className={styles.error}>{errors.summary}</p>}
          </div>
          <div>
            <label>Puntuacion:</label>
            <input
              type="text"
              name="spoonacularScore"
              defaultValue={"default"}
              value={input.spoonacularScore}
              onChange={(e) => {
                handleChange(e);
              }}
            />
            {errors.spoonacularScore && (
              <p className={styles.error}>{errors.spoonacularScore}</p>
            )}
          </div>
          <div>
            <label>Puntuacion Saludable:</label>
            <input
              type="text"
              name="healthScore"
              defaultValue={"default"}
              value={input.healthScore}
              onChange={(e) => {
                handleChange(e);
              }}
            />
            {errors.healthScore && (
              <p className={styles.error}>{errors.healthScore}</p>
            )}
          </div>
          <div>
            <label>Paso a Paso:</label>
            <input
              type="text"
              name="analyzedInstructions"
              defaultValue={"default"}
              value={input.analyzedInstructions}
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
          <select onChange={(e) => handleSelect(e)} className={styles.select}>
            {listDiets?.map((t) => {
              return <option value={t.name} key={t.id}> {t.name} </option>;
            })}
          </select>
          {errors.hasOwnProperty("name") ||
          errors.hasOwnProperty("summary") ||
          errors.hasOwnProperty("spoonacularScore") ||
          errors.hasOwnProperty("healthScore") ? (
            <p className={styles.adv}> Complete todos los campos</p>
          ) : (
            <button type="submit" className={styles.correct}>
              {" "}
              Crear Receta
            </button>
          )}
        </form>

        {input.typeDiets.map((e) => {
          return (
            <div>
              <h5 className={styles.types} key={e}>
                {e}
              </h5>
              <button className={styles.btnx} onClick={() => handleDelete(e)}>
                X
              </button>
            </div>
          );
        })}
        <Link to="/home">
          <button className={styles.btn}>
            <img
              src="https://img1.freepng.es/20180630/qpy/kisspng-line-angle-brand-arrow-pink-5b370660c71534.9509869915303327688155.jpg"
              alt="img"
              width="40px"
              height="43px"
            />
          </button>
        </Link>
      </div>
    </div>
  );
}
