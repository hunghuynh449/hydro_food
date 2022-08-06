import React from "react";
import { Col, Container, Row } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/Common-section/CommonSection";
import "../styles/report.css";

const Report = () => {
  return (
    <Helmet title="Báo cáo">
      <CommonSection title={"Báo cáo"} />
      <section>
        <Container>
            <h1 className="text-center">Báo cáo Assignment</h1>
            <Row>
                <Col lg="12" md="12">
                    <div className="field">
                        <p><span className="highlight">Mô tả: </span>Đề tài Assignment làm về trang web bán đồ ăn Hydro Food với cả trang web là SPA</p>
                    </div>
                    <div className="field">
                        <p><span className="highlight">Công nghệ: </span>ReactJs</p>
                    </div>
                    <div className="field">
                        <span className="highlight">Các thư viện sử dụng:</span>
                        <ul>
                            <li><span className="highlight">Giao diện: </span>
                                <ul>
                                    <li>reactstrap: hỗ trợ component reactjs để build giao diện</li>
                                    <li>bootstrap: hỗ trợ css build giao diện</li>
                                    <li>remixicon: hỗ trợ tạo icon</li>
                                    <li>react-paginate: hỗ trợ phân trang</li>
                                </ul>
                            </li>
                            <li><span className="highlight">Điều hướng: </span>react-router-dom</li>
                            <li><span className="highlight">Lưu trữ state: </span>
                                <ul>
                                    <li>redux-toolkit: hỗ trợ tạo các slide reducer để dễ quản lý reducer</li>
                                    <li>redux-persist: tự động lưu các state bạn muốn vào localstorage</li>
                                    <li>redux-thunk: hỗ trợ side effect tạo các middleware trước khi vào reducer sau đó dispatch lại một action vào reducer</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="field">
                        <span className="highlight">Mô tả các route:</span>
                        <ul>
                            <li><span className="highlight">Home: </span>
                                <ul>
                                    <li>Banner, logan website</li>
                                    <li>Các loại đồ ăn phổ biến</li>
                                    <li>Giới thiệu các dịch vụ của website</li>
                                    <li>Chất lượng sản phẩm</li>
                                </ul>
                            </li>
                            <li><span className="highlight">Foods: </span>Danh sách tất cả món ăn</li>
                            <li><span className="highlight">Cart: </span>Trang giỏ hàng</li>
                            <li><span className="highlight">Checkout: </span>Trang xác nhận đơn hàng</li>
                            <li><span className="highlight">Contact: </span>Trang liên hệ</li>
                            <li><span className="highlight">Register: </span>Trang đăng ký tài khoản</li>
                            <li><span className="highlight">Login: </span>Trang đăng nhập</li>
                        </ul>
                    </div>
                    <div className="field">
                        <span className="highlight">Mô tả chức năng:</span>
                        <ul>
                            <li>Component Helmet thay đổi title website khi chuyển route</li>
                            <li>Responesive UI</li>
                            <li>Dữ liệu sản phẩm được fetch từ api về bằng redux(thunk) lưu vào state, localstorage(persist)</li>
                            <li>Tìm kiếm, lọc sản phẩm bằng các hàm xử lý dữ liệu tại trang FoodDetail</li>
                            <li>Lấy id theo sản phẩm bằng useParams của react-router-dom</li>
                            <li>Đăng nhập, lưu trạng thái đăng nhập vào localstorage(persist)</li>
                            <li>Trang giỏ hàng và giỏ hàng side</li>
                            <li>Thêm xóa sản phẩm và tính tổng tiền bằng redux</li>
                            <li>Chuyển đổi tiền tệ giữa VND và USD cho cả trang web</li>
                            <li>Deploy ứng dụng lên internet <a target={'_blank'} href="https://hydrofood.vercel.app">https://hydrofood.vercel.app</a></li>
                        </ul>
                    </div>
                </Col>
            </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Report;
