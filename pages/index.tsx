import Head from "next/head";
import Image from "next/image";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import styles from "../styles/Home.module.css";


export default function Home() {
  return (
    <>
      <Head>
        <title>&#47;&#47;SAIZ | Home</title>
      </Head>
      <Container className={styles.top}>
        <Row>
          <Col xs={12} md={6}>
            <h1 className={styles.header_home}>
              Making online <br />
              sizing simple. <br /> Simpler, {"//SAIZ"}
            </h1>
            <hr className={styles.hr} />
            <p className={styles.p}>
              Sizing made simple for any brand, even yours! Slash returns & turn
              browsers into buyers in seconds, with the click of a <q>magic </q>{" "}
              button. The only online shopping assistant you&apos;ll ever need.
            </p>
            <div className={styles.button}>
              <Button
                variant="dark"
                size="lg"
                href="https://calendly.com/marita-sanchez/saiz-demo?month=2022-03"
              >
                Book a demo
              </Button>{" "}
            </div>
          </Col>
          <Col xs={12} md={6} className="mt-5">
            <blockquote className="order-1 order-lg-2 hero-img blackquote">
              <div className="blockquote-custom-icon text-center shadow-sm blockq">
                <h6 className="mt-5">00</h6>{" "}
              </div>
              <img
                src="/saizlanding-min.jpg"
                className={styles.img_fluid}
                alt=""
              />
            </blockquote>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6} className="mt-5">
            <blockquote className="order-1 order-lg-2 hero-img blackquote">
              <div className=" blockquote-custom-icon text-center shadow-sm blockq">
                <h6 className="mt-5">01</h6>{" "}
              </div>
              <img
                src="/section2-min.jpeg"
                className={styles.img_fluid}
                alt=""
              />
            </blockquote>
          </Col>
          <Col xs={12} md={6}>
            <h5 className="mt-5">Welcome to the future of E-comm</h5>
            <Row>
              <Col>
                <h2 className="mt-5">{" Reduce your returns"} </h2>
              </Col>
              <Col>
                <h1 className="mt-5">&#47;&#47;001</h1>
              </Col>
            </Row>

            <p className={styles.p}>
              50% of online fashion returns are due to inaccurate sizing & fit.
              {"//SAIZ"} provides your customers with the fastest, most accurate
              product recommendation, making size related returns a thing of the
              past! No more double-size orders.{" "}
            </p>
            <h5 className="col-12 text-center">How it works</h5>
          </Col>
        </Row>

        <Row className="mt-5">
          <Image src="/info-min.jpg" width="2000px" height="900px" />
        </Row>

        <Row className="mt-5">
          <Col xs={12} md={6}>
            <div
              className=" sidesym "
              style={{
                position: "absolute",
                marginTop: "10%",
                marginLeft: "-6%",
              }}
            >
              <h5
                className={styles.vertical}
                style={{ writingMode: "vertical-rl" }}
              >
                {"//SAIZ"}
              </h5>
            </div>
            <blockquote className="order-1 order-lg-2 hero-img blackquote">
              <div className=" blockquote-custom-icon text-center mx-5 shadow-sm blockq">
                <h6 className="mt-5">02</h6>{" "}
              </div>
              <img
                src="/section3-min.jpg"
                className={styles.img_fluid}
                alt=""
              />
            </blockquote>
          </Col>
          <Col xs={12} md={6}>
            <h2 className=" col-sm-auto col-xl-8">
              {" "}
              <h1> {"//02"}</h1>
              Know your customers <br />
              {"- before they shop!"}
            </h2>
            <p className={styles.p}>
              Did you know that you most likely loose 60% of customers just
              because they are not sure what size to order?
            </p>
            <p className={styles.p}>
              Provide them with their correct size, before they can even ask
              “what size am I”. One time sign up, endless size recommendations -
              within 1 second. We are committed to the most seamless shopping
              experience - for you and your customers.{" "}
            </p>
            <Button
              className="mt-5 ms-5"
              variant="dark"
              size="lg"
              href="https://calendly.com/marita-sanchez/saiz-demo?month=2022-03"
            >
              Book a demo
            </Button>{" "}
          </Col>
        </Row>

        <Row className="mt-5 justify-content-center">
          <Image src="/4icons.png" width="1500px" height="500px" />
        </Row>

        <Row className="mt-5">
          <Col xs={12} md={6}>
            <h1> {"//03 "}</h1>
            <h2>{"Improve your impact on the planet."} </h2>
            <p className={styles.p}>
              Let //SAIZ be one of your leading sustainability initiatives.
              Yearly, 4.7 Mio Tonnes of CO2 are emitted globally through
              unnecessary fashion returns.
            </p>
            <p className={styles.p}>
              Let’s sell smarter, and ship less. Become the next //SAIZ partner
              brand - and let’s change the industry together!{" "}
            </p>
            <Button
              className="mt-5 ms-5 mb-5"
              variant="dark"
              size="lg"
              href="/contact"
            >
              Contact Us
            </Button>{" "}
          </Col>
          <Col xs={12} md={6} className="pb-5">
            <blockquote className="order-1 order-lg-2 hero-img blackquote">
              <div className=" blockquote-custom-icon text-center shadow-sm blockq">
                <h6 className="mt-5">03</h6>{" "}
              </div>
              <img src="/co2-min.jpg" className={styles.img_fluid} alt="" />
            </blockquote>
          </Col>
        </Row>
        <Row className={styles.bottom_arrow}>
        <a href="#" className="o-scroll-up" title="back to top">
  <span className="o-scroll-up-text"><button type="button" className="btn btn-light"><h2>^</h2></button></span>
  <span className="o-scroll-up-icon" aria-hidden="true"></span>
</a>
</Row>
      </Container>
    </>
  );
}
function handleClose() {}
