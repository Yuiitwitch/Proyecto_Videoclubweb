
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './Containers/Home/Home';
import Profile from './Containers/Profile/Profile';
import Login from './Containers/Login/Login';
import Register from './Containers/Register/Register';
import Admin from './Containers/Admin/Admin';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
          
        <Routes>

             <Route path="/" element={<Home/>}/>
             <Route path="/login" element={<Login/>}/>
             <Route path="/profile" element={<Profile/>}/>
             <Route path="/register" element={<Register/>}/>
             <Route path="/Admin" element={<Admin/>}/>

        </Routes>
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;