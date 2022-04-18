import React from "react";
import { Container, Navbar, Nav, NavLink } from "react-bootstrap";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import {connect, useDispatch} from 'react-redux';
import {AuthActions} from '../redux/actions/authActions'

function Navigation(props) {
  const {auth} = props;
  const dispatch = useDispatch();
  const logoutHandler = (
    )=>{
    dispatch(AuthActions.logout());
    
  }
  return (
    <>
      <Navbar
        fixed="top"
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
      >
        <Container>
          <Navbar.Brand href="/home">
            <NavLink href="/">
              <Image
                src="/SAIZblack.png"
                alt="fitsme"
                width="170px"
                height="60px"
              />
            </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto lead">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/aboutUs">About Us</Nav.Link>
              {/* <Nav.Link href="/">Pricing</Nav.Link> */}
              <Nav.Link href="/contact">Contact</Nav.Link>
              {auth?.user?.access_token ? (<Nav.Link onClick={logoutHandler}>Logout</Nav.Link>):(<Nav.Link href='/auth/login'>Login</Nav.Link>)}
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
const mapStateToProps = (state: any) => {
  return {
    auth: state.AuthReducer,
    alert: state.alertReducer,
  };
};
export default connect(mapStateToProps)(Navigation);
