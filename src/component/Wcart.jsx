import React from "react";
import { Button, Col, Container, Row,Card } from "react-bootstrap";
import Navbar1 from "../Navbar1";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import "./wcart.css";
import "./footer.css";
import { Divider } from "@mui/material";
const Wcart = () => {
  return (
    <div className="main">
      <Navbar1 />
      <Container style={{ marginTop: "5rem" }} fluid>
        <Row>
          <Col style={{ width: "1" }}>
            <div className="d-flex mx-4">
              <div className="photo mx-4">
                <img
                className="image"
                  src="https://newcdn.kalkifashion.com/media/catalog/product/k/a/kalki_bride_baraat_formula_one-sg105301_9_.jpg"
                  width="350"
                  alt="myimage"
                  height="450"
                />
              </div>
              <div className="photo">
                <img
                alt="myimage"
                className="image"
                  src="https://newcdn.kalkifashion.com/media/catalog/product/k/a/kalki_bride_baraat_formula_one-sg105301_7_.jpg"
                  width="350"
                  height="450"
                />
              </div>
            </div>
            <div className="d-flex mx-4 my-4">
               <div className="photo mx-4">
                <img
                 className="image"
                  src="https://newcdn.kalkifashion.com/media/catalog/product/k/a/kalki_bride_baraat_formula_one-sg105301_6_.jpg"
                  width="350"
                  alt="myimage"
                  height="450"
                />
              </div>
              <div className="photo">
                <img
                 className="image"
                 alt="myimage"
                  src="https://newcdn.kalkifashion.com/media/catalog/product/k/a/kalki_bride_baraat_formula_one-sg105301_5_.jpg"
                  width="350"
                  height="450"
                />
              </div>
            </div>
            <div className="d-flex mx-4 my-4">
               <div className="photo mx-4">
                <img
                  src="https://newcdn.kalkifashion.com/media/catalog/product/k/a/kalki_bride_baraat_formula_one-sg105301_8_.jpg"
                  width="350"
                  alt="myimage"
                  className="image"
                  height="450"
                />
              </div>
            </div>
          </Col>
          <Col>
            <>
              <div className="heading" style={{ marginTop: "1rem" }}>
                <h4
                  style={{
                    marginBottom: "0",
                    fontFamily: "'Nunito', sans-serif",
                    color: "black",
                  }}
                >
                  Rani Pink Floral Embroidered <br /> Lehenga
                </h4>
              </div>
              <sub
                style={{ fontSize: "14px", fontFamily: "'Nunito', sans-serif" }}
              >
                Product Code : ULB4491-425
              </sub>
              <p style={{ marginBottom: "0", marginTop: "15px" }}>
                <span
                  style={{
                    fontWeight: "800",
                    fontFamily: "'Nunito', sans-serif",
                  }}
                >
                  ₹ 39999.00
                </span>{" "}
                <span>
                  <del style={{ fontFamily: "'Nunito', sans-serif" }}>
                    MRP ₹4999
                  </del>
                </span>{" "}
                <span
                  style={{
                    fontWeight: "700",
                    letterSpacing: ".5px",
                    color: "#ff905a",
                    fontFamily: "'Nunito', sans-serif",
                  }}
                >
                  (60% OFF)
                </span>
              </p>
              <sub
                style={{
                  fontSize: "14px",
                  fontWeight: "700",
                  color: "#03a685",
                  fontFamily: "'Nunito', sans-serif",
                }}
              >
                inclusive of all taxes
              </sub>
            </>
            <div className="size" style={{ marginTop: "20px" }}>
              <p
                style={{
                  fontSize: "13px",
                  fontWeight: "700",
                  fontFamily: "'Nunito', sans-serif",
                  color: "black",
                }}
              >
                SELECT SIZE
              </p>
              <div className="d-flex">
                <div className="size1">XS</div>
                <div className="size1">S</div>
                <div className="size1">M</div>
                <div className="size1">L</div>
                <div className="size1">XL</div>
                <div className="size1">XXL</div>
              </div>
            </div>
            <div style={{ marginTop: "1.5rem" }}>
              <Button
                style={{
                  backgroundColor: "#ff527b",
                  fontSize: "15px",
                  width: "15rem",
                  height: "3rem",
                  fontWeight: "700",
                  fontFamily: "'Nunito', sans-serif",
                }}
              >
                <ShoppingBagIcon style={{ marginRight: "12px" }} />
                Add to Bag
              </Button>
              <Button
                style={{
                  backgroundColor: "white",
                  fontWeight: "800",
                  color: "black",
                  border: "1px solid #838383",
                  marginLeft: "15px",
                  fontSize: "17px",
                  width: "15rem",
                  height: "3rem",
                  fontFamily: "'Nunito', sans-serif",
                }}
              >
                <FavoriteBorderIcon style={{ marginRight: "12px" }} />
                Wishlist
              </Button>
            </div>
            <Divider style={{ marginTop: "40px" }} />

            {/* Delivery Options */}

            <div>
              <p
                style={{
                  fontFamily: "'Nunito', sans-serif",
                  fontWeight: "700",
                  marginTop: "30px",
                }}
              >
                Delivery Options <LocalShippingOutlinedIcon />{" "}
              </p>
              <FormControl
                sx={{ m: 1, width: "17vw", height: "15px" }}
                variant="outlined"
              >
                <OutlinedInput
                  id="outlined-adornment-weight"
                  placeholder="Enter Pincode"
                  style={{ height: "45px" }}
                  endAdornment={
                    <InputAdornment position="end">
                      <span
                        style={{
                          color: "#ff527b",
                          fontWeight: "800",
                          fontFamily: "'Nunito',sans-serif",
                        }}
                      >
                        Check
                      </span>
                    </InputAdornment>
                  }
                  aria-describedby="outlined-weight-helper-text"
                  inputProps={{
                    "aria-label":
                      "Please enter PIN code to check delivery time & Pay on Delivery Availability",
                  }}
                />
                <FormHelperText
                  id="outlined-weight-helper-text"
                  style={{ width: "28rem" }}
                >
                  Please enter PIN code to check delivery time & Pay on Delivery
                  Availability
                </FormHelperText>
              </FormControl>
            </div>
            <div style={{ marginTop: "4rem" }}>
              <p style={{ fontFamily: "'Nunito',sans-serif" }}>
                100% Original Products
              </p>
              <p style={{ fontFamily: "'Nunito',sans-serif" }}>
                Pay on delivery might be available
              </p>
              <p style={{ fontFamily: "'Nunito',sans-serif" }}>
                Easy 7 days returns and exchanges
              </p>
              <p style={{ fontFamily: "'Nunito',sans-serif" }}>
                Try & Buy might be available
              </p>
            </div>
            <div className="offers">
              <p
                style={{
                  fontFamily: "'Nunito', sans-serif",
                  fontWeight: "700",
                  marginTop: "30px",
                  color: "black",
                }}
              >
                Best Offers <LocalOfferOutlinedIcon />{" "}
              </p>
              <p
                style={{
                  fontFamily: "'Nunito',sans-sertif",
                  fontWeight: "700",
                  color: "black",
                }}
              >
                Best Price:
                <span style={{ color: "#ff905a", fontWeight: "700" }}>
                  {" "}
                  ₹ 38999.00
                </span>
              </p>
              <li style={{ fontFamily: "'Nunito',sans-sertif" }}>
                Applicable on: Orders above ₹ 38999.00 (only on first purchase)
              </li>
              <li style={{ fontFamily: "'Nunito',sans-sertif" }}>
                Coupon code:
                <span
                  style={{
                    fontWeight: "800",
                    fontFamily: "'Nunito',sans-sertif",
                    color: "black",
                  }}
                >
                  {" "}
                  MYNTRA1000
                </span>
              </li>
              <li style={{ fontFamily: "'Nunito',sans-sertif" }}>
                Coupon Discount: Rs. 1000 off (check cart for final savings)
              </li>
            </div>
            <div>
              <p
                style={{
                  fontFamily: "'Nunito', sans-serif",
                  fontWeight: "700",
                  marginTop: "30px",
                  color: "black",
                }}
              >
                EMI option available{" "}
              </p>
              <li
                style={{ fontFamily: "'Nunito',sans-sertif", fontSize: "15px" }}
              >
                EMI starting from Rs.94/month
              </li>
            </div>
            <div className="product">
              <p
                style={{
                  fontFamily: "'Nunito', sans-serif",
                  fontWeight: "700",
                  marginTop: "30px",
                  color: "black",
                }}
              >
                Product {" "} Details {" "}<ArticleOutlinedIcon />{" "}
              </p>
              <p
                style={{ fontFamily: "'Nunito',sans-sertif", fontSize: "15px" }}
              >
                Look gorgeous at any festive event by wearing this lovely
                lehenga <br />
                choli set. It has a sequinned detail and embroidered design and
                a <br /> solid flared bottom to complete the look.{" "}
              </p>
              <p
                style={{
                  fontFamily: "'Nunito',sans-sertif",
                  fontSize: "15px",
                  marginBottom: "3px",
                }}
              >
                Enchanting green colour
              </p>
              <p
                style={{
                  fontFamily: "'Nunito',sans-sertif",
                  fontSize: "15px",
                  marginBottom: "3px",
                }}
              >
                Classy embroidered lehenga with solid choli
              </p>
              <p
                style={{
                  fontFamily: "'Nunito',sans-sertif",
                  fontSize: "15px",
                  marginBottom: "3px",
                }}
              >
                Graceful round neckline
              </p>
              <p
                style={{
                  fontFamily: "'Nunito',sans-sertif",
                  fontSize: "15px",
                  marginBottom: "3px",
                }}
              >
                Elegant flared hemline
              </p>
              <p
                style={{
                  fontFamily: "'Nunito',sans-sertif",
                  fontSize: "15px",
                  marginBottom: "3px",
                }}
              >
                Classy solid dupatta
              </p>
              <p
                style={{
                  fontFamily: "'Nunito', sans-serif",
                  fontWeight: "700",
                  marginTop: "15px",
                  color: "black",
                }}
              >
                Trend Alert{" "}
              </p>
              <p
                style={{ fontFamily: "'Nunito',sans-sertif", fontSize: "15px" }}
              >
                Belted details not only help accentuate your waist but also
                <br />
                elevate the style appeal of your outfit. From adding a bow to
                <br />
                embellishing with metallic accents, thread embroidery, mirror
                <br />
                work, this trend is here to stay.
              </p>
              <p
                style={{
                  fontFamily: "'Nunito', sans-serif",
                  fontWeight: "700",
                  marginTop: "15px",
                  color: "black",
                }}
              >
                Size & Fit{" "}
              </p>
              <p
                style={{
                  fontFamily: "'Nunito',sans-sertif",
                  fontSize: "15px",
                  marginBottom: "3px",
                }}
              >
                The model (height 5'8) is wearing a size S
              </p>
              <p
                style={{
                  fontFamily: "'Nunito', sans-serif",
                  fontWeight: "700",
                  marginTop: "15px",
                  color: "black",
                }}
              >
                Material & Care{" "}
              </p>
              <p
                style={{
                  fontFamily: "'Nunito',sans-sertif",
                  fontSize: "15px",
                  marginBottom: "1px",
                }}
              >
                Blouse fabric: Pure Georgette
              </p>
              <p
                style={{
                  fontFamily: "'Nunito',sans-sertif",
                  fontSize: "15px",
                  marginBottom: "1px",
                }}
              >
                Lehenga fabric: Poly Georgette
              </p>
              <p
                style={{
                  fontFamily: "'Nunito',sans-sertif",
                  fontSize: "15px",
                  marginBottom: "1px",
                }}
              >
                Lehenga lining fabric: Shantoon
              </p>
              <p
                style={{
                  fontFamily: "'Nunito',sans-sertif",
                  fontSize: "15px",
                  marginBottom: "1px",
                }}
              >
                Dupatta fabric: Poly Georgette
              </p>
              <p
                style={{
                  fontFamily: "'Nunito',sans-sertif",
                  fontSize: "15px",
                  marginBottom: "2px",
                }}
              >
                Dry clean
              </p>
            </div>
          </Col>
        </Row>
        <Row style={{marginTop:"5rem"}}>
          <h6 style={{color:"black",fontWeight:"800",fontFamily:"'Nunito',sans-serif",marginBottom:"2rem"}}>Similar Product</h6>
          <Col>
          <Card style={{ width: "14rem" }} className="photo">
                <Card.Img
                 className="image"
                  variant="top"
                  src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/12622736/2020/11/27/75af524c-9995-4196-819a-0203ad31a14c1606467752219-Mitera-Women-Lehenga-Choli-7101606467749067-1.jpg"
                />
                <Card.Body>
                  <Card.Title style={{ fontSize: "14px" }}>
                  Navy Blue Lehenga & Blouse with Dupatta
                  </Card.Title>
                  <Card.Text style={{ marginBottom: "2px", fontSize: "14px" }}>
                    ₹ 15999.00
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
                 className="image"
                  variant="top"
                  src="https://assets.myntassets.com/f_webp,h_560,q_90,w_420/v1/assets/images/15330444/2021/9/22/db5f34a0-6294-49f1-96b7-c4880fca0af91632292164045-Tikhi-Imli-Red--Olive-Green-Printed-Ready-to-Wear-Lehenga--B-1.jpg"
                />
                <Card.Body>
                  <Card.Title style={{ fontSize: "14px" }}>
                  Gorgeous Red Embellished Ready to Wear Lehenga Choli with Dupatta
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
                 className="image"
                  variant="top"
                  src="https://assets.myntassets.com/f_webp,h_560,q_90,w_420/v1/assets/images/17886350/2022/4/30/6f02ccc1-ef5c-4f21-a62f-2ef2d95b36fb1651301724488-Sangria-Black-Embellished-Sequinned-Ready-to-Wear-Lehenga--S-1.jpg"
                />
                <Card.Body>
                  <Card.Title style={{ fontSize: "14px" }}>
                  Black Ready to Wear Lehenga & Blouse With Dupatta
                  </Card.Title>
                  <Card.Text style={{ marginBottom: "2px", fontSize: "14px" }}>
                    ₹ 55099.00
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
                 className="image"
                  variant="top"
                  src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/16190756/2022/3/3/1f287b32-1ec9-453e-926e-83f05562a52b1646299581939-Anouk-Women-Lehenga-Choli-8321646299581246-11.jpg"
                />
                <Card.Body>
                  <Card.Title style={{ fontSize: "14px" }}>
                  Red & Yellow Mirror Lehenga & Blouse With Dupatta

                  </Card.Title>
                  <Card.Text style={{ marginBottom: "2px", fontSize: "14px" }}>
                    ₹ 36999.00
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
                 className="image"
                  variant="top"
                  src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/14914166/2021/8/24/19e49676-2dd4-4273-89d9-4ac9083e4d691629785952899-Libas-Women-Lehenga-Choli-8081629785952553-1.jpg"
                />
                <Card.Body>
                  <Card.Title style={{ fontSize: "14px" }}>
                  Enchanting Green Colour Lehenga with Solid Choli
                  </Card.Title>
                  <Card.Text style={{ marginBottom: "2px", fontSize: "14px" }}>
                    ₹ 59999.00
                    <br />
                    ⭐⭐⭐⭐
                  </Card.Text>
                  <Button variant="warning" className="fw-bold">
                    Add to Cart
                  </Button>
                </Card.Body>
              </Card>
          </Col>
        </Row>
        <Row style={{marginTop:"2rem"}}>
          <Col>
          <Card style={{ width: "14rem" }} className="photo">
                <Card.Img
                 className="image"
                  variant="top"
                  src="https://img.perniaspopupshop.com/catalog/product/g/o/GOVA112233_1.jpg?impolicy=detailimageprod"
                />
                <Card.Body>
                  <Card.Title style={{ fontSize: "14px" }}>
                  Mustard Printed Lehenga Set
                  </Card.Title>
                  <Card.Text style={{ marginBottom: "2px", fontSize: "14px" }}>
                  ₹68,999
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
                 className="image"
                  variant="top"
                  src="https://img.perniaspopupshop.com/catalog/product/e/s/ESKC122206_1.jpg?impolicy=detailimageprod"
                />
                <Card.Body>
                  <Card.Title style={{ fontSize: "14px" }}>
                  White Embroidered Lehenga Set
                  </Card.Title>
                  <Card.Text style={{ marginBottom: "2px", fontSize: "14px" }}>
                  ₹29,750

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
                 className="image"
                  variant="top"
                  src="https://img.perniaspopupshop.com/catalog/product/t/b/TBTH052109_1.jpg?impolicy=detailimageprod"
                />
                <Card.Body>
                  <Card.Title style={{ fontSize: "14px" }}>
                  Blush Pink Embroidered Handcrafted Lehenga Set
                  </Card.Title>
                  <Card.Text style={{ marginBottom: "2px", fontSize: "14px" }}>
                  ₹68,000

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
                 className="image"
                  variant="top"
                  src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/19442234/2022/9/20/335ed29d-4ccb-4c43-a7ae-0d8e14aea3bd1663695552966-Inddus-Red-Embroidered-Sequinned-Semi-Stitched-Lehenga--Unst-4.jpg"
                />
                <Card.Body>
                  <Card.Title style={{ fontSize: "14px" }}>
                  Stylish Black Solid Ready to Wear Lehenga Choli with Dupatta

                  </Card.Title>
                  <Card.Text style={{ marginBottom: "2px", fontSize: "14px" }}>
                    ₹ 35999.00
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
                 className="image"
                  variant="top"
                  src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/19442244/2022/9/20/275ffd9d-9889-4484-b43a-3ac1cc26f8571663695564019-Inddus-Multicoloured-Embroidered-Thread-Work-Semi-Stitched-L-5.jpg"
                />
                <Card.Body>
                  <Card.Title style={{ fontSize: "14px" }}>
                  Enchanting Green Colour Lehenga with Solid Choli
                  </Card.Title>
                  <Card.Text style={{ marginBottom: "2px", fontSize: "14px" }}>
                    ₹ 59999.00
                    <br />
                    ⭐⭐⭐⭐
                  </Card.Text>
                  <Button variant="warning" className="fw-bold">
                    Add to Cart
                  </Button>
                </Card.Body>
              </Card>
          </Col>
        </Row>
      </Container>
      <div class="copyright-area" style={{marginTop:"5rem"}}>
        <div class="container">
          <div class="row">
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
            <div class="col-xl-6 col-lg-6 text-end text-lg-left">
              <div class="copyright-text">
                <p>Copyright &copy; 2023, All Right Reserved</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wcart;
