import React from "react";
import logo from "../imagenes/logo.png";
import { Link } from "react-router-dom";

function Portada() {
  return (
    <div className="container">
      <div className="row">
        <img src={logo} alt="logo" className="mx-auto" style={{ maxWidth: "500px" }} />
        <div className="mx-auto">
          <p className="text-center">registrate como Estudiante de la Salle campo amor y                     enlistate en esta aventura como bachiller</p>
        </div>
        <Link to="/registro">
          <div className="d-grid gap-2 col-6 mx-auto pb-1">
            <button className="btn btn-primary" type="button">Registrate</button>
          </div>
        </Link>
        <Link to="/login">
          <div className="d-grid gap-2 col-6 mx-auto pb-3">
            <button className="btn btn-primary" type="button">Iniciar Sesion</button>
          </div>
        </Link>

      </div>
    </div>
  );
}

export default Portada;