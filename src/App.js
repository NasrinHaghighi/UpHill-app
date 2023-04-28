import './App.css';
import Layout from './components/Layout/Layout';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home';

function App() {
  return (
    <>
    <BrowserRouter>
    <Layout>
    
      <Routes>
         <Route path="/" element={<Home />}></Route> 
    
      </Routes>
    
    </Layout>
    </BrowserRouter>
    </>
  );
}

export default App;
