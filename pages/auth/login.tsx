import { connect, useDispatch } from "react-redux";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { AuthActions } from "../../redux/actions/authActions";
import { LoginSchema } from "../../validationSchemas";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import {
  Alert,
  Button,
  FormGroup,
  Spinner,
  Row,
  Col,
  Container,
  Form,
} from "react-bootstrap";
import { LoginDto } from "../../api";
function Login(props: any) {
  const { auth, alert } = props;
  const dispatch = useDispatch();
  const router = useRouter();
  useEffect(() => {
    dispatch(AuthActions.logout());
  }, [dispatch]);
  const { register, handleSubmit } = useForm<LoginDto>({
    resolver: yupResolver(LoginSchema),
  });
  function onSubmit(input: LoginDto) {
    dispatch(AuthActions.login(input, router));
  }
  return (

      <Container>
        <Row className="d-flex justify-content-center align-items-center min-vh-100">
          {auth.loading ? (
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          ) : (
            <Col xs={12} md={4}>
              <h2 className="text-center mb-5">{"// LOGIN"}</h2>
              {alert?.showAlert === true && (
                <Alert variant={alert?.status.toLowerCase()}>
                  {alert?.message?.message}
                </Alert>
              )}
              <Form name="form" onSubmit={handleSubmit(onSubmit)}>
                <FormGroup className="mb-2">
                  <Form.Control
                    type="email"
                    placeholder="Email Address"
                    required={true}
                    {...register("username")}
                  />
                </FormGroup>
                <FormGroup className="mb-2">
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    required={true}
                    {...register("password")}
                  />
                </FormGroup>
                <div className="d-grid">
                  <Button type="submit" variant="dark">
                    Login
                  </Button>
                </div>
              </Form>
              {/* <div className="d-flex justify-content-center mt-3">
                <p>
                  Don&apos;t have account?{" "}
                  <Link href="/auth/register/saenlo">
                    <a>Register</a>
                  </Link>
                </p>
              </div> */}
            </Col>
          )}
        </Row>
      </Container>
  );
}
const mapStateToProps = (state: any) => {
  return { auth: state.AuthReducer, alert: state.AlertReducer };
};
export default connect(mapStateToProps)(Login);
