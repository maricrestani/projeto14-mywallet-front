import styled from "styled-components";
import Logo from "../assets/images/Logo.png";

export default function SignUp() {
  return (
    <SignUpContainer>
      <img src={Logo} alt="Logo" />

      <form>
        <input name="name" value="" placeholder="Nome" type="text" required />
        <input
          name="email"
          value=""
          placeholder="E-mail"
          type="email"
          required
        />
        <input
          name="password"
          value=""
          placeholder="Senha"
          type="password"
          required
        />
        <input
          name="password"
          value=""
          placeholder="Consfirme a senha"
          type="password"
          required
        />

        <button>Cadastrar</button>
      </form>

      <h2>Já tem uma conta? Entre agora!</h2>
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
