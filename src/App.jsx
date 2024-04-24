
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Body from './components/Body';
import Login from './components/Login';
import Movie from './components/Movie';


const App = () => {
    return (
      <Router>
        <Header/>
        <Routes>
        <Route path='/' element={<Body/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/movie' element={<Movie/>}/>
       
        





        </Routes>
      </Router>
      
    )
  }
  
  export default App