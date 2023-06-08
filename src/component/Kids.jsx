import React from "react";
import Navbar1 from "../Navbar1";
import "./side.css";
import { Row, Col, Card, Button, Container } from "react-bootstrap";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const Kids = () => {
  return (
    <>
      <div>
        <Navbar1 />
      </div>
      <div class="sidenav" style={{ marginTop: "53px" }}>
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
      </div>
      <div className="mainpp" style={{ marginTop: "6rem" }}>
        <Container>
          <Row>
          <Col>
              <Card style={{ width: "15rem" }} className="photo">
                <Card.Img className="image" variant="top" src="https://img.perniaspopupshop.com/catalog/product/p/a/PAPA082202_1.jpg?impolicy=detailimageprod" height="310" />
                <Card.Body>
                  <Card.Title style={{fontSize:"14px"}}>Lavender One-Shoulder Dress</Card.Title>
                  <Card.Text style={{marginBottom:"0px",marginTop:"26px" , fontSize: "14px"}}>
                  ₹6,700<br/>⭐⭐⭐⭐⭐
                  </Card.Text >
                  <Button variant="warning" className="fw-bold"><Link to="/component/cart12" style={{color:"white"}}>Add to Cart</Link></Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "14rem" }} className="photo">
                <Card.Img
                  variant="top"
                  className="image"
                  src="https://img.perniaspopupshop.com/catalog/product/c/h/CHOBT082201_1.jpg?impolicy=listingimagedesktop" height="310"
                />
                <Card.Body>
                  <Card.Title style={{ fontSize: "14px" }}>
                    Ivory Lehenga Set For Girls
                  </Card.Title>
                  <Card.Text style={{marginBottom:"2px" , fontSize: "14px"}}>₹6,299<br/>⭐⭐⭐⭐⭐</Card.Text>
                  <Button variant="warning" className="fw-bold"><Link to="/component/cart12" style={{color:"white"}}>Add to Cart</Link></Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "14rem" }} className="photo">
                <Card.Img
                className="image"
                  variant="top"
                  src="https://img.perniaspopupshop.com/catalog/product/c/h/CHOBT022315_3.jpg?impolicy=detailimageprod" height="310"
                />
                <Card.Body>
                  <Card.Title style={{ fontSize: "14px" }}>
                  Mehendi Green Silk Sharara Set For Girls
                  </Card.Title>
                  <Card.Text style={{marginBottom:"2px" , fontSize: "14px"}}>₹5,939<br/>⭐⭐⭐⭐⭐</Card.Text>
                  <Button variant="warning" className="fw-bold"><Link to="/component/cart12" style={{color:"white"}}>Add to Cart</Link></Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "14rem" }} className="photo">
                <Card.Img
                className="image"
                  variant="top"
                  src="https://img.perniaspopupshop.com/catalog/product/h/o/HOITY112209_1.jpg?impolicy=detailimageprod" height="310"
                />
                <Card.Body>
                  <Card.Title style={{ fontSize: "14px" }}>
                  White Sequins Dress For Girls
                  </Card.Title>
                  <Card.Text style={{marginBottom:"2px" , fontSize: "14px"}}>₹10,800<br/>⭐⭐⭐</Card.Text>
                  <Button variant="warning" className="fw-bold"><Link to="/component/cart12" style={{color:"white"}}>Add to Cart</Link></Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card style={{ width: "14rem" }} className="photo">
                <Card.Img
                className="image"
                  variant="top"
                  src="https://img.perniaspopupshop.com/catalog/product/c/e/CELEB112220_1.JPG?impolicy=detailimageprod"
                />
                <Card.Body>
                  <Card.Title style={{ fontSize: "14px" }}>
                  Black Kurta Set For Boys
                  </Card.Title>
                  <Card.Text style={{marginBottom:"2px" , fontSize: "14px"}}>₹4,680<br/>⭐⭐⭐⭐</Card.Text>
                  <Button variant="warning" className="fw-bold"><Link to="/component/cart12" style={{color:"white"}}>Add to Cart</Link></Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "14rem" }} className="photo">
                <Card.Img
                  variant="top"
                  className="image"
                  src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/17050150/2022/2/4/16f07de9-c0e0-4721-861c-f4d8fe801d7a1643970176481KID1PartyWearsuitwithbow-tie1.jpg"
                />
                <Card.Body>
                  <Card.Title style={{ fontSize: "14px" }}>
                  Boys Navy Blue Self Design Single-Breasted Suit
                  </Card.Title>
                  <Card.Text style={{marginBottom:"2px" , fontSize: "14px"}}>₹1449<br/>⭐⭐⭐</Card.Text>
                  <Button variant="warning" className="fw-bold"><Link to="/component/cart12" style={{color:"white"}}>Add to Cart</Link></Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "14rem" }} className="photo">
                <Card.Img
                className="image"
                  variant="top"
                  src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/17050158/2022/2/4/01857a5d-bcfc-4e05-a000-a75e36e6d40b1643974197191KID1BoysGreyBlueCheckedSingle-BreastedFour-PiecePartySuit3.jpg"
                />
                <Card.Body>
                  <Card.Title style={{ fontSize: "14px" }}>
                  Boys Grey & Blue Checked Party Suit With Bow Tie
                  </Card.Title>
                  <Card.Text style={{marginBottom:"2px" , fontSize: "14px"}}>₹1749<br/>⭐⭐⭐⭐</Card.Text>
                  <Button variant="warning" className="fw-bold"><Link to="/component/cart12" style={{color:"white"}}>Add to Cart</Link></Button>
                </Card.Body>
              </Card>
            </Col><Col>
              <Card style={{ width: "14rem" }} className="photo">
                <Card.Img
                className="image"
                  variant="top"
                  src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/15280202/2021/8/27/f0ce7749-5ca2-4195-9037-e15d108bc5cd1630054502024VASTRAMAYBoysGold-TonedRegularKurtawithPyjamas1.jpg"
                />
                <Card.Body>
                  <Card.Title style={{ fontSize: "14px" }}>
                  Boys Gold-Toned Regular Kurta Pyjamas With Jacket
                  </Card.Title>
                  <Card.Text style={{marginBottom:"2px" , fontSize: "14px"}}>₹1139<br/>⭐⭐⭐</Card.Text>
                  <Button variant="warning" className="fw-bold"><Link to="/component/cart12" style={{color:"white"}}>Add to Cart</Link></Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card style={{ width: "14rem" }} className="photo">
                <Card.Img
                  variant="top"
                  className="image"
                  src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/20217892/2022/9/29/660757b9-b5c9-4b41-b1d5-359d403b5c821664455701538ATUNGirlsGreyFloralEmbroideredPanelledKurtawithSharara1.jpg"
                />
                <Card.Body>
                  <Card.Title style={{ fontSize: "14px" }}>
                  Girls Grey Floral Panelled Kurta with Sharara
                  </Card.Title>
                  <Card.Text style={{marginBottom:"2px" , fontSize: "14px"}}>₹4,680<br/>⭐⭐⭐⭐<br/>
                  </Card.Text>
                  <Button variant="warning" className="fw-bold"><Link to="/component/cart12" style={{color:"white"}}>Add to Cart</Link></Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "14rem" }} className="photo">
                <Card.Img
                className="image"
                  variant="top"
                  src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/14822662/2021/7/14/ab8995a0-742f-47ec-8f6f-387e2e3d89461626255579040pspeachesGirlsYellowFloralEmbroideredTieredKurtiwithSkirtWit1.jpg"
                />
                <Card.Body>
                  <Card.Title style={{ fontSize: "14px" }}>
                  Girls Yellow Kurti with Sharara & With Dupatta
                  </Card.Title>
                  <Card.Text style={{marginBottom:"2px" , fontSize: "14px"}}>₹1279<br/>⭐⭐⭐⭐⭐</Card.Text>
                  <Button variant="warning" className="fw-bold"><Link to="/component/cart12" style={{color:"white"}}>Add to Cart</Link></Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "14rem" }} className="photo">
                <Card.Img
                  variant="top"
                  className="image"
                  src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/21570836/2023/1/17/e12201f5-8bd2-420d-bfbf-f190a28135441673928768897KurtaSets1.jpg"
                />
                <Card.Body>
                  <Card.Title style={{ fontSize: "14px" }}>
                  Girls Bandhani Tiered Pure Cotton Kurta with Sharara
                  </Card.Title>
                  <Card.Text style={{marginBottom:"2px" , fontSize: "14px"}}>₹2049<br/>⭐⭐⭐⭐⭐</Card.Text>
                  <Button variant="warning" className="fw-bold"><Link to="/component/cart12" style={{color:"white"}}>Add to Cart</Link></Button>
                </Card.Body>
              </Card>
            </Col><Col>
              <Card style={{ width: "14rem" }} className="photo">
                <Card.Img
                  variant="top"
                  className="image"
                  src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/17585456/2022/3/19/7546365f-225a-4778-812a-74bcf4460df51647696387984PinkChickBurgundyNetSheathDress1.jpg"
                />
                <Card.Body>
                  <Card.Title style={{ fontSize: "14px" }}>
                  Girls Burgundy Fit & Flare Dress
                  </Card.Title>
                  <Card.Text style={{marginBottom:"2px" , fontSize: "14px"}}>₹2839<br/>⭐⭐⭐⭐⭐</Card.Text>
                  <Button variant="warning" className="fw-bold"><Link to="/component/cart12" style={{color:"white"}}>Add to Cart</Link></Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card style={{ width: "14rem" }} className="photo">
                <Card.Img
                  variant="top"
                  className="image"
                  src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/15719302/2021/10/4/0097bbb2-fbe5-4ed5-b106-d19120b052461633319662009KID1BoysWhitePrintedRegularKurtawithDhotiPants1.jpg"
                />
                <Card.Body>
                  <Card.Title style={{ fontSize: "14px" }}>
                  Black Kurta Set For Boys
                  </Card.Title>
                  <Card.Text  style={{fontSize:"14px"}}>₹4,680<br/>⭐⭐⭐⭐⭐</Card.Text>
                  <Button variant="warning" className="fw-bold"><Link to="/component/cart12" style={{color:"white"}}>Add to Cart</Link></Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "14rem" }} className="photo">
                <Card.Img
                  variant="top"
                  className="image"
                  src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/20470718/2022/10/20/c2ea4be9-ef68-49c8-b5ef-2631fd74de1f1666220378437VASTRAMAYSISHUBoysPinkPaisleyEmbroideredChikankariPureCotton5.jpg"
                />
                <Card.Body>
                  <Card.Title style={{ fontSize: "14px" }}>
                  Boys Pink Paisley Pure Cotton Kurta & Pyjama
                  </Card.Title>
                  <Card.Text style={{marginBottom:"2px" , fontSize: "14px"}}>₹1749<br/>⭐⭐⭐⭐⭐</Card.Text>
                  <Button variant="warning" className="fw-bold"><Link to="/component/cart12" style={{color:"white"}}>Add to Cart</Link></Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "14rem" }} className="photo">
                <Card.Img
                  variant="top"
                  className="image"
                  src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/16265230/2021/11/27/446cb0d6-e1aa-45b0-acb7-cdaa31cc3c5e1637992151710TiberTaberBoysYellowPrintedRegularPureCottonKurtawithDhotiPa1.jpg"
                />
                <Card.Body>
                  <Card.Title style={{ fontSize: "14px" }}>
                  Boys Yellow & Cream-Colour Cotton Kurta & Dhoti
                  </Card.Title>
                  <Card.Text style={{marginBottom:"2px" , fontSize: "14px"}}>₹1849<br/>⭐⭐⭐⭐⭐</Card.Text>
                  <Button variant="warning" className="fw-bold"><Link to="/component/cart12" style={{color:"white"}}>Add to Cart</Link></Button>
                </Card.Body>
              </Card>
            </Col><Col>
              <Card style={{ width: "14rem" }} className="photo">
                <Card.Img
                  variant="top"
                  className="image"
                  src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/17367154/2022/3/3/f0562ef9-67a1-4458-a9ee-8276b565ae1d1646287875613VASTRAMAYSISHUBoysRoseGoldEthnicMotifsYokeDesignKurtawithTro5.jpg"
                />
                <Card.Body>
                  <Card.Title style={{ fontSize: "14px" }}>
                  Boys Rose Gold Kurta with Dhoti Pants & With Dupatta
                  </Card.Title>
                  <Card.Text style={{marginBottom:"2px" , fontSize: "14px"}}>₹5589<br/>⭐⭐⭐⭐⭐</Card.Text>
                 <Button variant="warning" className="fw-bold"> <Link to="/component/cart12" style={{color:"white"}}>Add to Cart</Link></Button>
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
                             <li><a href='/'>Home</a></li>
                             <li><a href='/component/women'>Women</a></li>
                             <li><a href='/component/men'>Men</a></li>
                             <li><a href='/component/kids'>Kids</a></li>
                             <li><a href='/component/jewellery'>Jewellery</a></li>
                         </ul>
                     </div>
                 </div>
             </div>
         </div>
     </div>
    </>
  );
};

export default Kids;
