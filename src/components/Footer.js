import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import Icon1 from "../assets/img/fiverr-circle-svgrepo-com.svg";
import Icon2 from "../assets/img/1929180_upwork_icon.svg";
import Icon3 from "../assets/img/likd.svg";
import signature from "../assets/img/signature.png";
import Mailform from './Mailform';
export default function Footer() {
    return (
        <footer className="footer">
          <Container>
            <Row className="align-items-center">
             <Mailform/>
             
              <Col   className="text-right text-sm-end">
                <div className="social-icon">
                <a href="https://fr.fiverr.com/elouachanabd189?up_rollout=true"><img src={Icon1} alt="fiverr" /></a>
                <a href="https://www.upwork.com/freelancers/~011c3387eae1ebfb0b"><img src={Icon2} alt="upwork" /></a>
                <a href="https://www.linkedin.com/in/elouachan-abdessamad-341717209/"><img src={Icon3} alt="linkden" /></a>
                </div>
                <p>Copyright 2023. All <img src={signature} alt='signature'/>  </p>
              </Col>
            </Row>
          </Container>
        </footer>
      )
    }




