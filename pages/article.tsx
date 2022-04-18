import React from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from "next/image";

function article() {
  return (
    <>
      <Container className={styles.top}>
        <Row className="mb-5 d-flex align-items-center">
          <Col>
            <h1 className={styles.blog_header}>
              Lorem ipsum dolor sit amet, consectet adipiscing elit
            </h1>
            <hr />
            <h4 className="d-flex justify-content-center">
              15-03-22 | by Marita Sanchez
            </h4>
          </Col>

          <Col className="mb-5 d-flex align-items-center justify-content-center">
            <Card style={{ width: "38rem" }}>
              <Card.Img variant="top" src="/blog_1.jpg" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card&apos;s content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="mb-5">
          <h1 className={styles.blog_body}>
            Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusm
            por incididunt ut labore et dolore magna aliquat enim
          </h1>
        </Row>
        <Row>
          <p className={styles.blog_para}>
            Lorem ipsum dolor sit amet, consectet adipiscing elit,sed do eiusm
            por incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea sint occaecat cupidatat non proident, sunt in culpa qui officia
            mollit natoque consequat massa quis
          </p>
          <p className={styles.blog_para}>
            {" "}
            Donec pede justo, fringilla vitae, eleifend acer sem neque sed Lorem
            Lorem ipsum dolor sit amet, consectet adipiscing elit,sed do eiusm
            por incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ipsum. Nam
            quam nunc, blandit vel, ridiculus mus. Donec quam felis, ultricies
            nec, pellentesque eu,
          </p>
          <p className={styles.blog_para}>
            pretium consectetuer luculvinar, ids lorem. Maecenas nec odio et
            ante tincidunt tempus. Lorem ipsum dolor sit amet, consectet
            adipiscing elit,sed do eiusm por incididunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea sint occaecat cupidatat non
            proident, sunt in culpa qui officia mollit natoque consequat massa
            quis enim.
          </p>
        </Row>
        <Row className="mb-5">
          <Col>
            <Card style={{ width: "38rem" }}>
              <Card.Img variant="top" src="/blog_4.jpg" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card&apos;s content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <p className={styles.blog_para}>
              Lorem ipsum dolor sit amet, consectet adipiscing elit,sed do eiusm
              por incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea sint occaecat cupidatat non proident, sunt in culpa qui
              officia mollit natoque consequat massa quis
            </p>
            <p className={styles.blog_para}>
              {" "}
              Donec pede justo, fringilla vitae, eleifend acer sem neque sed
              Lorem Lorem ipsum dolor sit amet, consectet adipiscing elit,sed do
              eiusm por incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi
              ipsum. Nam quam nunc, blandit vel, ridiculus mus. Donec quam
              felis, ultricies nec, pellentesque eu,
            </p>
            <p className={styles.blog_para}>
              pretium consectetuer luculvinar, ids lorem. Maecenas nec odio et
              ante tincidunt tempus. Lorem ipsum dolor sit amet, consectet
              adipiscing elit,sed do eiusm por incididunt ut labore et dolore
              magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
              ullamco laboris nisi ut aliquip ex ea sint occaecat cupidatat non
              proident, sunt in culpa qui officia mollit natoque consequat massa
              quis enim.
            </p>
          </Col>
        </Row>
        <Row>
          <p className={styles.blog_para}>
            Lorem ipsum dolor sit amet, consectet adipiscing elit,sed do eiusm
            por incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea sint occaecat cupidatat non proident, sunt in culpa qui officia
            mollit natoque consequat massa quis
          </p>
          <p className={styles.blog_para}>
            {" "}
            Donec pede justo, fringilla vitae, eleifend acer sem neque sed Lorem
            Lorem ipsum dolor sit amet, consectet adipiscing elit,sed do eiusm
            por incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ipsum. Nam
            quam nunc, blandit vel, ridiculus mus. Donec quam felis, ultricies
            nec, pellentesque eu,
          </p>
          <p className={styles.blog_para}>
            pretium consectetuer luculvinar, ids lorem. Maecenas nec odio et
            ante tincidunt tempus. Lorem ipsum dolor sit amet, consectet
            adipiscing elit,sed do eiusm por incididunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea sint occaecat cupidatat non
            proident, sunt in culpa qui officia mollit natoque consequat massa
            quis enim.
          </p>
        </Row>
        <hr />
        <Row>
          <h1 className="display-1 d-flex justify-content-center mt-5 mb-5">
            You might also like
          </h1>
          <Col className="d-flex justify-content-center">
            <Card style={{ width: "38rem" }}>
              <Card.Img variant="top" src="/blog_1.jpg" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card&apos;s content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col className="d-flex justify-content-center">
            {" "}
            <Card style={{ width: "38rem" }}>
              <Card.Img variant="top" src="/blog_3.webp" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card&apos;s content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="mb-5 mt-5">
          <h1 className={styles.blog_header}>Be the first to know</h1>
          <h3 className="mt-3">
            Subscribe to receive life-changing weekly updates
          </h3>
          <Col className="mt-3">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
            </Form>
          </Col>
          <Col className="mt-5">
            <Button variant="dark" type="submit">
              Submit
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default article;
