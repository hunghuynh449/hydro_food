import React, { useState, useEffect } from "react";

import Helmet from "../components/Helmet/Helmet.js";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";

import heroImg from "../assets/images/hero.png";
import "../styles/hero-section.css";
import { Link } from "react-router-dom";

import Category from "../components/UI/Category/Category.jsx";
import "../styles/home.css";

import featureImg01 from "../assets/images/service-01.png";
import featureImg02 from "../assets/images/service-02.png";
import featureImg03 from "../assets/images/service-03.png";

import productsAPI from "../assets/fake-data/product.js";
import foodCategoryImg01 from "../assets/images/hamburger.png";
import foodCategoryImg02 from "../assets/images/pizza.png";
import foodCategoryImg03 from "../assets/images/bread.png";

import ProductCard from "../components/UI/Product-card/ProductCard.jsx";

import whyImg from "../assets/images/location.png";

const featureData = [
  {
    title: "Giao hàng siêu tốc",
    imgUrl: featureImg01,
    desc: "Đội ngũ Shipper sẵn sàng giao đơn hàng của bạn nhanh siêu tốc",
    Minus: "doloremque",
  },
  {
    title: "Đại tiệc vàng",
    imgUrl: featureImg02,
    desc: "Hóa đơn trên 500k được giảm giá 5% tổng bill. Ăn thả ga, không lo về giá",
    Minus: "doloremque",
  },
  {
    title: "Đặt món dễ dàng",
    imgUrl: featureImg03,
    desc: "Dễ dàng đặt món qua hệ thống đặt hàng trên website",
    Minus: "doloremque",
  },
];

const Home = () => {
  const [category, setCategory] = useState("ALL");
  const products = productsAPI.filter(
    (item) =>
      item.category === "Burger" ||
      item.category === "Pizza" ||
      item.category === "Bread"
  );

  const [allProducts, setAllProducts] = useState(products);

  const [hotPizza, setHotPizza] = useState([]);

  useEffect(() => {
    const FilteredPizza = products.filter((item) => item.category === "Pizza");
    const slicePizza = FilteredPizza.slice(0, 4);
    setHotPizza(slicePizza);
  }, []);

  useEffect(() => {
    // load products by category
    if (category === "ALL") {
      setAllProducts(products);
    }
    if (category === "BURGER") {
      const filterProducts = products.filter(
        (item) => item.category === "Burger"
      );
      setAllProducts(filterProducts);
    }
    if (category === "BREAD") {
      const filterProducts = products.filter(
        (item) => item.category === "Bread"
      );
      setAllProducts(filterProducts);
    }
    if (category === "PIZZA") {
      const filterProducts = products.filter(
        (item) => item.category === "Pizza"
      );
      setAllProducts(filterProducts);
    }
  }, [category]);

  return (
    <Helmet title="Trang chủ">
      {/* === BANNER CONTENT START === */}
      <section className="home__banner">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <h5 className="mb-3">Dễ dàng đặt hàng</h5>
                <h1 className="mb-4 hero__title">
                  Nhìn là thích <span>CHÉN</span> là <span>NGON</span>
                </h1>

                <p>
                  Hương vị độc đáo, phong cách phục vụ thân thiện, hết lòng vì
                  khách hàng và bầu không khí nồng nhiệt, ấm cúng tại các nhà
                  hàng là ba chìa khóa chính mở cánh cửa thành công của Hydro
                  Food
                </p>

                <div className="hero__btns d-flex align-items-center gap-5 mt-4">
                  <button className="order__btn d-flex align-items-center justify-content-between">
                    <Link to="/foods">Đặt hàng ngay</Link>
                    <i className="ri-arrow-right-s-line"></i>
                  </button>

                  <button className="all__foods-btn">
                    <Link to="/foods">Xem menu</Link>
                  </button>
                </div>

                <div className="hero__service d-flex align-items-center gap-5 mt-5">
                  <p className="d-flex align-items-center gap-2">
                    <span className="shipping__icon">
                      <i className="ri-car-line"></i>
                    </span>
                    Vận chuyển nhanh chóng
                  </p>
                  <p className="d-flex align-items-center gap-2">
                    <span className="shipping__icon">
                      <i className="ri-shield-check-line"></i>
                    </span>
                    Thanh toán an toàn
                  </p>
                </div>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="hero_img">
                <img className="w-100" src={heroImg} alt="hero-img" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* === BANNER CONTENT END === */}

      {/* === FOODS CATEGORY START === */}
      <section className="home__category pt-0">
        <Category />
      </section>
      {/* === FOODS CATEGORY END === */}

      {/* === FEATURE'S US START === */}
      <section className="home__feature pt-0">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h5 className="feature__subtitle mb-4">
                Chúng tôi phụ vụ những gì?
              </h5>
              <h2 className="feature__title">Bạn chỉ cần ngồi tại nhà</h2>
              <h2 className="feature__title">
                chúng tôi sẽ <span>giao đồ ăn cho bạn</span>
              </h2>

              <p className="mb-1 mt-4 feature__text">
                Gọi ngay cho chúng tôi qua hotline: 1800 88xx
              </p>
            </Col>

            {featureData.map((item, index) => (
              <Col lg="4" md="6" sm="6" key={index} className="mt-5">
                <div className="feature__item text-center px-5 py-3">
                  <img
                    className="w-25 mb-3"
                    src={item.imgUrl}
                    alt="feature-img"
                  />
                  <h5 className="fw-bold mb-3">{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      {/* === FEATURE'S US END === */}

      {/* === LIST FOODS START === */}
      <section className="home__listFoods">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2>Món ăn phổ biến</h2>
            </Col>
            <Col lg="12">
              <div className="food__category d-flex align-items-center justify-content-center gap-2">
                <button
                  className={`all__btn ${
                    category === "ALL" ? "foodBtnActice" : ""
                  }`}
                  onClick={() => setCategory("ALL")}
                >
                  Tất cả
                </button>
                <button
                  className={`d-flex alignt-items-center gap-2 ${
                    category === "BURGER" ? "foodBtnActice" : ""
                  }`}
                  onClick={() => setCategory("BURGER")}
                >
                  <img src={foodCategoryImg01} alt="burger" />
                  Burger
                </button>
                <button
                  className={`d-flex alignt-items-center gap-2 ${
                    category === "PIZZA" ? "foodBtnActice" : ""
                  }`}
                  onClick={() => setCategory("PIZZA")}
                >
                  <img src={foodCategoryImg02} alt="pizza" />
                  Pizza
                </button>
                <button
                  className={`d-flex alignt-items-center gap-2 ${
                    category === "BREAD" ? "foodBtnActice" : ""
                  }`}
                  onClick={() => setCategory("BREAD")}
                >
                  <img src={foodCategoryImg03} alt="bread" />
                  Bánh mì
                </button>
              </div>
            </Col>

            {allProducts.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mt-5">
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      {/* === LIST FOOD END === */}

      {/* === CHOOSE US START === */}
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <img src={whyImg} alt="why-tasty-treat" className="w-100" />
            </Col>
            <Col lg="6" md="6">
              <div className="why__tasty-treat">
                <h2 className="tasty__treat-title">
                  Tại sao gà rán <span>Hydro Food</span> luôn ngon?
                </h2>
                <p>
                  Ngoài "Công thức bí mật" ra còn có các tiêu chí có thể bật mí
                  cho các bạn biết vì sao thức ăn của Hydro Food luôn ngon. Hãy
                  đọc các tiêu chí dưới đây nhé!
                </p>

                <ListGroup className="mt-5">
                  <ListGroupItem className=" border-0 ps-0">
                    <p className="choose__us-title d-flex align-items-center gap-2">
                      <i className="ri-checkbox-circle-line"></i>Tươi và thức ăn
                      ngon
                    </p>
                    <p className="tasty__treat-desc">
                      Chúng tôi hoàn toàn sử dụng thức ăn tươi sống để chế biến
                    </p>
                  </ListGroupItem>

                  <ListGroupItem className="border-0 ps-0">
                    <p className="choose__us-title d-flex align-items-center gap-2">
                      <i className="ri-checkbox-circle-line"></i>Nguyên liệu
                      chất lượng
                    </p>
                    <p className="tasty__treat-desc">
                      Nguyên liệu nhập khẩu đảm bảo chất lượng cao
                    </p>
                  </ListGroupItem>

                  <ListGroupItem className="border-0 ps-0">
                    <p className="choose__us-title d-flex align-items-center gap-2">
                      <i className="ri-checkbox-circle-line"></i>Đặt hàng ở bất
                      cứ đâu
                    </p>
                    <p className="tasty__treat-desc">
                      Hydro Food có mặt ở mọi tỉnh thành sẵn sàng phục vụ bạn
                    </p>
                  </ListGroupItem>
                </ListGroup>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* === CHOOSE US END === */}

      {/* === HOT PIZZA START === */}
      <section className="pt-0">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-4">
              <h2>Hot Pizza</h2>
            </Col>
            {hotPizza.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mb-4">
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      {/* HOT PIZZA END */}

      {/* === CONNECT START */}
      {/* <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="testimonial mb-4">
                <h5 className="testimonial__subtitle">Chứng nhận</h5>
                <h2 className="testimonial__title">
                  <span>Khách hàng</span> của chúng tôi nói gì
                </h2>
              </div>
            </Col>

            <Col lg="6" md="6">
              <img src={networkImg} alt="testimonial-img" className="w-100" />
            </Col>
          </Row>
        </Container>
      </section> */}
      {/* === CONNECT END */}
    </Helmet>
  );
};

export default Home;
