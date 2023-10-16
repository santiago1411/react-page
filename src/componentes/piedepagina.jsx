  import React from "react";
import { Link } from "react-router-dom";
import pdp from '../imagenes/pdp.png';
import { PiCopyrightBold } from "react-icons/pi";

function Piedepagina() {
  return (
    <div className="container-fluid">
      <div className="row mx-auto">
        <div className="text-center mx-auto">
          <h2 className="encabezado mt-5 pt-4">Trabaja en la Salle</h2>
          <img src={pdp} alt="pdp" width={300}/>
          <h4 className="encabezado"> ¿Eres docente?. Prepara a los estudiantes en habilidades de alta demanda</h4>
          <p className="px-3"><small>Sometimes that's just the way it has to be. Sure, there were probably other options, but he didn't let them enter his mind. It was done and that was that. It was just the way it had to be.</small></p>
          <section className="text-center pb-4">
            <Link to="" className="btn btn-primary">Conocer más</Link>
          </section>
        </div>
        <div className="text-center mx-auto">
          <h2 className="encabezado mt-3 pt-3">
            <span className='text-primary'>La Salle siempre contigo!!</span>
          </h2>
          <p className="px-3"><small><strong>Acompañanos en este mundo de crecimiento donde pdras aprender a ser un profesinal desarrollando habilidades que te serviran en tu futuro</strong></small></p>
          <section className="text-center pb-4">
            <button className="btn btn-success">Instalar la Salle</button>
          </section>
          <div id="copyright">
            <hr/>
            <p><small>La Salle 2023 <PiCopyrightBold/>. Todos los derechos reservados</small></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Piedepagina;