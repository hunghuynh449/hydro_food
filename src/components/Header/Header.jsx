import React, { useRef, useEffect } from "react";
import { Container } from "reactstrap";
import logo from "../../assets/images/res-logo.png";
import { NavLink, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { cartUiActions } from "../../store/shopping-cart/cartUiSlice";

import "../../styles/header.css";
import { userActions } from "../../store/userSlice";
import { useNavigate } from "react-router-dom";

const nav__links = [
  {
    display: "Trang chủ",
    path: "/home",
  },
  {
    display: "Món ăn",
    path: "/foods",
  },
  {
    display: "Giỏ hàng",
    path: "/cart",
  },
  {
    display: "Liên hệ",
    path: "/contact",
  },
];

const Notice = ({ content, ref }) => {
  const noticeRef = useRef(null);
  console.log(noticeRef);
  noticeRef !== null &&
    setTimeout(() => {
      noticeRef.current.classList.add("hidden");
      // noticeRef.current.classList.remove("notice");
    }, 2000);
  return (
    <div className="notice" ref={noticeRef}>
      <p>{content}</p>
    </div>
  );
};

const Header = () => {
  const menuRef = useRef(null);
  const headerRef = useRef(null);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");

  const toggleCart = () => {
    dispatch(cartUiActions.toggle());
  };

  const logout = () => {
    dispatch(userActions.logout());
  };

  useEffect(() => {
    user.auth && navigate("/", { replace: true });
  }, [user]);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("header__shrink");
      } else {
        headerRef.current.classList.remove("header__shrink");
      }

      return () => window.removeEventListener("scroll");
    });
  });
  return (
    <header className="header" ref={headerRef}>
      {user.auth && <Notice content={user.response} />}
      <Container>
        <div className="nav__wrapper d-flex align-items-center justify-content-between">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="logo" />
              <h5>Hydro Food</h5>
            </Link>
          </div>

          {/* === Menu === */}

          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <div className="menu d-flex align-items-center gap-5">
              {nav__links.map((item, index) => (
                <NavLink
                  to={item.path}
                  key={index}
                  className={({ isActive }) => {
                    return isActive ? "active__menu" : "";
                  }}
                >
                  {item.display}
                </NavLink>
              ))}
            </div>
          </div>

          {/* === Nav-right-icons === */}

          <div className="nav__right d-flex align-items-center gap-4">
            <span className="cart__icon" onClick={toggleCart}>
              <i className="ri-shopping-basket-line"></i>
              <span className="cart__badge">{totalQuantity}</span>
            </span>
            <span className="user">
              {user.auth ? (
                <div className="d-flex align-content-center gap-1">
                  <p>{user.name}</p>
                  <i className="ri-logout-box-line" onClick={logout}></i>
                </div>
              ) : (
                <Link to="/login">
                  <i className="ri-user-line"></i>
                </Link>
              )}
            </span>

            <span className="mobile__menu" onClick={toggleMenu}>
              <i className="ri-menu-line"></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
