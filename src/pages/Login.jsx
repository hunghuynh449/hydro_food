import React, { useRef } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/Common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userActions } from "../store/userSlice";

const Login = () => {
  const loginNameRef = useRef();
  const loginPasswordRef = useRef();

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    const state = {
      name: loginNameRef.current.value,
      password: loginPasswordRef.current.value,
    };
    dispatch(userActions.login(state));
  };

  return (
    <Helmet title="Đăng nhập">
      <CommonSection title="Đăng nhập" />
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12" className="m-auto text-center">
              <form className="form mb-5" onSubmit={submitHandler}>
                <div className="form__group">
                  <input
                    type="text"
                    placeholder="Username"
                    required
                    ref={loginNameRef}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    ref={loginPasswordRef}
                  />
                </div>
                <button type="submit" className="addToCart__btn">
                  Đăng nhập
                </button>
              </form>
              <Link to="/register">Chưa có tài khoản? Tạo tài khoản</Link>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Login;
