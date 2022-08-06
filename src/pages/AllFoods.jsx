import React, { useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/Common-section/CommonSection";

import { Container, Row, Col } from "reactstrap";

// import products from "../assets/fake-data/product";
import ProductCard from "../components/UI/Product-card/ProductCard";
import ReactPaginate from "react-paginate";
import { useSelector } from 'react-redux'

import "../styles/all-foods.css";
import "../styles/pagination.css";

const AllFoods = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryTerm, setCategoryTerm] = useState("");

  const [pageNumber, setPageNumber] = useState(0);

  const products = useSelector(state => state.food.foodList)
  const {VND} = useSelector(state => state.currency)

  let category = [];

  products.forEach((item) => {
    if (!category.includes(item.category)) category.push(item.category);
  });

  const searchedProduct = products.filter((item) => {
    if (categoryTerm === "") {
      if (searchTerm.value === "") {
        return item;
      }
      if (item.title.toLowerCase().includes(searchTerm.toLowerCase())) {
        return item;
      } else {
        return console.log("Không tìm được sản phẩm nào!!!");
      }
    } else if (item.category === categoryTerm) {
      if (searchTerm.value === "") {
        return item;
      }
      if (item.title.toLowerCase().includes(searchTerm.toLowerCase())) {
        return item;
      } else {
        return console.log("Không tìm được sản phẩm nào!!!");
      }
    }
  });

  const productPerPage = 8;
  const visitedPage = pageNumber * productPerPage;
  const displayPage = searchedProduct.slice(
    visitedPage,
    visitedPage + productPerPage
  );

  const pageCount = Math.ceil(searchedProduct.length / productPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <Helmet title="Món ăn">
      <CommonSection title="Món ăn"></CommonSection>

      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6">
              <div className="search__widget d-flex align-items-center justify-content-between w-50">
                <input
                  type="text"
                  placeholder="Tôi đang tìm ..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <span>
                  <i className="ri-search-line"></i>
                </span>
              </div>
            </Col>
            <Col lg="6" md="6" sm="6" className="mb-5">
              <div className="sorting__widget text-end">
                <select
                  className="w-50"
                  onChange={(e) => setCategoryTerm(e.target.value)}
                >
                  <option value="">Tất cả</option>
                  {category.map((item) => (
                    <option value={item} key={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>
            </Col>

            {displayPage.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mb-4">
                <ProductCard item={item} currency={VND}/>
              </Col>
            ))}

            <div>
              <ReactPaginate
                pageCount={pageCount}
                onPageChange={changePage}
                previousLabel="Prev"
                nextLabel="Next"
                containerClassName="paginationBttns"
              />
            </div>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default AllFoods;
