import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Men from './components/headercomponents/Men';
import MainPage from './pages/MainPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Woman from './components/headercomponents/Woman';
import Kids from './components/headercomponents/Kids';
import Beauty from './components/headercomponents/Beauty';
import Cart from './components/headercomponents/Cart';
import Signup from './components/headercomponents/Signup';
import Signin from './components/headercomponents/Signin';
import Collections from './components/Collections';
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<MainPage/>} />
        <Route path="/men" element={<Men/>} />
        <Route path='/woman' element={<Woman/>}/>
        <Route path='/kids' element={<Kids/>}/>
        <Route path='/beauty' element={<Beauty/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path="/" element={<MainPage />} />

      </Routes>
    </Router>
  );
}

export default App;
