import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import HeaderComponent from "../../components/HeaderComponent";
import FooterComponent from "../../components/FooterComponent";

const GenerosPage = () => {
    const [generos, setGeneros] = useState([]);
    const url = window.location.href;

    useEffect(() => {
        axios
            .get("http://localhost:8000/generos")
            .then((response) => {
                setGeneros(response.data);
            })
            .catch((error) => {
                console.log("Error:", error);
            });
    }, []);

    const eliminarGenero = (id) => {
        axios
            .delete("http://localhost:8000/genero/" + id)
            .then((response) => {
                //console.log("Genero eliminado:", response.data);
                alert("Genero eliminado");
            })
            .catch((error) => {
                alert("Comprueba que el género no este siendo utilizado por un juego");
                console.log("Error al eliminar el genero:", error);
            });
    };

    return (
        <div className="full-height-container">
            <HeaderComponent />
            <main className="row full-height-container">
                <h1 className="texto text-center">Lista De Generos</h1>
                <div className="tabla col-6">
                    <table className="margen table table-striped mx-auto">
                        <tbody>
                            {generos.map((genero) => (
                                <tr key={genero.id}>
                                    <td className="color">
                                        <span>{genero.nombre}</span>
                                        <span className="derecha">
                                            <Link to= {{ pathname: '/generos/edit/'}} state= {{ nombre: genero.nombre, id:genero.id }}>✏️</Link>
                                            <a onClick={() => eliminarGenero(genero.id)}>❌</a>
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="text-center">
                    <a className="boton col-6" href={url + "/new"}>Agregar</a>
                </div>
            </main>
            <FooterComponent />
        </div>
    );
};

export default GenerosPage;