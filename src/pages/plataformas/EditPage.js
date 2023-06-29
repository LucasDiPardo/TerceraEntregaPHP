import React, { useState } from "react";
import axios from "axios";
import { useLocation } from 'react-router-dom';
import HeaderComponent from "../../components/HeaderComponent";
import FooterComponent from "../../components/FooterComponent";

const EditPage = () => {
    const location = useLocation();
    const { id, nombre } = location.state;

    const [nombrePlataforma, setNombrePlataforma] = useState(nombre);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (nombrePlataforma.trim() === '') {
            alert('El nombre de la plataforma es requerida');
            return;
        }
        axios
            .put("http://localhost:8000/plataforma/" + id, {
                nombre: nombrePlataforma
            })
            .then((response) => {
                console.log(response);
                window.location = "/plataformas";
            })
            .catch((error) => {
                console.log("Error:", error);
            });
    };

    return (
        <div>
            <HeaderComponent />
            <main>
                <form onSubmit={handleSubmit}>
                    <div className="">
                        <label className="texto">Nombre de la plataforma</label>
                        <br />
                        <input className="form" type="text" value={nombrePlataforma} onChange={e => setNombrePlataforma(e.target.value)} />
                    </div>
                    <button type="submit" className="boton">Submit</button>
                </form>
            </main>
            <FooterComponent />
        </div>
    );
}

export default EditPage;
