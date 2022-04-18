import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Facebook, Instagram, Linkedin } from "react-bootstrap-icons";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const Footer = () => {
  return (
    <div className={styles.bg_footer}>
      <Row className="justify-content-center align-items-center">
        <Col className={styles.rectangle}></Col>
      </Row>
      <Row>
        <Col xs={12} md={6} className="text-light mt-2 text-center justify-content-center align-items-center">
          <h1 className={styles.heading_footer}>&#47;&#47;SAIZ</h1>
          <div className={styles.ul_footer}>
            <ul className="default__list">
              <li>Berlin, Germany</li>
              <li>
                <a className="text-decoration-none" href="tel:+4915129270914">
                  +49 15129270914
                </a>
              </li>
              <li>
                <a
                  className="text-decoration-none"
                  href="mailto:svenja.tegtmeier@saiz.io"
                  rel="noreferrer"
                  target="_blank"
                >
                  Svenja.tegtmeier@saiz.io
                </a>
              </li>
            </ul>
          </div>
        </Col>
        <Col xs={12} md={6} className={styles.ul_footer}>
          <ul className="default__list mt-4 text-center">
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/aboutUs">
                <a>About</a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a>Contact</a>
              </Link>
            </li>
            <li>
              <Link href="/support">
                <a>Support</a>
              </Link>
            </li>
            {/* <li>
              <Link href="/agb">
                <a>AGB</a>
              </Link>
            </li> */}
            <li>
              <Link href="/impressumCompanyInfo">
                <a>Imprint</a>
              </Link>
            </li>
          </ul>
        </Col>
      </Row>
      <Row>
        <Col className="text-light text-center" xs={12} md={6}>
          <div className={styles.fav}>
            <Link href="https://www.facebook.com/saizio-110662541559209">
              <a className="link hover-black animate clr">
                <Facebook className="m-2" color="gray" size={35} />
              </a>
            </Link>
            <Link href="https://www.instagram.com/saiz.io/">
              <a>
                <Instagram className="m-2" color="gray" size={35} />
              </a>
            </Link>
            <Link href="https://www.linkedin.com/company/saiz-solutions/">
              <a>
                <Linkedin className="m-2" color="gray" size={35} />
              </a>
            </Link>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
