import './App.css';

import {BrowserRouter ,Route, Routes} from "react-router-dom"
import Company from './Company';
import Ahex from "./Ahex"
import Deloit from "./Deloit"
import Home from './Home';
function App() {
  return (
   <div>
    <BrowserRouter>
    <Home/>
    <Routes>
      <Route path="/company" element={<Company/>}/>
      <Route path="/company/Ahex" element={<Ahex/>}/>
      <Route path='/company/Deloit' element={<Deloit/>}/>
    </Routes>
    </BrowserRouter>
   
   </div>
  );
}

export default App;
 
    