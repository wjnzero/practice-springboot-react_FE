import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {AddWeapon} from "./weapons/AddWeapon";
import {EditWeapon} from "./weapons/EditWeapon";

function App() {
    return (
        <div className="App">
            <Router>
                <Navbar/>
                <Routes>
                    <Route exact path="/" element={<Home/>}></Route>
                    <Route exact path="/weapons/add" element={<AddWeapon/>}></Route>
                    <Route exact path="/weapons/:id" element={<EditWeapon/>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
