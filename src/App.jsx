
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Body from './components/Body';
import Login from './components/Login';
import Register from './components/Register';

const App = () => {
    return (
      <Router>
        <Routes>
        <Route path='/' element={<Header/>}/>
        <Route path='/body' element={<Body/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>





        </Routes>
      </Router>
      
    )
  }
  
  export default App