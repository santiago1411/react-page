import React from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';

class FormularioRegistro extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            datos: [],
            form: {
                Id: '',
                Nombres: '',
                Apellidos: '',
                Correo: '',
                Contraseña: '',
                Departamento: '',
                Ciudad: '',
                Ocupacion: ''
            }
        }
    }

    peticionGet = () => {
        axios.get('https://backend.santiagoosorno.repl.co/api/usuarios')
            .then((response) => {
                this.setState({
                    datos: response.data
                });
            }).catch(error => {
                console.log(error.message);
            })
    }

    peticionPost = async () => {
        delete this.state.form.id;
        await axios.post('https://backend.santiagoosorno.repl.co/api/usuarios', this.state.form)
            .then(response => {
                alert(`Bienvenido`)

            }).catch(error => {
                console.log(error.message);
            })

    }


    handleChange = async (e) => {
        e.persist();
        await this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
        console.log(this.state.form)
    }



    render() {

        // const datosForm = this.state.form;
        const data = this.state.datos;
        console.log(data)

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
                    <div className="col-12">
                      <label htmlFor="inputAddress" className="form-label">
                        <strong>Nombres</strong>
                      </label>
                      <input type="text" className="form-control" name="Nombres" id="Usuario" placeholder="Nombres" required="" onChange={this.handleChange} value={data.Nombres}></input>
                    </div>
                    <div className="col-12">
                      <label htmlFor="inputAddress" className="form-label">
                        <strong>Apellidos</strong>
                      </label>
                      <input type="text" className="form-control" name="Apellidos" id="Usuario" placeholder="Apellidos" required="" onChange={this.handleChange} value={data.Apellidos}></input>
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="inputEmail4" className="form-label">
                        <strong>Correo Electrónico</strong>
                      </label>
                      <input type="email" className="form-control" name="Correo" id="email" placeholder="you@example.com" onChange={this.handleChange} value={data.Correo}></input>
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="inputPassword4" className="form-label">
                        <strong>Contraseña</strong>
                      </label>
                      <input type="password" className="form-control" name="Contraseña" id="Contrasena" onChange={this.handleChange} value={data.Contraseña}></input>
                    </div>
                    <div className="col-md-4">
                      <label htmlFor="inputState" className="form-label">
                        <strong>Departamento</strong>
                      </label>
                      <select id="inputState" className="form-select" defaultValue="Antioquia" name="Departamento" onChange={this.handleChange} value={data.Departamento}>
                        <option value="Antioquia">Antioquia</option>
                        <option value="Magdalena">Magdalena</option>
                        <option value="Santander">Santander</option>
                        <option value="Cundinamarca">Cundinamarca</option>
                        <option value="Magdalena">Magdalena</option>
                      </select>
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="inputCity" className="form-label">
                        <strong>Ciudad</strong>
                      </label>
                      <input type="text" className="form-control" name="Ciudad" id="email" onChange={this.handleChange} value={data.Ciudad}></input>
                    </div>
                    <div className="col-md-2">
                      <label htmlFor="inputOccupation" className="form-label">
                        <strong>Ocupación</strong>
                      </label>
                      <input type="text" className="form-control" name="Ocupacion" id="email" onChange={this.handleChange} value={data.Ocupacion}></input>
                    </div>
                    <div className="col-12">
                      <Link to="/homeL">
                          <button className="btn btn-primary" type="submit" onClick={() => this.peticionPost()} ><font style={{ marginRight: 'vertical-align: inherit' }} >Registrarme</font></button>
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

        );
    }
}

export default FormularioRegistro;