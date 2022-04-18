import { useEffect } from "react";
import { Spinner, Container, Row, Alert } from "react-bootstrap";
import { connect, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { AuthActions } from "../../redux/actions";
import { ProfileReducer } from "../../redux/reducers/profileReducer";
const Redirect = (props) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const token = router.query.accessCode;
  const {alert} = props;
  useEffect(() => {
    dispatch(AuthActions.authenticate(token, router));
  }, [dispatch, token, router]);
  return (
    <Container>
      <Row className="authenticating">
        {alert.message ? <Alert variant={alert.status}>
          {alert.message.message}
        </Alert>:
        <Spinner animation="border" variant="dark" />
  }</Row>
    </Container>
  );
};
const mapStateToProps = (state) => {
  return {
    user: state.AuthReducer,
    alert : state.AlertReducer
  };
};
export default connect(mapStateToProps)(Redirect);
