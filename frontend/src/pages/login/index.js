import React from 'react';
import './style.css';
import logoImg from '../../assets/logo.svg';
import heroImg from '../../assets/heroes.png';
import { Link } from 'react-router-dom';
import { FiLogIn  } from 'react-icons/fi';

export default function login() {
  return (
    <div className="login-container">
      <section className="form">
        <img src={logoImg} alt="Logo Hero"/>

        <form action="">
          <h1>Faça seu login</h1>

          <input placeholder="Sua ID"/>
          <button className="button" type="submit" >Entrar</button>

          <Link className="back-link" to="/register">
            <FiLogIn size={16} color="#E02041" />
            Não tenho cadastro
          </Link>
        </form>
      </section>

      <img src={heroImg} alt="Imagenm Heroes"/>
    </div>
  );
}