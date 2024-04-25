
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Body from './components/Body';
import Login from './components/Login';
import Movie from './components/Movie';
import Card from './components/Card';
import Search from './components/Search';



const App = () => {
    return (
      <Router>
        <Header/>
        <Routes>
        <Route path='/' element={<Body/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/movie' element={<Movie/>}/>
        <Route path='/card' element={<Card/>}/>
        <Route path='/search' element={<Search/>}/>

       
        





        </Routes>
      </Router>
      
    )
  }
  
  export default App