
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './Containers/Home/Home';
import Profile from './Containers/Profile/Profile';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
      
        <Routes>

             <Route path="/" element={<Home/>}/>
             <Route path="/profile" element={<Profile/>}/>
        </Routes>
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;