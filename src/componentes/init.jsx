import React from "react";
import logo from "../imagenes/logo.png";

function Init() {
  return (
    <div className="container">
      <div className="row">
        <img src={logo} alt="logo" className="mx-auto" style={{ maxWidth: "500px" }} />
        
        <div className="container pb-3">
          <div className="mx-auto" style={{ maxWidth: "500px" }}>
            <div className="card">
              <h5 className="card-header">Iniciar Sesión</h5>
              <div className="card-body">
                <form action="/homeL" method="get">
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Correo Electrónico</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    <div id="emailHelp" className="form-text">Escribe tu correo electrónico y contraseña.</div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Contraseña</label>
                    <input type="password" className="form-control" id="exampleInputPassword1"/>
                  </div>
                  <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                    <label className="form-check-label" htmlFor="exampleCheck1">Recordarme</label>
                  </div>
                  <button type="submit" className="btn btn-primary">Iniciar Sesión</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Init;
