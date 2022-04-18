import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import style from '../styles/offline.module.css';
import Image from 'next/image';
const   offline = () => {
  return (
    <Container> 
        <Row>
            <Col xs={12} md={{span:4, offset:4}}>
            <div className={style.detector}>
                <Image src='/icon-256x256.png' width={144} height={144} alt='logo' />
                <p className='text-center'>You are offline <br /> Please Check Your Internet connection <br/> and try again</p>
            </div>

            </Col></Row>    </Container>
  )
}

export default  offline