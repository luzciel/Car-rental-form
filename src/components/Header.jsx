import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";

const HeaderWrapper = styled.div`
  width: 100%;
  height: 4.3em;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: end;
  color: white;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);

  > ul {
    display: flex;
    margin-right: 2em;
    flex-direction: row;

    @media (max-width: 768px) {
      > li {
        &:nth-child(2) {
          margin-left: 14px;
          border-left: 2px solid #d7d7d7;
        }
      }
    }
  }
`;

const HeaderItem = styled.li`
  color: white;
  margin-left: 1.5em;
  font-size: 1.25em;
  display: flex;
  font-weight: 500;
  flex-direction: row;

  > a {
    color: var(--primary-color);
    text-decoration: none;
    padding: 0.2em 0.5em;
    border-radius: 8px;
    background-color: ${(props) =>
      props.active ? "var(--background-secondary-color)" : "transparent"};
  }

  @media (max-width: 768px) {
    > a {
      background-color: transparent;
      color: var(--secondary-color);
      margin-left: 0.5em;
      font-size: 0.6em;
      align-items: flex-start;
    }
  }
`;

const Header = () => {
  const location = useLocation();

  return (
    <HeaderWrapper>
      <ul>
        <HeaderItem active={location.pathname === "/"}>
          <NavLink exact to="/">
            Formulario
          </NavLink>
        </HeaderItem>
        <HeaderItem active={location.pathname === "/list"}>
          <NavLink to="/list">Lista formulario</NavLink>
        </HeaderItem>
      </ul>
    </HeaderWrapper>
  );
};

export default Header;
