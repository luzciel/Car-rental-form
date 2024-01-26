import React from "react";
import styled from "styled-components";
import Form from "../components/Form";

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Line = styled.div`
  border-top: 1px solid #cccccc;
  margin: -5.4em 0 0;

  @media (max-width: 1200px) {
    display: none;
  }
`;

const HomeBanner = styled.div`
  min-width: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;

  > h1 {
    color: var(--primary-color);
    font-size: 3.5em;

    span.title-form {
      font-weight: 400;
    }

    span.title-test {
      font-weight: 600;
    }
  }

  @media (max-width: 992px) {
    min-width: auto;
    margin: 0 2.5em;

    > h1 {
      text-align: initial;
      font-size: 2.2em;
    }

    > img {
      width: 150px;
    }
  }

  @media (max-width: 512px) {
    justify-content: space-between;
  }
`;

const HomeForm = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5rem 25vw;

  > div {
    h2 {
      color: var(--secondary-color);
      font-size: 1.875em;
      font-weight: 600;
    }

    p {
      color: var(--secondary-color);
      margin-top: 1em;
      font-size: 1.5em;
      font-weight: 400;
    }
  }

  @media (max-width: 1200px) {
    > div {
      h2 {
        font-size: 1.4em;
        margin-bottom: 0.5em;
      }

      p {
        font-size: 0.9em;
      }
    }
  }
`;
const Home = () => {
  return (
    <HomeWrapper>
      <HomeBanner>
        <h1>
          <span className="title-form">Formulario</span>{" "}
          <span className="title-test">de Prueba</span>
        </h1>
        <img src="./src/assets/Laptop.svg" alt="laptop" />
      </HomeBanner>
      <Line></Line>
      <HomeForm>
        <div>
          <h2>Nuevo formulario</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the bed industry's standard dummy
            text ever since.
          </p>
        </div>
        <Form />
      </HomeForm>
    </HomeWrapper>
  );
};

export default Home;
