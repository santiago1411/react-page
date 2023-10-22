import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';

function FormularioRegistro() {
    const [datos, setDatos] = useState([]);
    const [form, setForm] = useState({
        Id: '',
        Nombres: '',
        Apellidos: '',
        Correo: '',
        Contraseña: '',
        Departamento: '',
        Ciudad: '',
        Ocupacion: ''
    });

    useEffect(() => {
        peticionGet();
    }, []);

    const peticionGet = () => {
        axios.get('https://backend.santiagoosorno.repl.co/api/usuarios')
            .then((response) => {
                setDatos(response.data);
            })
            .catch(error => {
                console.log(error.message);
            });
    };

    const peticionPost = async () => {
        delete form.Id;
        await axios.post('https://backend.santiagoosorno.repl.co/api/usuarios', form)
            .then(response => {
                alert('Bienvenido');
            })
            .catch(error => {
                console.log(error.message);
            });
    };

    const handleChange = (e) => {
        e.persist();
        setForm((prevForm) => ({
            ...prevForm,
            [e.target.name]: e.target.value
        }));
        console.log(form);
    };

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
                                <input type="text" className="form-control" name="Nombres" id="Usuarios" placeholder="Nombres" required="" onChange={handleChange} value={form.Nombres}></input>
                            </div>
                            <div className="col-12">
                                <label htmlFor="inputAddress" className="form-label">
                                    <strong>Apellidos</strong>
                                </label>
                                <input type="text" className="form-control" name="Apellidos" id="Usuario" placeholder="Apellidos" required="" onChange={handleChange} value={form.Apellidos}></input>
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="inputEmail4" className="form-label">
                                    <strong>Correo Electrónico</strong>
                                </label>
                                <input type="email" className="form-control" name="Correo" id="email" placeholder="you@example.com" onChange={handleChange} value={form.Correo}></input>
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="inputPassword4" className="form-label">
                                    <strong>Contraseña</strong>
                                </label>
                                <input type="password" className="form-control" name="Contraseña" id="Contrasena" onChange={handleChange} value={form.Contraseña}></input>
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="inputState" className="form-label">
                                    <strong>Departamento</strong>
                                </label>
                                <select id="inputState" className="form-select" defaultValue="Antioquia" name="Departamento" onChange={handleChange} value={form.Departamento}>
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
                                <input type="text" className="form-control" name="Ciudad" id="ciudad" onChange={handleChange} value={form.Ciudad}></input>
                            </div>
                            <div className="col-md-2">
                                <label htmlFor="inputOccupation" className="form-label">
                                    <strong>Ocupación</strong>
                                </label>
                                <input type="text" className="form-control" name="Ocupacion" id="ocupacion" onChange={handleChange} value={form.Ocupacion}></input>
                            </div>
                            <div className="col-12">
                                <Link to="/homeL">
                                    <button className="btn btn-primary" type="submit" onClick={peticionPost}><font style={{ marginRight: 'vertical-align: inherit' }}>Registrarme</font></button>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FormularioRegistro;
