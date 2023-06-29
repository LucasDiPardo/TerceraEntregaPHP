import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import DashboardPage from "./pages/dashboard/DashboardPage";
import GenerosPage from "./pages/generos/GenerosPage";
import NewGeneroPage from './pages/generos/NewPage';
import EditGeneroPage from './pages/generos/EditPage';
import PlataformasPage from "./pages/plataformas/PlataformasPage";
import NewPlataformaPage from './pages/plataformas/NewPage';
import EditPlataformaPage from './pages/plataformas/EditPage';

import "./assets/styles/index.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<DashboardPage />}/>
        <Route path={"/generos"} element={<GenerosPage />}/>
        <Route path={"/plataformas"} element={<PlataformasPage />}/>

        <Route path={"/generos/new"} element={<NewGeneroPage />}/>
        <Route path={"/generos/edit"} element={<EditGeneroPage />}/>
        <Route path={"/plataformas/new"} element={<NewPlataformaPage />}/>
        <Route path={"/plataformas/edit"} element={<EditPlataformaPage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
