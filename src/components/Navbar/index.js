import React from "react";
import {
  Nav,
  Bars,
  NavBtn,
  NavBtnLink,
  NavLink,
  Img,
  NavMenu,
} from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <Img>
            <img
              width={75}
              src={require("../../assets/photo1.jpeg")}
              alt="logo"
            />
          </Img>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/sobre-nós" activeStyle>
            Sobre nós
          </NavLink>
          <NavLink to="/cardapio" activeStyle>
            Cardápio
          </NavLink>
          <NavLink to="/contato" activeStyle>
            Entre em contato conosco
          </NavLink>
          {/* <NavBtnLink to="/signin">Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/signin">Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
