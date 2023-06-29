import React from "react";

const NavBarComponent = () =>{
    const baseUrl = window.location.protocol + "//" + window.location.host;
    return (
        <div>
            <ul className="nav justify-content-end">
                <li className="nav-item itemsNav rounded-pill">
                    <a className="nav-link  text-dark" aria-current="page" href={baseUrl + "/"}>Home</a>
                </li>
                <li className="nav-item itemsNav rounded-pill">
                    <a className="nav-link text-dark" href={baseUrl + "/generos"}>Generos</a>
                </li>
                <li className="nav-item itemsNav rounded-pill">
                    <a className="nav-link text-dark" href={baseUrl + "/plataformas"}>Plataformas</a>
                </li>
            </ul>
        </div>
    )
};

export default NavBarComponent;