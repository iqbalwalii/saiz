import React from 'react';
import { useRouter } from 'next/router';
import { Container, Button, Card, Row, Col} from 'react-bootstrap';
import Head from "next/head"

export default function Unsubscribe(): JSX.Element {
  const router = useRouter();
  return (
<>
<Head>
        <title>&#47;&#47;SAIZ | Unsubscribe</title>
      </Head>
    <Container className='unsubscribe'>
      <Row>
        <Col xs={12} md={{span:6, offset:3}}>

      <Card>
        <Card.Body>
            <h1 className='text-center'>Unsubscribed</h1>
            <p className='text-center'>You have been Successfuly Unsubscribed from our Mailing list </p>
           <br/>
        </Card.Body>
      </Card>
        </Col>
      </Row>
    </Container>
</>
  );
}
