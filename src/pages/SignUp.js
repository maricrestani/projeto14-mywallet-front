import axios from 'axios';
import { React, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Logo from "../assets/images/Logo.png";
import { URL } from '../constants/URL.js';
import { ThreeDots } from 'react-loader-spinner'

export default function SignUp() {

  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirmation: "",
  });

  function handleForm(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  function signUp(e) {
    e.preventDefault()
    setIsLoading(true)

    axios.post(`${URL}/signup`, form)

        .then(res => {
            setIsLoading(false)
            navigate('/')
        })

        .catch(err => {
            setIsLoading(false)
            alert(`Falha no cadastro - ${err.message}`)
        })
}

  return (
    <SignUpContainer>
      <img src={Logo} alt="Logo" />

      <form onSubmit={signUp}>
        <input
          name="name"
          value={form.name}
          placeholder="Nome"
          type="text"
          required
          onChange={handleForm}
        />
        <input
          name="email"
          value={form.email}
          placeholder="E-mail"
          type="email"
          required
          onChange={handleForm}
        />
        <input
          name="password"
          value={form.password}
          placeholder="Senha"
          type="password"
          required
          onChange={handleForm}
        />
        <input
          name="passwordConfirmation"
          value={form.passwordConfirmation}
          placeholder="Consfirme a senha"
          type="password"
          required
          onChange={handleForm}
        />

        <button type="submit" disable={isLoading}>
          {isLoading ? <ThreeDots color="#FFFFFF" /> : "Cadastrar"}
        </button>
      </form>
      <Link to={"/"}>
        <h2>Já tem uma conta? Entre agora!</h2>
      </Link>
    </SignUpContainer>
  );
}

const SignUpContainer = styled.div`
  width: 100%;
  margin-top: 160px;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    height: 50px;
    top: 95px;
    margin-bottom: 28px;
  }
  form {
    font-size: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  input {
    margin-bottom: 13px;
    width: 326px;
    height: 58px;
    border-radius: 5px;
    border: 0px;
    padding-left: 14px;
    box-sizing: border-box;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    margin-bottom: 32px;
    width: 326px;
    height: 46px;
    border-radius: 5px;
    border: 0px;
    background-color: #a328d6;
    color: #ffffff;
    cursor: pointer;
  }

  h2 {
    font-weight: 700;
    font-size: 15px;
    color: #ffffff;
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }
`;
