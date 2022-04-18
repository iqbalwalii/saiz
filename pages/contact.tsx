import React from "react";
import styles from "../styles/Home.module.css";
import HubspotForm from "react-hubspot-form";
import Head from "next/head";
import { Container } from "reactstrap";

function Contact() {
  return (
    <>
      <Head>
        <title>&#47;&#47;SAIZ | Contact</title>
      </Head>
      <Container className="mt-5 pt-5">
        <div className={styles.top}>
          <HubspotForm
            region="eu1"
            portalId="25513812"
            formId="75f6fbb7-21e1-49b7-bf7a-7f4cb35365d7"
          />
        </div>
      </Container>
    </>
  );
}

export default Contact;
