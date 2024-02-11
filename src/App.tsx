import { Routes, Route } from "react-router-dom";
import Sitemap from "./components/pages/Sitemap";
import Login from "./components/pages/Login";
import Register from './components/pages/Register'
import Dashboard from './components/pages/Dashboard'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Sitemap />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dasboard" element={<Dashboard />} />
        
      </Routes>
    </div>
  );
}

export default App;
