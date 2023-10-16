import React from "react";
import { Link } from "react-router-dom";
import '../estilos/index.css';
import cursos from "../imagenes/cursos.jpg";
import { LuFiles } from 'react-icons/lu';
import { BiTime } from 'react-icons/bi';
import { GrApps } from 'react-icons/gr';

function InicioL() {
  return (
    <div className='row'>
      <div className="container" style={{ backgroundColor: '#DFC8C4' }}>
        <div className="p-3">
          <h1 className="encabezado text fw-bold">Continuar con los cursos</h1>
          <div className="card">
            <div className="card-header encabezado">
              <small>Bachiller | Media técnica TIC</small>
            </div>
            <div className="card-body encabezado">
              <h5 className="card-title">Desarrollo de software</h5>
              <div className="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                <div className="progress-bar progress-bar-striped progress-bar-animated" style={{ width: "75%" }}>
                  75%
                </div>
              </div>
              <p className="card-text pt-2">Avance General.</p>
              <hr />
              <Link to="#" className="btn btn-primary">Continuar</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto text-center">
        <h3 className="pt-3">Cursos Destacados</h3>
      </div>
      <div className="container px-5">
        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="card">
                <img src={cursos} className="card-img-top img-fluid cards" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <div className="row pb-3">
                    <div className="col"><LuFiles/><b> 20 modulo</b></div>
                    <div className="col"><BiTime/><b> 133 horas</b></div>
                    <div className="col"><GrApps/><b> desarrolla tu app</b></div>
                  </div>
                  <section className="text-center pb-3">
                    <Link to="" className="btn btn-primary">Conocer más</Link>
                  </section>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="card">
                <img src={cursos} className="card-img-top img-fluid cards" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <div className="row pb-3">
                    <div className="col"><LuFiles/><b> 20 modulo</b></div>
                    <div className="col"><BiTime/><b> 133 horas</b></div>
                    <div className="col"><GrApps/><b> desarrolla tu app</b></div>
                  </div>
                  <section className="text-center">
                    <Link to="" className="btn btn-primary">Conocer más</Link>
                  </section>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="card">
                <img src={cursos} className="card-img-top img-fluid cards" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <div className="row pb-3">
                    <div className="col"><LuFiles/><b> 20 modulo</b></div>
                    <div className="col"><BiTime/><b> 133 horas</b></div>
                    <div className="col"><GrApps/><b> desarrolla tu app</b></div>
                  </div>
                  <section className="text-center">
                    <Link to="" className="btn btn-primary">Conocer más</Link>
                  </section>
                </div>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div className="container mx-auto text-center">
        <h3 className="pt-3">Cursos Destacados</h3>
      </div>
      <div className="container px-5">
        <div id="carouselExampleAutoplaying2" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="card">
                <img src={cursos} className="card-img-top img-fluid cards" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <div className="row pb-3">
                    <div className="col"><LuFiles/><b> 20 modulo</b></div>
                    <div className="col"><BiTime/><b> 133 horas</b></div>
                    <div className="col"><GrApps/><b> desarrolla tu app</b></div>
                  </div>
                  <section className="text-center">
                    <Link to="" className="btn btn-primary">Conocer más</Link>
                  </section>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="card">
                <img src={cursos} className="card-img-top img-fluid cards" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <div className="row pb-3">
                    <div className="col"><LuFiles/><b> 20 modulo</b></div>
                    <div className="col"><BiTime/><b> 133 horas</b></div>
                    <div className="col"><GrApps/><b> desarrolla tu app</b></div>
                  </div>
                  <section className="text-center">
                    <Link to="" className="btn btn-primary">Conocer más</Link>
                  </section>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="card">
                <img src={cursos} className="card-img-top img-fluid cards" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <div className="row pb-3">
                    <div className="col"><LuFiles/><b> 20 modulo</b></div>
                    <div className="col"><BiTime/><b> 133 horas</b></div>
                    <div className="col"><GrApps/><b> desarrolla tu app</b></div>
                  </div>
                  <section className="text-center">
                    <Link to="" className="btn btn-primary">Conocer más</Link>
                  </section>
                </div>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying2" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying2" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default InicioL;
