import * as React from "react"
import { Link } from 'gatsby'
import { Navbar, NavDropdown, Nav, Form, FormControl, Button } from 'react-bootstrap'
import { Container, Row, Col } from 'react-bootstrap';
import { Helmet } from "react-helmet";
import css from "../assets/css/menu.css"
import 'bootstrap/dist/css/bootstrap.min.css';

const NavSupbiotech = () => {


  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Sup'Biotech</title>
        <link rel="canonical" href="http://www.supbiotech.fr" />
        <link rel="https://www.supbiotech.fr/Content/css/style.css?v=09122020" />
        <link rel="https://www.supbiotech.fr/Content/css/menu.css?v=23072020" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap" rel="stylesheet" />
        <link rel="shortcut icon" type="image/x-icon" href="https://www.supbiotech.fr/Content/images/design/favicon.ico"></link>
      </Helmet>
      <Navbar fixed="top">
        <Navbar.Brand href="https://www.supbiotech.fr">
          <ul className="main">
            <li>
              <a href="/" className="logo">
                <img src="https://www.supbiotech.fr/Content/images/design/logo-supbiotech.png" alt="Logo supbiotech" className="topLogo" />
                {/* <img src="https://www.supbiotech.fr//Content/images/design/logo-supbiotech.png" alt="Logo supbiotech" className={css.scrollLogo} /> */}
              </a>
            </li>
          </ul>

        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" fixed="top" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto" className="cbpHrmenu">


            <NavDropdown className="menuInline firstEntry" title="école" id="basic-nav-dropdown">
              <div className="cbpHrsubInner">              
                <Col sm={7} className="leftSubMenu">
                  <div className="leftMenuContenair">
                  <ul>
                    <li><a href="">Présentation</a></li>
                    <li><a href="">Les biotechnologies</a></li>
                    <li><a href="">Équipe</a></li>
                    <li><a href="">IONIS Education Group</a></li>
                    <li><a href="">Agenda</a></li>
                    <li><a href="">Formation labellisée</a></li>
                    <li><a href="">Pédagogie Numérique</a></li>
                    <li><a href="">Actualités de l'école</a></li>
                    <li><a href="">IONIS mag</a></li>
                  </ul>
                  </div>
                </Col>
                <Col sm={5} className="rightSubMenu">
                  <div className="contactClic">
                  <a className="documentation" href="">Documentation</a>
                  <a className="candidature" href="">Candidature</a>
                  <a className="entretien" href="">Agenda</a>
                  <a className="rdvperso" href="">RDV <br /> personnalisé</a>
                  </div>
                </Col>               
              </div>
              <div className="clearfix"></div>
            </NavDropdown>
            <NavDropdown className="menuInline" title="études" id="basic-nav-dropdown">
            <div className="cbpHrsubInner">              
                <Col sm={7} className="leftSubMenu">
                  <div className="leftMenuContenair">
                  <ul>
                    <li><a href="">Présentation</a></li>
                    <li><a href="">Les biotechnologies</a></li>
                    <li><a href="">Équipe</a></li>
                    <li><a href="">IONIS Education Group</a></li>
                    <li><a href="">Agenda</a></li>
                    <li><a href="">Formation labellisée</a></li>
                    <li><a href="">Pédagogie Numérique</a></li>
                    <li><a href="">Actualités de l'école</a></li>
                    <li><a href="">IONIS mag</a></li>
                  </ul>
                  </div>
                </Col>
                <Col sm={5} className="rightSubMenu">
                  <div className="contactClic">
                  <a className="documentation" href="">Documentation</a>
                  <a className="candidature" href="">Candidature</a>
                  <a className="entretien" href="">Agenda</a>
                  <a className="rdvperso" href="">RDV <br /> personnalisé</a>
                  </div>
                </Col>               
              </div>
              <div className="clearfix"></div>
            </NavDropdown>
            <NavDropdown className="menuInline" title="recherche" id="basic-nav-dropdown">
            <div className="cbpHrsubInner">              
                <Col sm={7} className="leftSubMenu">
                  <div className="leftMenuContenair">
                  <ul>
                    <li><a href="">Présentation</a></li>
                    <li><a href="">Les biotechnologies</a></li>
                    <li><a href="">Équipe</a></li>
                    <li><a href="">IONIS Education Group</a></li>
                    <li><a href="">Agenda</a></li>
                    <li><a href="">Formation labellisée</a></li>
                    <li><a href="">Pédagogie Numérique</a></li>
                    <li><a href="">Actualités de l'école</a></li>
                    <li><a href="">IONIS mag</a></li>
                  </ul>
                  </div>
                </Col>
                <Col sm={5} className="rightSubMenu">
                  <div className="contactClic">
                  <a className="documentation" href="">Documentation</a>
                  <a className="candidature" href="">Candidature</a>
                  <a className="entretien" href="">Agenda</a>
                  <a className="rdvperso" href="">RDV <br /> personnalisé</a>
                  </div>
                </Col>               
              </div>
              <div className="clearfix"></div>
            </NavDropdown>
            <NavDropdown className="menuInline" title="international" id="basic-nav-dropdown">
            <div className="cbpHrsubInner">              
                <Col sm={7} className="leftSubMenu">
                  <div className="leftMenuContenair">
                  <ul>
                    <li><a href="">Présentation</a></li>
                    <li><a href="">Les biotechnologies</a></li>
                    <li><a href="">Équipe</a></li>
                    <li><a href="">IONIS Education Group</a></li>
                    <li><a href="">Agenda</a></li>
                    <li><a href="">Formation labellisée</a></li>
                    <li><a href="">Pédagogie Numérique</a></li>
                    <li><a href="">Actualités de l'école</a></li>
                    <li><a href="">IONIS mag</a></li>
                  </ul>
                  </div>
                </Col>
                <Col sm={5} className="rightSubMenu">
                  <div className="contactClic">
                  <a className="documentation" href="">Documentation</a>
                  <a className="candidature" href="">Candidature</a>
                  <a className="entretien" href="">Agenda</a>
                  <a className="rdvperso" href="">RDV <br /> personnalisé</a>
                  </div>
                </Col>               
              </div>
              <div className="clearfix"></div>
            </NavDropdown>
            <NavDropdown className="menuInline borderEntry" title="Doc & Admission" id="basic-nav-dropdown">
            <div className="cbpHrsubInner">              
                <Col sm={7} className="leftSubMenu">
                  <div className="leftMenuContenair">
                  <ul>
                    <li><a href="">Présentation</a></li>
                    <li><a href="">Les biotechnologies</a></li>
                    <li><a href="">Équipe</a></li>
                    <li><a href="">IONIS Education Group</a></li>
                    <li><a href="">Agenda</a></li>
                    <li><a href="">Formation labellisée</a></li>
                    <li><a href="">Pédagogie Numérique</a></li>
                    <li><a href="">Actualités de l'école</a></li>
                    <li><a href="">IONIS mag</a></li>
                  </ul>
                  </div>
                </Col>
                <Col sm={5} className="rightSubMenu">
                  <div className="contactClic">
                  <a className="documentation" href="">Documentation</a>
                  <a className="candidature" href="">Candidature</a>
                  <a className="entretien" href="">Agenda</a>
                  <a className="rdvperso" href="">RDV <br /> personnalisé</a>
                  </div>
                </Col>               
              </div>
              <div className="clearfix"></div>
            </NavDropdown>
            <NavDropdown className="menuInline" title="entreprise" id="basic-nav-dropdown">
            <div className="cbpHrsubInner">              
                <Col sm={7} className="leftSubMenu">
                  <div className="leftMenuContenair">
                  <ul>
                    <li><a href="">Présentation</a></li>
                    <li><a href="">Les biotechnologies</a></li>
                    <li><a href="">Équipe</a></li>
                    <li><a href="">IONIS Education Group</a></li>
                    <li><a href="">Agenda</a></li>
                    <li><a href="">Formation labellisée</a></li>
                    <li><a href="">Pédagogie Numérique</a></li>
                    <li><a href="">Actualités de l'école</a></li>
                    <li><a href="">IONIS mag</a></li>
                  </ul>
                  </div>
                </Col>
                <Col sm={5} className="rightSubMenu">
                  <div className="contactClic">
                  <a className="documentation" href="">Documentation</a>
                  <a className="candidature" href="">Candidature</a>
                  <a className="entretien" href="">Agenda</a>
                  <a className="rdvperso" href="">RDV <br /> personnalisé</a>
                  </div>
                </Col>               
              </div>
              <div className="clearfix"></div>
            </NavDropdown>
            <NavDropdown className="menuInline" title="après Sup'Biotech" id="basic-nav-dropdown">
            <div className="cbpHrsubInner">              
                <Col sm={7} className="leftSubMenu">
                  <div className="leftMenuContenair">
                  <ul>
                    <li><a href="">Présentation</a></li>
                    <li><a href="">Les biotechnologies</a></li>
                    <li><a href="">Équipe</a></li>
                    <li><a href="">IONIS Education Group</a></li>
                    <li><a href="">Agenda</a></li>
                    <li><a href="">Formation labellisée</a></li>
                    <li><a href="">Pédagogie Numérique</a></li>
                    <li><a href="">Actualités de l'école</a></li>
                    <li><a href="">IONIS mag</a></li>
                  </ul>
                  </div>
                </Col>
                <Col sm={5} className="rightSubMenu">
                  <div className="contactClic">
                  <a className="documentation" href="">Documentation</a>
                  <a className="candidature" href="">Candidature</a>
                  <a className="entretien" href="">Agenda</a>
                  <a className="rdvperso" href="">RDV <br /> personnalisé</a>
                  </div>
                </Col>               
              </div>
              <div className="clearfix"></div>
            </NavDropdown>
            <Nav.Link className="menuInline entryConctact" href="#link">contact</Nav.Link>
          </Nav>
         
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default NavSupbiotech