import React from "react";
import styles from "../styles/Home.module.css";
import HubspotForm from "react-hubspot-form";
import Head from "next/head";
import { Container } from "react-bootstrap";

function support() {
  return (
    <>
      <Head>
        <title>&#47;&#47;SAIZ | Support</title>
      </Head>
      <Container className="mt-5 pt-5">
        <div className={styles.top}>
          <HubspotForm
            region="eu1"
            portalId="25513812"
            formId="01a97fb5-d49a-4401-9bbc-58033ab90497"
          />
        </div>
      </Container>
    </>
  );
}

export default support;
