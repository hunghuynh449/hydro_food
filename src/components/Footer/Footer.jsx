import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import logo from "../../assets/images/res-logo.png";

import "../../styles/footer.css";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3" md="4" sm="6">
            <div className="logo footer__logo text-start">
              <img src={logo} alt="logo" />
              <h5>Hydro Food</h5>
              <p>
                Hương vị độc đáo, phong cách phục vụ thân thiện, hết lòng vì
                khách hàng và bầu không khí nồng nhiệt, ấm cúng tại các nhà hàng
                là ba chìa khóa chính mở cánh cửa thành công của Hydro Food
              </p>
            </div>
          </Col>
          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Thời gian giao hàng</h5>
            <ListGroup className="delivery__time-list">
              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <span>Chủ nhật - Thứ 5</span>
                <p>10:00am - 11:00pm</p>
              </ListGroupItem>

              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <span>Thứ 6 - Thứ 7</span>
                <p>Nghỉ</p>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Liên hệ</h5>
            <ListGroup className="delivery__time-list">
              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <span>Địa chỉ: Lô 24 Công viên phần mềm Quang Trung</span>
              </ListGroupItem>

              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <span>Hotline: 0937231553</span>
              </ListGroupItem>

              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <span>Email: hunghqps14897@fpt.edu.vn</span>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Đăng ký nhận thông tin ưu đãi</h5>
            <div className="newsletter">
              <input type="text" placeholder="Nhập email của bạn" />
              <span>
                <i className="ri-send-plane-line"></i>
              </span>
            </div>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col lg="6" md="6">
            <p className="copyright__text">
              Copyright - 2022, Website made by Huỳnh Quốc Hưng.
            </p>
          </Col>
          <Col lg="6" md="6">
            <div className="social__links d-flex align-items-center gap-4 justify-content-end">
              <p className="m-0">Theo dõi: </p>
              <span>
                <a href="https://fb.com/hungdarealesttt">
                  <i className="ri-facebook-circle-fill"></i>
                </a>
              </span>
              <span>
                <a href="https://www.instagram.com/hydroiins/">
                  <i className="ri-instagram-fill"></i>
                </a>
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
