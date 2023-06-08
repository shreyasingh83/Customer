import React, { useState } from 'react';
import Navbar1 from "../Navbar1";
import "./side.css";
import "./women.css";
import Dropdown from "react-bootstrap/Dropdown";

import { Row, Col, Card, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";


const Women = () => {
  return (
    <>
      <div>
        <Navbar1 />
      </div>
      <div class="sidenav" style={{ marginTop: "53px" }}>
        <h6>Filter</h6>
       <hr/>
        <p>Price</p>
       <hr/>
        <p>Size</p>
       <hr/>
        <p>Colour</p>
       <hr/>
      </div>

      <div className="mainpp" style={{ marginTop: "6rem" }}>
        <Container>
          <Row>
            <Col>
              <Card style={{ width: "14rem" }} className="photo">
                <Card.Img
                  variant="top"
                  className='image'
                  src="https://newcdn.kalkifashion.com/media/catalog/product/k/a/kalki_bride_baraat_formula_one-sg105301_9_.jpg"
                />
                <Card.Body>
                  <Card.Title style={{ fontSize: "14px" }}>
                    Rani Pink Floral Embroidered Lehenga
                  </Card.Title>
                  <Card.Text style={{ marginBottom: "2px", fontSize: "14px" }}>
                    ₹ 39999.00
                    <br />
                    ⭐⭐⭐⭐
                  </Card.Text>
                  <Link to="/component/wcart"><Button variant="warning" className="fw-bold">
                    Add to Cart
                  </Button></Link>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "14rem" }} className="photo">
                <Card.Img
                className='image'
                  variant="top"
                  src="https://newcdn.kalkifashion.com/media/catalog/product/t/a/tara_sutaria_accentuating_kalki_bridal_couture-sg127243_3_.jpg"
                />
                <Card.Body>
                  <Card.Title style={{ fontSize: "14px" }}>
                    Enigmatic Rani Bridal Lehenga
                  </Card.Title>
                  <Card.Text style={{ marginBottom: "2px", fontSize: "14px" }}>
                    ₹ 59999.00
                    <br />
                    ⭐⭐⭐⭐⭐
                  </Card.Text>
                  <Link to="/component/wcart"><Button variant="warning" className="fw-bold">
                    Add to Cart
                  </Button></Link>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "14rem" }} className="photo">
                <Card.Img
                className='image'
                  variant="top"
                  src="https://manyavar.scene7.com/is/image/manyavar/ULB4619V-416-%20Nandini-3_19-04-2023-07-34:650x900"
                />
                <Card.Body>
                  <Card.Title style={{ fontSize: "14px" }}>
                    Berry Red Georgette Lehenga
                  </Card.Title>
                  <Card.Text style={{ marginBottom: "2px", fontSize: "14px" }}>
                    ₹ 17999.00
                    <br />
                    ⭐⭐⭐
                  </Card.Text>
                  <Link to="/component/wcart"><Button variant="warning" className="fw-bold">
                    Add to Cart
                  </Button></Link>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "14rem" }} className="photo">
                <Card.Img
                className='image'
                  variant="top"
                  src="https://manyavar.scene7.com/is/image/manyavar/MOHEY%20013854_edited%20(3)_21-04-2023-13-01:650x900"
                />
                <Card.Body>
                  <Card.Title style={{ fontSize: "14px" }}>
                    Regal Rani Bridal Lehenga
                  </Card.Title>
                  <Card.Text style={{ marginBottom: "2px", fontSize: "14px" }}>
                    ₹ 29999.00
                    <br />
                    ⭐⭐
                  </Card.Text>
                  <Link to="/component/wcart"><Button variant="warning" className="fw-bold">
                    Add to Cart
                  </Button></Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card style={{ width: "14rem" }} className="photo">
                <Card.Img
                  variant="top"
                  className='image'
                  src="https://manyavar.scene7.com/is/image/manyavar/MOHEY%20023971%20(1)_07-10-2022-18-05-1:650x900
            "
                />
                <Card.Body>
                  <Card.Title style={{ fontSize: "14px" }}>
                    Coral Blue Floral Art Nouveau Patterned Bridal Lehenga
                  </Card.Title>
                  <Card.Text style={{ marginBottom: "2px", fontSize: "14px" }}>
                    ₹ 44999.00
                    <br />
                    ⭐⭐⭐⭐⭐
                  </Card.Text>
                  <Link to="/component/wcart"><Button variant="warning" className="fw-bold">
                    Add to Cart
                  </Button></Link>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "14rem" }} className="photo">
                <Card.Img
                  variant="top"
                  className='image'
                  src="https://manyavar.scene7.com/is/image/manyavar/ULB4638-403%20jpg_30-03-2023-19-07:650x900"
                 
                />
                <Card.Body>
                  <Card.Title style={{ fontSize: "14px" }}>
                    Geranium Pink Bel Buti Patterned Bridal Lehenga
                  </Card.Title>
                  <Card.Text style={{ marginBottom: "2px", fontSize: "14px" }}>
                    ₹ 45999.00
                    <br />
                    ⭐⭐⭐⭐
                  </Card.Text>
                  <Button variant="warning" className="fw-bold">
                    Add to Cart
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "14rem" }} className="photo">
                <Card.Img
                  variant="top"
                  className='image'
                  src="https://manyavar.scene7.com/is/image/manyavar/I01_IMGL6708_11-03-2022-19-51:650x900"
                />
                <Card.Body>
                  <Card.Title style={{ fontSize: "14px" }}>
                    Sapphire Blue Velvet
                  </Card.Title>
                  <Card.Text style={{ marginBottom: "2px", fontSize: "14px" }}>
                    {" "}
                    ₹ 34999.00
                    <br />
                    ⭐⭐⭐⭐⭐
                  </Card.Text>
                  <Button variant="warning" className="fw-bold">
                    Add to Cart
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "14rem" }} className="photo">
                <Card.Img
                className='image'
                  variant="top"
                  src="https://manyavar.scene7.com/is/image/manyavar/I01_IMGL6148%20copy%20copy_11-10-2021-20-20:650x900"
                />
                <Card.Body>
                  <Card.Title style={{ fontSize: "14px" }}>
                    Ruby Red Zari Embroidered
                  </Card.Title>
                  <Card.Text style={{ marginBottom: "2px", fontSize: "14px" }}>
                    ₹ 74999.00
                    <br />
                    ⭐⭐⭐
                  </Card.Text>
                  <Button variant="warning" className="fw-bold">
                    Add to Cart
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card style={{ width: "14rem" }} className="photo">
                <Card.Img
                  variant="top"
                  className='image'
                  src="https://manyavar.scene7.com/is/image/manyavar/141222-1-1021_12-05-2021-17-58:650x900"
                />
                <Card.Body>
                  <Card.Title style={{ fontSize: "14px" }}>
                    Plum and Pink Embroidered Lehenga
                  </Card.Title>
                  <Card.Text style={{ marginBottom: "2px", fontSize: "14px" }}>
                    ₹ 19999.00
                    <br />
                    ⭐⭐⭐⭐
                  </Card.Text>
                  <Button variant="warning" className="fw-bold">
                    Add to Cart
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "14rem" }} className="photo">
                <Card.Img
                  variant="top"
                  className='image'
                  src="https://manyavar.scene7.com/is/image/manyavar/ULB4340-422_02_12-05-2021-15-09:650x900"
                />
                <Card.Body>
                  <Card.Title style={{ fontSize: "14px" }}>
                    Georgette Wine Red Lehenga
                  </Card.Title>
                  <Card.Text style={{ marginBottom: "2px", fontSize: "14px" }}>
                    ₹ 19999.00
                    <br />
                    ⭐⭐
                  </Card.Text>
                  <Button variant="warning" className="fw-bold">
                    Add to Cart
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "14rem" }} className="photo">
                <Card.Img
                  variant="top"
                  className='image'
                  src="https://manyavar.scene7.com/is/image/manyavar/ULB4556-408426Shreya-1%20(2)_19-04-2023-07-34:650x900"
                />
                <Card.Body>
                  <Card.Title style={{ fontSize: "14px" }}>
                    Berry Red Velvet Lehenga
                  </Card.Title>
                  <Card.Text style={{ marginBottom: "2px", fontSize: "14px" }}>
                    {" "}
                    ₹ 19999.00
                    <br />
                    ⭐⭐⭐⭐
                  </Card.Text>
                  <Button variant="warning" className="fw-bold">
                    Add to Cart
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "14rem" }} className="photo">
                <Card.Img
                className='image'
                  variant="top"
                  src="https://img.perniaspopupshop.com/catalog/product/a/d/ADGP052321_1.jpg?impolicy=detailimageprod"
                />
                <Card.Body>
                  <Card.Title style={{ fontSize: "14px" }}>
                    Rani Embroidered Bridal Lehenga
                  </Card.Title>
                  <Card.Text style={{ marginBottom: "2px", fontSize: "14px" }}>
                    ₹ 34999.00
                    <br />
                    ⭐⭐⭐
                  </Card.Text>
                  <Button variant="warning" className="fw-bold">
                    Add to Cart
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card style={{ width: "14rem" }} className="photo">
                <Card.Img
                className='image'
                  variant="top"
                  src="https://cdn.shopify.com/s/files/1/0265/9847/3783/products/9834_6_400x.jpg?v=1665997137"
                />
                <Card.Body>
                  <Card.Title style={{ fontSize: "14px" }}>
                    Midnight Blue Woven Lehenga Set
                  </Card.Title>
                  <Card.Text style={{ marginBottom: "2px", fontSize: "14px" }}>
                    ₹82,800.00
                    <br />
                    ⭐⭐⭐⭐
                  </Card.Text>
                  <Button variant="warning" className="fw-bold">
                    Add to Cart
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "14rem" }} className="photo">
                <Card.Img
                className='image'
                  variant="top"
                  src="https://cdn.shopify.com/s/files/1/0265/9847/3783/products/9520_1_700x.jpg?v=1601111935"
                />
                <Card.Body>
                  <Card.Title style={{ fontSize: "14px" }}>
                    Pink Silk Embroidered Lehenga Set
                  </Card.Title>
                  <Card.Text style={{ marginBottom: "2px", fontSize: "14px" }}>
                    ₹53,100.00
                    <br />
                    ⭐⭐
                  </Card.Text>
                  <Button variant="warning" className="fw-bold">
                    Add to Cart
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "14rem" }} className="photo">
                <Card.Img
                  variant="top"
                  className='image'
                  src="	https://cdn.shopify.com/s/files/1/0265/9847/3783/products/9852_1_671f7b2f-40a3-40a9-b89f-065bb1be2df5_400x.jpg?v=1665997830"
                />
                <Card.Body>
                  <Card.Title style={{ fontSize: "14px" }}>
                    Pistachio Green Floral Patterned Bridal Lehenga
                  </Card.Title>
                  <Card.Text style={{ marginBottom: "2px", fontSize: "14px" }}>
                    {" "}
                    ₹ 51999.00
                    <br />
                    ⭐⭐⭐⭐
                  </Card.Text>
                  <Button variant="warning" className="fw-bold">
                    Add to Cart
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "14rem" }} className="photo">
                <Card.Img
                  variant="top"
                  className='image'
                  src="	https://cdn.shopify.com/s/files/1/0265/9847/3783/products/9841_2_700x.jpg?v=1665997630"
                />
                <Card.Body>
                  <Card.Title style={{ fontSize: "14px" }}>
                    Enigmatic Blue Velvet Lehenga
                  </Card.Title>
                  <Card.Text style={{ marginBottom: "2px", fontSize: "14px" }}>
                    ₹ 29999.00
                    <br />
                    ⭐⭐⭐
                  </Card.Text>
                  <Button variant="warning" className="fw-bold">
                    Add to Cart
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <div class="copyright-area">
        <div class="container">
          <div class="row">
            <div class="col-xl-6 col-lg-6 text-center text-lg-left">
              <div class="copyright-text">
                <p>Copyright &copy; 2023, All Right Reserved</p>
              </div>
            </div>
            <div class="col-xl-6 col-lg-6 d-none d-lg-block text-right">
              <div class="footer-menu">
                <ul>
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/component/women">Women</a>
                  </li>
                  <li>
                    <a href="/component/men">Men</a>
                  </li>
                  <li>
                    <a href="/component/kids">Kids</a>
                  </li>
                  <li>
                    <a href="/component/jewellery">Jewellery</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Women;
