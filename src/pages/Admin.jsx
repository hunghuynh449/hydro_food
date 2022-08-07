import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import { addFoods, deleteFood, fetchFoodDetail, fetchFoods, updateFood } from "../store/food/foodSlice";
import "../styles/admin.css";

const Admin = () => {
  const dispatch = useDispatch();
  const productsAPI = useSelector((state) => state.food.foodList);
  //Initital data add
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [img1, setImg1] = useState("");
  const [img2, setImg2] = useState("");
  const [img3, setImg3] = useState("");

  const foodDetail = useSelector((state) => state.food.foodDetail);
  //Initital data edit
  const [nameEdit, setNameEdit] = useState('');
  const [priceEdit, setPriceEdit] = useState('');
  const [categoryEdit, setCategoryEdit] = useState('');
  const [img1Edit, setImg1Edit] = useState('');
  const [img2Edit, setImg2Edit] = useState('');
  const [img3Edit, setImg3Edit] = useState('');
  // const [foodEdit, setFoodEdit] = useState({});

  const [isPopup, setIsPopup] = useState(false);
  const [isReload, setIsReload] = useState(false);
  const { VND } = useSelector((state) => state.currency);

  useEffect(()=> {
    if(foodDetail) {
      setNameEdit(foodDetail.title)
      setPriceEdit(foodDetail.price)
      setCategoryEdit(foodDetail.category)
      setImg1Edit(foodDetail.image01)
      setImg2Edit(foodDetail.image02)
      setImg3Edit(foodDetail.image03)
    }
  },[foodDetail])

  useEffect(() => {
    dispatch(fetchFoods());
  }, [isPopup, isReload]);

  const getFoodDetail = (id) => {
    dispatch(fetchFoodDetail(id));
  };

  return (
    <Helmet title="Admin">
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
                                  <button
                                    className="btnEdit"
                                    onClick={() => {
                                      getFoodDetail(item.id)
                                      setIsPopup(true)
                                    }}
                                  >
                                    <p>Sửa</p>
                                  </button>
                                  <button className="btnDelete" onClick={() => {
                                    dispatch(deleteFood(item.id))
                                    setIsReload(prev => {console.log(prev); return !prev})
                                  }}>
                                    <p>Xóa</p>
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
                        <button
                          className="btnAdd"
                          onClick={(e) => {
                            e.preventDefault();
                            const data = {
                              title: name,
                              price,
                              category,
                              image01: img1,
                              image02: img2,
                              image03: img3,
                              desc: "",
                            };
                            dispatch(addFoods(data))
                            setName('')
                            setPrice('')
                            setCategory('')
                            setImg1('')
                            setImg2('')
                            setImg3('')
                            dispatch(fetchFoods())
                            setIsReload(prev => !prev)
                          }}
                        >
                          Thêm
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>

          {
            isPopup && (
            <div className="modal-admin">
              <i className="ri-close-circle-fill" onClick={()=> {
                setNameEdit('')
                setPriceEdit('')
                setCategoryEdit('')
                setImg1Edit('')
                setImg2Edit('')
                setImg3Edit('')
                setIsPopup(false)
              }}></i>
              <div className="edit-category">
                <div className="card card-admin">
                  <div className="card-header">
                    <h3>Sửa loại sản phẩm</h3>
                  </div>
                  <div className="card-body-admin">
                    <input
                      id="nameProductEdit"
                      type="text"
                      value={nameEdit}
                      placeholder="Nhập tên sản phẩm"
                      onChange={(e) => setNameEdit(e.target.value)}
                    />
                    <input
                      id="priceProductEdit"
                      type="text"
                      value={priceEdit}
                      placeholder="Nhập giá sản phẩm $"
                      onChange={(e) => setPriceEdit(e.target.value)}
                    />
                    <input
                      id="categoryProductEdit"
                      type="text"
                      value={categoryEdit}
                      placeholder="Nhập loại sản phẩm"
                      onChange={(e) => setCategoryEdit(e.target.value)}
                    />
                    <input
                      id="img1ProductEdit"
                      type="text"
                      value={img1Edit}
                      placeholder="Hình sản phẩm"
                      onChange={(e) => setImg1Edit(e.target.value)}
                    />
                    <input
                      id="img2ProductEdit"
                      type="text"
                      value={img2Edit}
                      placeholder="Hình sản phẩm"
                      onChange={(e) => setImg2Edit(e.target.value)}
                    />
                    <input
                      id="img3ProductEdit"
                      type="text"
                      value={img3Edit}
                      placeholder="Hình sản phẩm"
                      onChange={(e) => setImg3Edit(e.target.value)}
                    />
                    <button
                      className="btnUpdate"
                      onClick={(e) => {
                        e.preventDefault();
                        const payload = {
                          id: foodDetail ? foodDetail.id : 0,
                          data: {
                            title: nameEdit,
                            price: priceEdit,
                            category: categoryEdit,
                            image01: img1Edit,
                            image02: img2Edit,
                            image03: img3Edit,
                            desc: "",
                          }
                        };
                        dispatch(updateFood(payload))
                          .then(data => {
                            if( data.type === 'food/updateFood/fulfilled') {
                              setIsPopup(false)
                            }
                          })
                      }}
                    >
                      Lưu
                    </button>
                    {/* <button className="btnUpdate">Lưu</button> */}
                  </div>
                </div>
              </div>
            </div>
            )
          }

        </Container>
      </div>
    </Helmet>
  );
};

export default Admin;
