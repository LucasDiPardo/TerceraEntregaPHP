const CardComponent = ({ juegosProp }) => {
    return (
        <div>
            <div className="margen table table-striped mx-auto">
                <div className="row d-flex justify-content-center">
                {juegosProp.map((juego) => (
                <div className="card m-1 col-lg-3 col-md-4 " key={juego.id}>
                
                <img className="card-img-top" src={`data:image/png;base64, ${juego.imagen}`}/>
                <div className="card-body">
                    <h2 className="card-text"> {juego.nombre_juego}</h2>
                    <hr/>
                    <p className="card-text">
                        {juego.nombre_genero}
                    </p>
                    <hr/>
                    <p className="card-text">
                        {juego.descripcion}
                    </p>
                    <hr/>
                    <p className="card-text">
                        {juego.nombre_plataforma}
                    </p>
                    <hr/>
                    <a href={juego.url} className="btn btn-primary" target="_blank">
                      Link
                    </a>
                </div>
                </div>
              ))}
                </div>
            </div>
        </div>
    );
}

export default CardComponent;
