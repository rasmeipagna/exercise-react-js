import * as React from "react"
import { Link } from 'gatsby';
import { Container, Row, Col } from 'react-bootstrap';
import css from "../assets/css/footer.css"
import 'bootstrap/dist/css/bootstrap.min.css';

const FooterPage = () => {

  return (


    <footer>
      <Container>
        <Row sm={12}>

          <Col sm={5} >
            <h3>A propos</h3>
            <p>
              Sup'Biotech est une école d’ingénieur·e·s spécialisée en biotechnologies à Paris et à Lyon, proche du monde de la Recherche comme du monde de l'Entreprise, qui propose une formation innovante en 5 ans après le bac. Ce cursus permet aux étudiants d'accéder rapidement à des postes à responsabilités, en France comme à l'International, dans les secteurs très porteurs de la santé et la pharmacie, de l’innovation agroalimentaire, de la cosmétique, de la bio-informatique ou encore de l'environnement. Les études, combinant fondamentaux académiques, projets étudiants et stages en entreprise, sont découpées en deux parties selon la norme européenne : le cycle Préparatoire et le cycle Ingénieur.  la formation des ingénieur·e·s en biotechnologies de Sup'Biotech est labellisée par Medicen Paris Région et Industries and Agro-Ressources (I.A.R.).
              Sup’Biotech propose également une filière apprentissage à partir de bac+3, ainsi qu’une formation Bachelor en Biotechnologies, accessible après le bac.
              Sup’Biotech est un établissement d’enseignement supérieur privé habilité à délivrer le titre d’ingénieur et reconnu par l’État (arrêté du 15/12/14 et B.O du 08/01/15).
                      </p>
          </Col>
          <Col sm={3}>
            <h3></h3>
            <ul>
              <li><img src="https://www.supbiotech.fr/Content/images/design/cti-logo.jpg" /></li>
              <li><img src="https://www.supbiotech.fr/Content/images/design/logo-iar.png" /></li>
            </ul>
          </Col>
          <Col sm={4}>
            <h3>Infos pratiques</h3>
            <ul>
              <li><Link to="#">Contacts</Link></li>
              <li><Link to="#">Newsroom</Link></li>
              <li><Link to="#">Revue de Presse</Link></li>
              <li><Link to="#">Plan du site</Link></li>
              <li><Link to="#">Mentions Légales</Link></li>
              <li><Link to="#">Politique De Cookies</Link></li>
              <li><Link to="#">C.G.V</Link></li>
              <li><Link to="#">Agenda</Link></li>
            </ul>

          </Col>

        </Row>
        <Row className="justify-content-md-center">

          <Col sm={5}>
            <h3>Nous contacter en 1 clic</h3>
          </Col>
          <Col sm={2}>
            <ul>
              <li><img src="" /></li>
              <li><img src="" /></li>
              <li><img src="" /></li>
              <li><img src="" /></li>
              <li><img src="" /></li>
              <li><img src="" /></li>
            </ul>
          </Col>
          <Col sm={3}>

            <h3>Agenda</h3>

          </Col>

        </Row>
      </Container>
    </footer>



  )
}

export default FooterPage