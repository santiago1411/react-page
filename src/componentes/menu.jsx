import React from "react";
import { Link } from "react-router-dom";
import '../estilos/index.css'

function Menu() {
  return (
    <div className="header">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
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
                <Link className="nav-link active" aria-current="page" to="/">
                  Inicio
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/cursos">
                  Cursos
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/login">
                  Iniciar Sesión
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/registro">
                  Registrarse
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container">
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
      <div className="p-3">
        <div className="card text-center">
          <div className="card-header" style={{backgroundColor:'#D2D1D1'}}>
            <strong>BIENVENIDO</strong>
          </div>
          <div className="card-body"style={{backgroundColor:'#D2D1D1'}}>
            <h4 className="encabezado fst-italic">Graduate como bachiller y añade a tu portafolio un diploma en media tecnica</h4>
            <p className="card-text">El <strong>100%</strong> de nuestros estudiantes obtienen beneficios y una alta                   calidad educativa para su futuro</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
