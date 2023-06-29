import React, { useState, useEffect } from "react";
import axios from "axios";
import HeaderComponent from "../../components/HeaderComponent";
import FooterComponent from "../../components/FooterComponent";

const NewPage = () => {
    const [nombrePlataforma, setNombrePlataforma] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (nombrePlataforma.trim() === '') {
            alert('El nombre de la plataforma es requerida');
            return;
        }
        axios
            .post("http://localhost:8000/plataforma", {
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
                        <label className="texto">NOMBRE DE LA PLATAFORMA</label>
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
export default NewPage;