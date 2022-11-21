import axios from "axios";
import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { URL } from "../constants/URL.js";

export default function Register() {
  const [form, setForm] = useState({ value: "", label: "", type: "" });

  function handleForm(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  return (
    <RegisterContainer>
      <HeaderContainer>
        <h1>Nova entrada</h1>
      </HeaderContainer>

      <form onSubmit={""}>
        <input
          name="value"
          value={form.value}
          placeholder="Valor"
          type="text"
          required
          onChange={handleForm}
        />
        <input
          name="label"
          value={form.label}
          placeholder="Descrição"
          type="text"
          required
          onChange={handleForm}
        />
        <button type="submit">Salvar entrada</button>
      </form>
    </RegisterContainer>
  );
}

const HeaderContainer = styled.div`
  width: 326px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 26px;

  h1 {
    color: #ffffff;
    font-style: bold;
    font-size: 26px;
  }
`;

const RegisterContainer = styled.div`
  margin-top: 24px;
  margin-right: 24px;
  margin-left: 24px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

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
    font-size: 20px;
    margin-bottom: 36px;
    width: 326px;
    height: 46px;
    border-radius: 5px;
    border: 0px;
    background-color: #a328d6;
    color: #ffffff;
    cursor: pointer;
  }
`;
