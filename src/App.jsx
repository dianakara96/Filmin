
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Body from './components/Body';
import Login from './components/Login';
import Movie from './components/Movie';
import Search from './components/Search';
import Trailer from './components/Trailer';
import Footer from './components/Footer';




const App = () => {
    return (
      <Router>
        <Header/>
        <Routes>
        <Route path='/' element={<Body/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/movie' element={<Movie/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route path='/trailer/:movieId' element={<Trailer/>}/>
        </Routes>
        <Footer/>
      </Router>
      
    )
  }
  
  export default App