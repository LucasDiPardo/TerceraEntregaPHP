import React, {useState, useEffect} from "react";
import axios from "axios";
import HeaderComponent from "../../components/HeaderComponent";
import FooterComponent from "../../components/FooterComponent";
import CardComponent from "../../components/CardComponent";


const DashboardPage = () =>{
    const [nombreFiltro, setNombreFiltro] = useState('');
    const [generoFiltro, setGeneroFiltro] = useState('');
    const [plataformaFiltro, setPlataformaFiltro] = useState('');
    const [ordenFiltro, setOrdenFiltro] = useState('');
    const [generos, setGeneros] = useState([]);
    const [plataformas, setPlataformas] = useState([]);
    const [juegos, setJuegos] = useState([]);
    const [juegosFiltrados, setJuegosFiltrados] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/juegos')
        .then(response => {
            setJuegos(response.data);
            setJuegosFiltrados(response.data);
        })  
        .catch(error => {
            console.log('Error:', error);
        });
        
        
        axios.get('http://localhost:8000/generos')
        .then(response => {
            setGeneros(response.data);
        })
        .catch(error => {
            console.log('Error:', error);
        });

        
        axios.get('http://localhost:8000/plataformas')
        .then(response => {
            setPlataformas(response.data);
        })
        .catch(error => {
            console.log('Error:', error);
        });
        }, []);

        const handleNombreFiltroChange = (event) => {
            setNombreFiltro(event.target.value);
        };

        const handleGeneroFiltroChange = (event) => {
            setGeneroFiltro(event.target.value);
        };

        const handlePlataformaFiltroChange = (event) => {
            setPlataformaFiltro(event.target.value);
        };

        const handleOrdenFiltroChange = (event) => {
            setOrdenFiltro(event.target.value);
        };

        const handleBuscarClick = () => {
            const juegosCopia = juegos.slice();
            

            //filtro por nombre
            const juegosFiltradosPorNombre = juegosCopia.filter((juego) => {
            return juego.nombre_juego.toLowerCase().includes(nombreFiltro.toLowerCase());
            });

            // filtro por género
            const juegosFiltradosPorGenero = generoFiltro
            ? juegosFiltradosPorNombre.filter((juego) => juego.id_genero === Number(generoFiltro))
            : juegosFiltradosPorNombre;


            // filtro por plataforma
            const juegosFiltradosPorPlataforma = plataformaFiltro
            ? juegosFiltradosPorGenero.filter((juego) => juego.id_plataforma === Number(plataformaFiltro))
            : juegosFiltradosPorGenero;
            console.log(plataformaFiltro)
            
            // orden
            let juegosFiltrados;
            if (ordenFiltro === "ASC") {
                juegosFiltrados = juegosFiltradosPorPlataforma.sort((a, b) => a.nombre_juego.localeCompare(b.nombre_juego));
            } else if (ordenFiltro === "DESC") {
                juegosFiltrados = juegosFiltradosPorPlataforma.sort((a, b) => b.nombre_juego.localeCompare(a.nombre_juego));
            } else {
                juegosFiltrados = juegosFiltradosPorPlataforma;
            }

            setJuegosFiltrados(juegosFiltrados);
        }

        const limpiarFiltros = () => {            
            setGeneroFiltro('');
            setPlataformaFiltro('');
            setNombreFiltro('');
            setOrdenFiltro('');
            setJuegosFiltrados(juegos);        
        }
   
    return (
        <div>
            <HeaderComponent/>
            <main>
                <h1 className="texto text-center">Lista De Juegos</h1>
                <form>
                    
                    <input className="form" type="text" value={nombreFiltro} onChange={handleNombreFiltroChange} />

                    
                    <select value={generoFiltro} className="form" onChange={handleGeneroFiltroChange}>
                        <option value="">Todos los géneros</option>
                            {generos.map(genero => (
                            <option key={genero.id} value={genero.id}>{genero.nombre}</option>
                        ))}
                    </select>

                    
                    <select value={plataformaFiltro} className="form" onChange={handlePlataformaFiltroChange}>
                        <option value="">Todas las plataformas</option>
                            {plataformas.map(plataforma => (
                            <option key={plataforma.id} value={plataforma.id}>{plataforma.nombre}</option>
                        ))}
                    </select>

                    
                    <select value={ordenFiltro} className="form" onChange={handleOrdenFiltroChange}>
                        <option value="">Ordenar por</option>
                        <option value="ASC">Nombre ascendente</option>
                        <option value="DESC">Nombre descendente</option>
                    </select>

                    <button type="button" className="form" onClick={handleBuscarClick}>Buscar</button>
                    <button type="button" className="form" onClick={limpiarFiltros}>Eliminar Filtros</button>
                </form>
        <CardComponent
          juegosProp={juegosFiltrados}
        />

      </main>
            <FooterComponent/>
        </div>
    )
};

export default DashboardPage;