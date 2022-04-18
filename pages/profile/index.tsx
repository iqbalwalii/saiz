import React, { useEffect } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { ProfileSchema } from "../../validationSchemas/profileSchema";
import { ProfileActions } from "../../redux/actions/profileActions";
import { connect, useDispatch } from "react-redux";
import { ChangeProfileDto } from "../../api";
import { useRouter } from "next/router";
import Head from "next/head";
import {
  Button,
  Card,
  Col,
  Form,
  Row,
  Spinner,
  Container,
} from "react-bootstrap";

function Profile(props: any) {
  const { auth, alert, profile, brand } = props;
  const router = useRouter();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(ProfileActions.getProfile(auth?.user?.access_token));
  }, [auth?.user?.access_token, dispatch]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ChangeProfileDto>({
    resolver: yupResolver(ProfileSchema(profile?.user)),
  });
  function onSubmit(input: any) {
    dispatch(ProfileActions.updateProfile(input, auth?.user?.access_token, router));
  }
  return (
    <>
    <Head>
        <title>&#47;&#47;SAIZ | Profile</title>
      </Head>
    <Container>
      <Row>
        <Col className='updateProfileCard'>
        <h2 className='text-center'>Update</h2>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3" controlId="firstName">
                  <Form.Control
                    type="text"
                    placeholder="first name"
                    {...register("firstName")}
                    defaultValue={profile?.user?.firstName}
                  />
                  {errors?.firstName && <span>This field is required</span>}
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="last name"
                    {...register("lastName")}
                    defaultValue={profile?.user?.lastName}
                  />
                  {errors?.lastName && <span>This field is required</span>}
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    {...register("password")}
                  />
                  {errors?.password && <span>This field is required</span>}
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="password"
                    placeholder="Confirm Password"
                    {...register("confirmPassword")}
                  />
                  {errors?.confirmPassword && (
                    <span>This field is required</span>
                  )}
                </Form.Group>
                <div className="d-grid">
                  <Button variant="dark" type="submit">
                    Update
                  </Button>
                </div>
              </Form>
         
        </Col>
      </Row>
    </Container>
    </>

  );
}

const mapStateToProps = (state: any) => {
  return {
    auth: state.AuthReducer,
    alert: state.AlertReducer,
    profile: state.ProfileReducer,
    brand: state.BrandReducer,
  };
};
export default connect(mapStateToProps)(Profile);
