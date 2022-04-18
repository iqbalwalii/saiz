import React from "react";
import { Container, Row } from "react-bootstrap";
import Head from "next/head";
import styles from "../styles/Home.module.css";

function ImpressumCompanyInfo() {
  return (
    <>
      <Head>
        <title>&#47;&#47;SAIZ | Impressum/Company Info</title>
      </Head>
      <Container className={styles.top}>
        <Row className="text-center">
          <h1>Imprint</h1>
          <ul className="list-unstyled">
            <li>SAIZ GmbH</li>
            <li>Nostitzstraße 23</li>
            <li>10961 Berlin</li>
            <li>Germany</li>
            <li>
              <a
                href="svenja.tegtmeier@saiz.io"
                rel="noreferrer"
                target="_blank"
              >
                svenja.tegtmeier@saiz.io
              </a>
            </li>
            <li>
              {" "}
              <a href="tel:++49 1512 9270914">+49 1512 9270914</a>
            </li>
          </ul>
          <ul className="list-unstyled">
            <li>
              Managing Director: Svenja Tegtmeier & Marita Sanchez de la Cerda
            </li>
            <li>Commercial Register: Amtsgericht Charlottenburg HRB 236707B</li>
            <li>German VAT-ID: tbd</li>
            <li>German Tax No.: 37/503/50789</li>
          </ul>
        </Row>
      </Container>
    </>
  );
}

export default ImpressumCompanyInfo;
