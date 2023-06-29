import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import HeaderComponent from "../../components/HeaderComponent";
import FooterComponent from "../../components/FooterComponent";

const PlataformasPage = () => {
    const [plataformas, setPlataformas] = useState([]);
    const url = window.location.href;

    useEffect(() => {
        axios
            .get("http://localhost:8000/plataformas")
            .then((response) => {
                setPlataformas(response.data);
            })
            .catch((error) => {
                console.log("Error:", error);
            });
    }, []);

    const eliminarPlataformas = (id) => {
        axios
            .delete("http://localhost:8000/plataforma/" + id)
            .then((response) => {
                const plataformasFilter = plataformas.filter((plataforma)=> plataforma.id!==id);
                setPlataformas(plataformasFilter);
                alert("Plataforma eliminado");
            })
            .catch((error) => {
                alert("Comprueba que la plataforma no este siendo utilizada por un juego");
                console.log("Error al eliminar la plataforma:", error);
            });
    };

    return (
        <div className="full-height-container">
            <HeaderComponent />
            <main className="row full-height-container">                
                <h1 className="texto text-center">Lista De Plataformas</h1>                
                <div className="tabla col-6">
                    <table className="margen table table-striped mx-auto">
                        <tbody>
                            {plataformas.map((plataforma) => (
                                <tr key={plataforma.id}>
                                    <td className="color">
                                        <span>{plataforma.nombre}</span>
                                        <span className="derecha">
                                            <Link to= {{ pathname: '/plataformas/edit/'}} state= {{ nombre: plataforma.nombre, id:plataforma.id }}>✏️</Link>
                                            <a onClick={() => eliminarPlataformas(plataforma.id)}>❌</a>
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

export default PlataformasPage;