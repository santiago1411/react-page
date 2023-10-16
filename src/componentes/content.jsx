import React from "react";
import logo from "../imagenes/logo.png";
import cursos from "../imagenes/cursos.jpg";
import { LuSchool } from "react-icons/lu";

function Cursosinicial() {
  return (
    <div className="container">
      <h1 className="text-center my-4">Cursos Iniciales</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <div className="card">
            <img src={cursos} className="card-img-top" alt="Course 1" />
            <div className="card-body">
              <p><small><LuSchool/> Escula La Salle</small></p>
              <h4 className="card-title">Media Tecnica TIC</h4>
              <p className="card-text">
                <small>Este es un curso de TIC donde puedes aprender desarrollo de software.</small>
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src={cursos} className="card-img-top" alt="Course 2" />
            <div className="card-body">
              <h5 className="card-title">Curso 2</h5>
              <p className="card-text">
                Otro curso de ejemplo con descripción breve.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src={cursos} className="card-img-top" alt="Course 3" />
            <div className="card-body">
              <h5 className="card-title">Curso 3</h5>
              <p className="card-text">
                Un tercer curso de ejemplo con descripción breve.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cursosinicial;
