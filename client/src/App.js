import './App.css';
import Home from './pages/home';
import { Formpage } from './pages/formpage';
import { Delpage } from './pages/delpage';
import {Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/formpage' element={<formpage/>}></Route>
            <Route path='/delpage' element={<Delpage/>}></Route>
        </Routes>
    </div>
  );
}

export default App;