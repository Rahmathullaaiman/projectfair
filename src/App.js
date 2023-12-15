import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Project from './pages/Project';
import Footer from './components/Footer';
import Auth from './components/Auth';

function App() {
  return (
    <div className="App">
      
      
      <Routes>
        
        <Route path="/" element={<Home/>}/>
        <Route path="/Login" element={<Auth/>}/>
        <Route path="/Register" element={<Auth Register/>}/>
        <Route path="/dashboard" element={<Dashboard dashboard/>}/>
        <Route path="/project" element={<Project/>}/>

      </Routes>
      <Footer/>
      
      
    </div>
  );
}

export default App;
