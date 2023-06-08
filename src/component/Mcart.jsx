import React from "react";
import { Button, Col, Container, Row, Card } from "react-bootstrap";
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
import { Link } from "react-router-dom";
const Mcart = () => {
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
                  src="https://newcdn.kalkifashion.com/media/catalog/product/b/a/baby_blue_silk_sherwani_set_in_zari-sg127834_2_.jpg"
                  width="350"
                  alt="myimage"
                  height="450"
                />
              </div>
              <div className="photo">
                <img
                className="image"
                  alt="myimage"
                  src="https://newcdn.kalkifashion.com/media/catalog/product/b/a/baby_blue_silk_sherwani_set_in_zari-sg127834_4_.jpg"
                  width="350"
                  height="450"
                />
              </div>
            </div>
            <div className="d-flex mx-4 my-4">
              <div className="photo mx-4">
                <img
                 className="image"
                  src="https://newcdn.kalkifashion.com/media/catalog/product/b/a/baby_blue_silk_sherwani_set_in_zari-sg127834_5_.jpg"
                  width="350"
                  alt="myimage"
                  height="450"
                />
              </div>
              <div className="photo">
                <img
                 className="image"
                  alt="myimage"
                  src="https://newcdn.kalkifashion.com/media/catalog/product/b/a/baby_blue_silk_sherwani_set_in_zari-sg127834_7_.jpg"
                  width="350"
                  height="450"
                />
              </div>
            </div>
            <div className="d-flex mx-4 my-4">
              <div className="photo mx-4">
                <img
                 className="image"
                  src="https://newcdn.kalkifashion.com/media/catalog/product/b/a/baby_blue_silk_sherwani_set_in_zari-sg127834_6_.jpg"
                  width="350"
                  alt="myimage"
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
                  Powder Blue Silk Sherwani Set In Zari And Sequins Embroidery
                </h4>
              </div>
              <sub
                style={{ fontSize: "14px", fontFamily: "'Nunito', sans-serif" }}
              >
                Product Code :SG127834
              </sub>
              <p style={{ marginBottom: "0", marginTop: "15px" }}>
                <span
                  style={{
                    fontWeight: "800",
                    fontFamily: "'Nunito', sans-serif",
                  }}
                >
                ₹22,369.00
                </span>{" "}
                <span>
                  <del style={{ fontFamily: "'Nunito', sans-serif" }}>
                    MRP ₹24,369.00
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
                Easy 14 days returns and exchanges
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
                  ₹ 22369.00
                </span>
              </p>
              <li style={{ fontFamily: "'Nunito',sans-sertif" }}>
                Applicable on: Orders above ₹ 22369.00 (only on first purchase)
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
                  MOHEY2000
                </span>
              </li>
              <li style={{ fontFamily: "'Nunito',sans-sertif" }}>
                Coupon Discount: Rs. 2000 off (check cart for final savings)
              </li>
            </div>
            <Divider style={{ marginTop: "2.5rem" }} />
            <div className="product">
              <p
                style={{
                  fontFamily: "'Nunito', sans-serif",
                  fontWeight: "700",
                  marginTop: "30px",
                  color: "black",
                }}
              >
                Product Details <ArticleOutlinedIcon />{" "}
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
        <Row style={{ marginTop: "5rem" }}>
          <h6
            style={{
              color: "black",
              fontWeight: "800",
              fontFamily: "'Nunito',sans-serif",
              marginBottom: "2rem",
            }}
          >
            Similar Product
          </h6>
          <Col>
            <Card style={{ width: "14rem" }} className="photo">
              <Card.Img
               className="image"
                variant="top"
                src="https://newcdn.kalkifashion.com/media/tagalys/product_images/d/u/dusty_orchid_purple_thread_embroidered-sg133174_2_.jpg"
              />
              <Card.Body>
                <Card.Title style={{ fontSize: "14px" }}>
                Dusty Pink Purple Thread Embroidered Sherwani Set In Silk
                </Card.Title>
                <Card.Text style={{ marginBottom: "2px", fontSize: "14px" }}>
                ₹20,420.00
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
                src="https://newcdn.kalkifashion.com/media/tagalys/product_images/w/h/whisper_white_embroidered_sherwani_set-sg128939_2_.jpg"
              />
              <Card.Body>
                <Card.Title style={{ fontSize: "14px" }}>
                Beige White Embroidered Sherwani Set In Tussar Silk
                </Card.Title>
                <Card.Text style={{ marginBottom: "2px", fontSize: "14px" }}>
                ₹26,209.00
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
                src="https://newcdn.kalkifashion.com/media/tagalys/product_images/g/e/geranium_pink_silk_embroidered-sg129019_2_.jpg"
              />
              <Card.Body>
                <Card.Title style={{ fontSize: "14px" }}>
                Onion Pink Silk Embroidered Sherwani Set
                </Card.Title>
                <Card.Text style={{ marginBottom: "2px", fontSize: "14px" }}>
                ₹26,209.00
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
                src="https://newcdn.kalkifashion.com/media/tagalys/product_images/a/n/angel_fall_blue_silk_sherwani_set_in_sequins-sg127842_2_.jpg"
              />
              <Card.Body>
                <Card.Title style={{ fontSize: "14px" }}>
                Angel Fall Blue Silk Sherwani Set In Sequins And Threadwork
                </Card.Title>
                <Card.Text style={{ marginBottom: "2px", fontSize: "14px" }}>
                ₹19,079.00
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
                src="https://newcdn.kalkifashion.com/media/tagalys/product_images/m/i/mint_green_embroidered_tussar_silk-sg128963_2_.jpg"
              />
              <Card.Body>
                <Card.Title style={{ fontSize: "14px" }}>
                Powder Blue Embroidered Tussar Silk Sherwani Set
                </Card.Title>
                <Card.Text style={{ marginBottom: "2px", fontSize: "14px" }}>
                ₹19,157.00
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
        <Row style={{ marginTop: "2rem" }}>
          <Col>
            <Card style={{ width: "14rem" }} className="photo">
              <Card.Img
               className="image"
                variant="top"
                src="https://newcdn.kalkifashion.com/media/tagalys/product_images/b/i/bisque_peach_lucknowi_sherwani_set-sg132304_8_.jpg"
              />
              <Card.Body>
                <Card.Title style={{ fontSize: "14px" }}>
                Salmon Pink Lucknowi Sherwani Set With Thread And Zari Embroidery
                </Card.Title>
                <Card.Text style={{ marginBottom: "2px", fontSize: "14px" }}>
                ₹23,578.00
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
                className="image"
                src="https://newcdn.kalkifashion.com/media/tagalys/product_images/w/h/whisper_white_silk_sherwani_set_in_zardosi-sg136076_4_.jpg"
              />
              <Card.Body>
                <Card.Title style={{ fontSize: "14px" }}>
                Nude White Silk Sherwani Set In Zardosi And Stonework Embroidery
                </Card.Title>
                <Card.Text style={{ marginBottom: "2px", fontSize: "14px" }}>
                ₹41,999.00
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
                className="image"
                src="https://newcdn.kalkifashion.com/media/tagalys/product_images/s/t/star_white_thread_embroidered_silk_sherwani_set-sg142643_2_.jpg"
              />
              <Card.Body>
                <Card.Title style={{ fontSize: "14px" }}>
                Beige White Thread Embroidered Silk Sherwani Set With Zari And Beads
                </Card.Title>
                <Card.Text style={{ marginBottom: "2px", fontSize: "14px" }}>
                ₹73,578.00
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
                className="image"
                src="https://newcdn.kalkifashion.com/media/tagalys/product_images/e/g/egret_white_silk_sherwani_set_with_exquisite-sg140502_2_.jpg"
              />
              <Card.Body>
                <Card.Title style={{ fontSize: "14px" }}>
                Pearl White Silk Sherwani Set With Exquisite Zari And Sequin Embroidery
                </Card.Title>
                <Card.Text style={{ marginBottom: "2px", fontSize: "14px" }}>
                ₹60,420.00
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
                className="image"
                src="https://newcdn.kalkifashion.com/media/catalog/product/b/i/birch_white_embroidered_silk_sherwani-sg142622_2_.jpg"
              />
              <Card.Body>
                <Card.Title style={{ fontSize: "14px" }}>
                Champagne Brown Embroidered Silk Sherwani Set
                </Card.Title>
                <Card.Text style={{ marginBottom: "2px", fontSize: "14px" }}>
                ₹67,157.00
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
      <div class="copyright-area" style={{ marginTop: "5rem" }}>
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

export default Mcart;
