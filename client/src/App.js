import './App.css';
import Home from './pages/home';
import { Formpage } from './pages/formpage';
import { Delpage } from './pages/delpage';
import { upPage } from './pages/updPage';
import {Route, Routes} from 'react-router-dom';
import {Navbar} from './components/NavBar';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/formpage' element={<Formpage/>}></Route>
            <Route path='/delpage' element={<Delpage/>}></Route>
            <Route path='/updpage' element={<upPage/>}></Route>
        </Routes>
    </div>
  );
}

export default App;