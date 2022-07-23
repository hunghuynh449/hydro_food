import React from "react";

import CommonSection from "../components/UI/Common-section/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import "../styles/cart-page.css";
import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import { cartActions } from "../store/shopping-cart/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  return (
    <Helmet title="Giỏ hàng">
      <CommonSection title="Giỏ hàng của bạn" />
      <section>
        <Container>
          <Row>
            <Col lg="12">
              {cartItems.length === 0 ? (
                <h5 className="text-center">Giỏ hàng của bạn đang trống</h5>
              ) : (
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th className="text-center">Hình ảnh</th>
                      <th className="text-center">Tên món</th>
                      <th className="text-center">Giá</th>
                      <th className="text-center">Số lượng</th>
                      <th className="text-center">Xóa</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item) => (
                      <Tr item={item} key={item.id} />
                    ))}
                  </tbody>
                </table>
              )}

              {cartItems.length === 0 ? (
                <div className="mt-4">
                  <div className="cart__page-btn text-center">
                    <button className="addToCart__btn me-4">
                      <Link to="/foods">Tiếp tục chọn món</Link>
                    </button>
                  </div>
                </div>
              ) : (
                <div className="mt-4">
                  <h5>
                    Tổng tiền: $
                    <span className="cart__subtotal">{totalAmount}</span>
                  </h5>
                  <h5>Thuế và phí vận chuyển được tính khi thanh toán</h5>
                  <div className="cart__page-btn">
                    <button className="addToCart__btn me-4">
                      <Link to="/foods">Tiếp tục chọn món</Link>
                    </button>
                    <button className="addToCart__btn">
                      <Link to="/checkout">Tiến hành thanh toán</Link>
                    </button>
                  </div>
                </div>
              )}
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

const Tr = (props) => {
  const { id, image01, title, price, quantity } = props.item;
  const dispatch = useDispatch();

  const deleteItem = () => {
    dispatch(cartActions.deleteItem(id));
  };
  return (
    <tr>
      <td className="text-center cart__img-box">
        <img src={image01} alt="" />
      </td>
      <td className="text-center">{title}</td>
      <td className="text-center">${price}</td>
      <td className="text-center">{quantity} phần</td>
      <td className="text-center cart__item-del">
        <i className="ri-delete-bin-line" onClick={deleteItem}></i>
      </td>
    </tr>
  );
};

export default Cart;
