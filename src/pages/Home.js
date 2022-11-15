import styled from "styled-components";
import SignOutIcon from "../assets/images/Vector.png";
import AddIcon from "../assets/images/add-circle-outline.svg";
import RemoveIcon from "../assets/images/remove-circle-outline.svg";

export default function Home() {
  return (
    <HomeContainer>
      <HeaderContainer>
        <h1>Olá fulano</h1>
        <img src={SignOutIcon} alt="ícone sair" />
      </HeaderContainer>

      <MainContainer>
        <h2>Não há registros de entrada ou saída</h2>
      </MainContainer>
      <FooterContainer>
        <button>
          <img src={AddIcon} alt="ícone sair" />
          <h3>Nova entrada</h3>
        </button>
        <button>
          <img src={RemoveIcon} alt="ícone sair" />
          <h3>Saída</h3>
        </button>
      </FooterContainer>
    </HomeContainer>
  );
}

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;

  h1 {
    color: #ffffff;
    font-style: bold;
    font-size: 26px;
  }
`;

const HomeContainer = styled.div`
  margin-top: 24px;
  margin-right: 24px;
  margin-left: 24px;
  background-color: lightcyan;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    margin-top: 12px;
    margin-bottom: 53px;
    font-family: "Roboto";
    font-weight: 700;
    font-size: 24px;
    color: #ffffff;
  }
`;

const MainContainer = styled.div`
  width: 326px;
  height: 446px;
  background-color: #ffffff;
`;
const FooterContainer = styled.div`
  display: flex;
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    margin-bottom: 8px;
    width: 156px;
    height: 114px;
    border-radius: 8px;
    border: 0px;
    background-color: #a328d6;
    color: #ffffff;
    cursor: pointer;
  }

  img {
    width: 10px;
    color: #ffffff;
  }
`;
