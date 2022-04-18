import React, {useEffect} from 'react'
import { AuthActions } from '../../redux/actions'
import { useDispatch, connect } from 'react-redux'
import { useRouter } from 'next/router'
import { Alert, Container, Row, Spinner } from 'react-bootstrap'
const Unsubscribe = (props) => {
  const {alert} = props;
  const router = useRouter();
  const token = router.query.token;
  console.log(token)
  const dispatch = useDispatch();
  useEffect(()=>{
      dispatch(AuthActions.unsubscribe(token, router))
  })
  return (
    <Container>
    <Row className="authenticating">
      {alert.message ? <Alert variant={alert.status}>
        {alert.message.message}
      </Alert>:
      <Spinner animation="border" variant="dark" />
}</Row>
  </Container>
  )
}
const mapStateToProps = (state) => {
  return {
    alert : state.AlertReducer
  };
};
export default connect(mapStateToProps)(Unsubscribe)