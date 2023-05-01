//  import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
//  import Home from './pages/Home/Home';
//  import SkinCare from './pages/SkinCare/Skincare';
// // import BannerTelaInical from "./components/BannerInicial/BannerTelaInical"
// // import Header from "./components/Header/Header"
// // import Teste from "./components/Teste/Testando"


// //router devolve toda a aplicação
// //switch fala que area vai alterar as viws
// //route diz qual é o roteamento/ pagina
// const App = () => {
//   return (
//     <>
    
//      <Router>
//       <ul>
//           <li>
//               <Link to="/">Home</Link>
//           </li>
//           <li>
//               <Link to="/skincare">Home</Link>
//           </li>  
//       </ul>
//     </Router> 

//     <Switch>
//         <Route exact path="/">
//           <Home/>
//         </Route>
//         <Route path="/skincare">
//           <SkinCare/>
//         </Route>  
//     </Switch>
//     <h1>testando</h1>

//     </>
//   )
// } 

// export default App

import React from 'react';
import Home from './routes/Home/Home';
import SkinCare from './routes/SkinCare/Skincare';
import Header from './components/Header/Header'

const App = () => {
  return (
    
    <>
    <Header/>

     <h1>testando</h1>

    </>
  );
}

export default App;
