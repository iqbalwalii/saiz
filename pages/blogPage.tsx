import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

function blogPage() {
  return (
    <>
      <Container>
        <Col className={styles.blog_header} xs={12} md={6} lg={12}>
          <div className={styles.headerTitles}>
            <span className={styles.headerTitlelg}>Clean Blog</span>
          </div>
          <img className={styles.blog_img} src="/co2-min.jpg" alt="" />
        </Col>

        <Row className="mb-5">
          <h1>Articles</h1>
        </Row>
        <Row className="mb-5">
          <Col className="d-flex justify-content-center" xs={12} md={6} lg={12}>
            <Card style={{ width: "38rem" }}>
              <Card.Img variant="top" src="/blog_1.jpg" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card&apos;s content.
                </Card.Text>
                <Button variant="dark" href="/article">
                  Go somewhere
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="mb-5">
          <Col className="d-flex justify-content-center" xs={12} md={6} lg={12}>
            <Card style={{ width: "38rem" }}>
              <Card.Img variant="top" src="/blog_1.jpg" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card&apos;s content.
                </Card.Text>
                <Button variant="dark" href="/article">
                  Go somewhere
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <div className="d-flex justify-content-end mb-4">
          <a className="btn btn-dark text-uppercase" href="#!">
            Older Posts →
          </a>
        </div>
      </Container>
    </>
  );
}

export default blogPage;
