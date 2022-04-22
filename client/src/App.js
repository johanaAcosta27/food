
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import LandingPage from './components/LandingPage/LandingPage';
import Home from './components/Home/Home';
import RecipeCreate from './components/RecipeCreate/RecipeCreate';
import Details from './components/Details/Details'

//routes envuelve las rutas, si pongo un link que no es valido toma el ukltimo
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
           <Route exact path="/" element={<LandingPage />} />
           <Route  path="/home" element={<Home />} />
           <Route exact path="/recipe" element={<RecipeCreate/>} /> 
          <Route exact path="/recipes/:id" element={<Details/>} />
       </Routes>
    </div>
  </BrowserRouter>
       
  );
}  

export default App; 










// import './App.css';
// import {BrowserRouter, Routes, Route} from "react-router-dom";
// import LandingPage from './components/LandingPage.jsx';
// import Home from './components/Home.jsx';
// import RecipeCreate from './components/RecipeCreate.jsx';
// import Detail from './components/Detail.jsx'

// //routes envuelve las rutas, si pongo un link que no es valido toma el ukltimo
// function App() {
//   return (
//     <BrowserRouter>
//       <div className="App">
//         <Routes>
//            <Route path="/" element={<LandingPage />} />
//            <Route path="/home" element={<Home />} />
//            <Route path="/recipes" element={<RecipeCreate/>} /> 
//           <Route path="/home/:id" element={<Detail/>} />
//        </Routes>
//     </div>
//   </BrowserRouter>
       
//   );
// }  

// export default App; 
