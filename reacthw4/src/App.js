import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Git from "./componeent/Git";
import Create from "./componeent/Create";
import Read from "./componeent/Read"
import Updata from "./componeent/Updata";
import Log from "./componeent/log";
import './App.css';

function App() {
  return (
 <>
 <Router>
    <Routes>
    <Route path='/Git' element={<Git />}></Route>
    <Route path='/Create' element={<Create />}></Route>
    <Route path='/Read' element={<Read />}></Route>
    <Route path='/Updata' element={<Updata />}></Route>
    <Route path='/Log' element={<Log />}></Route>
   

    </Routes>
  </Router>

  
 </>
  );
}

export default App;
