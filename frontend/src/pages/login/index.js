import React from 'react';
import './style.css';
import logoImg from '../../assets/logo.svg';
import heroImg from '../../assets/heroes.png';
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

          <a href="/register ">
            <FiLogIn size={16} color="#e02041" />
            Não tenho cadastro
          </a>
        </form>
      </section>

      <img src={heroImg} alt="Imagenm Heroes"/>
    </div>
  );
}