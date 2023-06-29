import React, { useState } from "react";
import axios from "axios";
import HeaderComponent from "../../components/HeaderComponent";
import FooterComponent from "../../components/FooterComponent";

const NewPage = () => {
    const [nombreGenero, setNombreGenero] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (nombreGenero.trim() === '') {
            alert('El nombre del género es requerido');
            return;
        }
        axios.post("http://localhost:8000/genero", {
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
                        <label className="texto">NOMBRE DEL GENERO</label>
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
export default NewPage;