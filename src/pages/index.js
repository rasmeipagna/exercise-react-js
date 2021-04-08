import * as React from "react"
import Layout from "../components/layout"
// import { Link } from 'gatsby'
import { Container, Row, Col } from 'react-bootstrap';
import css from "../assets/css/index.css"
import 'bootstrap/dist/css/bootstrap.min.css';

const IndexPage = () => {

  return (
    <Layout>

      {/* <Container> */}
      <Row sm={12} className="homeBkg">
        <div className="cropCircle">
          <h1>L'écoles des ingénieur·e·s en biotechnologies</h1>
          <span className="petit">
            <a href="https://www.cti-commission.fr/" target="_blank"><img src="https://www.supbiotech.fr/Content/images/design/logo-cti.png" alt="logo Commission des Titres d'Ingénieur" /></a>
            <span className="petitText">
              L’institut supérieur des biotechnologies<br /> de Paris
                        (Sup’Biotech) est reconnu par<br /> l’état et délivre
                        un diplôme d’ingénieur<br /> habilité par la CTI
                    </span>
          </span>
        </div>
        <div className="jpohome">
          <p className="titleBulle">Venez nous rencontrer</p>

        </div>
        <div className="contact-clic hpDesktop">
          <a className="documentation" href="">Documentation</a>
          <a className="candidature" href="">Candidature</a>
          <a className="entretien" href="">Agenda</a>
          <a className="rdvperso" href="">RDV <br /> personnalisé</a>
        </div>




      </Row>
      <Row id="presentation">
        <Container>
          <Col sm={4}>
            <div className="first-gauche">
              <h2>
                L’école<br />
            qui conjugue<br />
                <strong>biologie</strong> et<br />
                <strong>technologie</strong>
              </h2>
            </div>




          </Col>
          <Col  sm={4}>
            <div className="first-droit">
            </div>
          </Col>
        </Container>
      </Row>




      {/* </Container> */}



    </Layout>

  )
}

export default IndexPage