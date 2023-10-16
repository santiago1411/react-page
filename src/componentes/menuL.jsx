import React from "react";
import { Link } from "react-router-dom";
import '../estilos/index.css'

function MenuL() {
  return (
    <div className="header">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/homeL">
            <i>La Salle</i>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/homeL">
                  Inicio
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/perfil">
                  Perfil
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/cursosL">
                  Mis Cursos
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  Cerrar Sesion
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container p-2">
        <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Navega"
            aria-label="Search"
          />
          <button className="btn btn-primary btn-primary-outline-success" type="submit">
            Buscar
          </button>
        </form>
      </div>
    </div>
  );
}

export default MenuL;
