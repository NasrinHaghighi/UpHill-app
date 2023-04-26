import './App.css';
import Layout from './components/Layout/Layout';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home';
import Search from './pages/search'
function App() {
  return (
    <>
    <BrowserRouter>
    <Layout>
    
      <Routes>
         <Route path="/" element={<Home />}></Route> 
         <Route path="/search" element={<Search />}></Route> 
       
      </Routes>
    
    </Layout>
    </BrowserRouter>
    </>
  );
}

export default App;
