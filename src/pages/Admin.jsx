import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "reactstrap";
import { addFoods, fetchFoods } from "../store/food/foodSlice";
import "../styles/admin.css";

const Admin = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [img1, setImg1] = useState("");
  const [img2, setImg2] = useState("");
  const [img3, setImg3] = useState("");
  const productsAPI = useSelector((state) => state.food.foodList);
  const { VND } = useSelector((state) => state.currency);
  const dispatch = useDispatch()

  useEffect(()=> {
    dispatch(fetchFoods())
  })

  return (
    <div className="admin-container">
      <Container>
        <div className="main-content">
          <main>
            <div className="cards">
              <div className="card-single">
                <div>
                  <h1>54</h1>
                  <span>Người dùng</span>
                </div>
                <div>
                  <i className="ri-group-line"></i>
                </div>
              </div>
              <div className="card-single">
                <div>
                  <h1>3</h1>
                  <span>Loại sản phẩm</span>
                </div>
                <div>
                  <i className="ri-group-line"></i>
                </div>
              </div>
              <div className="card-single">
                <div>
                  <h1>9</h1>
                  <span>Sản phẩm</span>
                </div>
                <div>
                  <i className="ri-group-line"></i>
                </div>
              </div>
              <div className="card-single">
                <div>
                  <h1>200</h1>
                  <span>Lượt mua</span>
                </div>
                <div>
                  <i className="ri-group-line"></i>
                </div>
              </div>
            </div>

            <div className="recent-grid">
              <div className="category-admin">
                <div className="card">
                  <div className="card-header">
                    <h2>Sản phẩm</h2>
                  </div>
                  <div className="card-body-admin">
                    <table>
                      <thead>
                        <tr>
                          <td>ID Sản phẩm</td>
                          <td>Tên sản phẩm</td>
                          <td>Giá</td>
                          <td></td>
                        </tr>
                      </thead>
                      <tbody id="listCategory">
                        {productsAPI &&
                          productsAPI.map((item) => (
                            <tr key={item.id}>
                              <td>{item.id}</td>
                              <td>{item.title}</td>
                              <td>
                                {VND
                                  ? `${item.price * 23000} VND`
                                  : `$ ${item.price}`}
                              </td>
                              <td>
                                <button className="btnEdit">
                                  <a href="">Sửa</a>
                                </button>
                                <button className="btnDelete">
                                  <a href="">Xóa</a>
                                </button>
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div className="add-category">
                <div className="card">
                  <div className="card-header">
                    <h3>Thêm sản phẩm</h3>
                  </div>
                  <div className="card-body-admin">
                    <form action="">
                      <input
                        id="nameProduct"
                        type="text"
                        value={name}
                        placeholder="Nhập tên sản phẩm"
                        onChange={(e) => setName(e.target.value)}
                      />
                      <input
                        id="priceProduct"
                        type="text"
                        value={price}
                        placeholder="Nhập giá sản phẩm $"
                        onChange={(e) => setPrice(e.target.value)}
                      />
                      <input
                        id="categoryProduct"
                        type="text"
                        value={category}
                        placeholder="Nhập loại sản phẩm"
                        onChange={(e) => setCategory(e.target.value)}
                      />
                      <input
                        id="img1Product"
                        type="text"
                        value={img1}
                        placeholder="Hình sản phẩm"
                        onChange={(e) => setImg1(e.target.value)}
                      />
                      <input
                        id="img2Product"
                        type="text"
                        value={img2}
                        placeholder="Hình sản phẩm"
                        onChange={(e) => setImg2(e.target.value)}
                      />
                      <input
                        id="img3Product"
                        type="text"
                        value={img3}
                        placeholder="Hình sản phẩm"
                        onChange={(e) => setImg3(e.target.value)}
                      />
                      <button className="btnAdd" onClick={(e)=>{
                        e.preventDefault()
                        console.log(name, price, category)
                        const data = {
                            title: name,
                            price,
                            category,
                            image01: img1,
                            image02: img2,
                            image03: img3,
                            desc: ''
                        }
                        dispatch(addFoods(data))
                      }}>Thêm</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>

        <div className="modal">
          <i className="fas fa-times"></i>
          <div className="edit-category">
            <div className="card">
              <div className="card-header">
                <h3>Sửa loại sản phẩm</h3>
              </div>
              <div className="card-body-admin">
                <input
                  id="nameCategoryEdit"
                  name="nameEdit"
                  type="text"
                  value=""
                  placeholder="Nhập tên loại"
                />
                <button className="btnUpdate">Lưu</button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Admin;
