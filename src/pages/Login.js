import styled from "styled-components";
import Logo from "../assets/images/Logo.png";
import { Link } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import { React, useState } from "react";

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });

  function handleForm(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  return (
    <LoginContainer>
      <img src={Logo} alt="logo" />

      <form>
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
        <button type="submit" disabled={isLoading}>
          {isLoading ? <ThreeDots color="#FFFFFF" /> : "Entrar"}
        </button>
      </form>
      <Link to={"/sign-up"}>
        <h2>Primeira vez? Cadastre-se!</h2>
      </Link>
    </LoginContainer>
  );
}

const LoginContainer = styled.div`
  width: 100%;
  margin-top: 160px;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    height: 50px;
    top: 159px;
    margin-bottom: 24px;
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
    margin-bottom: 36px;
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
