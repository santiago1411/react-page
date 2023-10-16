import React from "react";
import { Link } from "react-router-dom";

function Reg() {
  return (
    <div className="container">
      <div className="row">
        
        <div className="mx-auto text-center">
          <h1>Regístrate</h1>
          <p>Gradúa como bachiller con los principios básicos educacionales</p>
        </div>
        
        <div className="container pb-3">
          <div className="mx-auto" style={{ maxWidth: "500px" }}>
            
            <form className="row g-3" noValidate="">
              <div className="col-md-6">
                <label htmlFor="inputEmail4" className="form-label">
                  <strong>Correo Electrónico</strong>
                </label>
                <input type="email" className="form-control" id="inputEmail4" />
              </div>
              <div className="col-md-6">
                <label htmlFor="inputPassword4" className="form-label">
                  <strong>Contraseña</strong>
                </label>
                <input type="password" className="form-control" id="inputPassword4" />
              </div>
              <div className="col-12">
                <label htmlFor="inputAddress" className="form-label">
                  <strong>Dirección</strong>
                </label>
                <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
              </div>
              <div className="col-12">
                <label htmlFor="inputAddress2" className="form-label">
                  <strong>Complemento Dirección</strong>
                </label>
                <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
              </div>
              <div className="col-md-6">
                <label htmlFor="inputCity" className="form-label">
                  <strong>Ciudad</strong>
                </label>
                <input type="text" className="form-control" id="inputCity" />
              </div>
              <div className="col-md-4">
                <label htmlFor="inputState" className="form-label">
                  <strong>Departamento</strong>
                </label>
                <select id="inputState" className="form-select" defaultValue="Antioquia">
                  <option value="Antioquia">Antioquia</option>
                  <option value="Magdalena">Magdalena</option>
                  <option value="Santander">Santander</option>
                  <option value="Cundinamarca">Cundinamarca</option>
                  <option value="Magdalena">Magdalena</option>
                </select>
              </div>
              <div className="col-md-2">
                <label htmlFor="inputOccupation" className="form-label">
                  <strong>Ocupación</strong>
                </label>
                <input type="text" className="form-control" id="inputOccupation" />
              </div>
              
              <div className="col-12">
                <label htmlFor="fechaNacimiento" className="form-label">
                  <strong>Fecha de Nacimiento</strong>
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="fechaNacimiento"
                  name="fechaNacimiento"
                />
              </div>
              <div className="col-12">
                <button type="submit" className="btn btn-primary">
                  Registrarme
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reg;
