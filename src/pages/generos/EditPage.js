import React, { useState } from "react";
import axios from "axios";
import { useLocation } from 'react-router-dom';
import HeaderComponent from "../../components/HeaderComponent";
import FooterComponent from "../../components/FooterComponent";

const EditPage = () => {
    const location = useLocation();
    const { id, nombre } = location.state;
    const [nombreGenero, setNombreGenero] = useState(nombre);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (nombreGenero.trim() === '') {
            alert('El nombre del género es requerido');
            return;
        }
        axios
            .put("http://localhost:8000/genero/" + id, {
                nombre: nombreGenero
            })
            .then((response) => {
                console.log(response);
                window.location = "/generos";
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
                        <label className="texto">Nombre del Género</label>
                        <br />
                        <input className="form" type="text" value={nombreGenero} onChange={e => setNombreGenero(e.target.value)} />
                    </div>
                    <button type="submit" className="boton">Submit</button>
                </form>
            </main>
            <FooterComponent />
        </div>
    );
}

export default EditPage;