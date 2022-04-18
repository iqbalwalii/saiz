import { Col, Container, Row } from "react-bootstrap";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const AboutUs = () => {
  return (
    <>
      <Head>
        <title>&#47;&#47;SAIZ | About Us</title>
      </Head>
      <Container className={styles.top}>
        <Row>
          <Col xs={12} md={6}>
            <h1 className={styles.heading_aboutus}>About us</h1>
            <hr className={styles.hr} />
            <p className={styles.p}>
              We are a bunch of Tech enthusiasts, former brand owners,
              production experts, software engineers and AI nerds. All coming
              together in Berlin, Germany to answer the questions around sizing
              and E-comm. Troubled by the fact that we send things back and
              forth without using them, wanting to make a dent in an industry
              that we believe we can shape positively.
            </p>
          </Col>
          <Col xs={12} md={6} className="pt-5 mt-5">
            <blockquote className="order-1 order-lg-2 hero-img ">
              <div className=" blockquote-custom-icon text-center shadow-sm blockq">
                <h6 className="mt-5">00</h6>{" "}
              </div>
              <img
                src="/the_three-min.png"
                className={styles.img_fluid}
                alt=""
              />
            </blockquote>
          </Col>
        </Row>
        <Row className="my-5">
          <Col xs={12} md={6} className="pt-5">
            <blockquote className="order-1 order-lg-2 hero-img">
              <div className=" blockquote-custom-icon text-center shadow-sm blockq">
                <h6 className="mt-5">01</h6>{" "}
              </div>
              <img
                src="/brand_shop-min.png"
                className={styles.img_fluid}
                alt=""
              />
            </blockquote>
          </Col>
          <Col>
            <h4 className="mt-5">Welcome to the future of E-comm</h4>
            <h1 className="mt-5">{" It all started with a brand "} </h1>
            <p className={styles.p}>
              Our Co-founders experienced the lack of proper tech support when
              they were running their own brand. Solutions out there were not
              catering to their needs and really also quite inaccurate. With a
              mission to have precise and quick recommendations that work for
              every product they set out in 2021 to create the best solution for
              the E-comm sizing problem: saving brands costs, saving customers
              the hassle of sending things back and saving the planet from
              unnecessary CO2.{" "}
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AboutUs;
