import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from './pages/Login/Login';
import Registration from './pages/Registration/Registration';
import MainApp from './pages/MainApp/MainApp';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="app" element={<MainApp/>}/>
        <Route path="settings" element={<h1>Settings</h1>}/>
        <Route path="signup" element={<Registration/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
