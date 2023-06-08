import React from "react";
import Navbar1 from "../Navbar1";
import { Row, Col, Card, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./men.css"
const Men = () => {
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
              <Card style={{ width: "14rem" }} className="photo">
                <Card.Img
                className='image'
                  variant="top"
                  src="https://newcdn.kalkifashion.com/media/catalog/product/b/a/baby_blue_silk_sherwani_set_in_zari-sg127834_2_.jpg"
                />
                <Card.Body>
                  <Card.Title style={{ fontSize: "14px" }}>
                    Multicolored Jacket With Lime Green Kurta Set
                  </Card.Title>
                  <Card.Text style={{marginBottom:"2px" , fontSize: "14px"}}>₹ 7999.00<br/>⭐⭐⭐⭐</Card.Text>
                 <Link to="/component/mcart"><Button variant="warning" className="fw-bold">Add to Cart</Button></Link>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "14rem" }} className="photo">
                <Card.Img
                className='image'
                  variant="top"
                  src="https://newcdn.kalkifashion.com/media/catalog/product/c/r/cream_sherwani_with_detailed_resham-sg106900_2_.jpg"
                />
                <Card.Body>
                  <Card.Title style={{ fontSize: "14px" }}>
                  Cream Sherwani With Detailed Resham Work
                  </Card.Title>
                  <Card.Text style={{marginBottom:"2px" , fontSize: "14px"}}>₹23,099.00<br/>⭐⭐⭐</Card.Text>
                  <Link to="/component/mcart"><Button variant="warning" className="fw-bold">Add to Cart</Button></Link>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "14rem" }} className="photo">
                <Card.Img
                className='image'
                  variant="top"
                  src="https://newcdn.kalkifashion.com/media/catalog/product/p/r/pristine_white_thread_embroidered_sherwani-sg140030_2_.jpg "
                />
                <Card.Body>
                  <Card.Title style={{ fontSize: "14px" }}>
                  Beige White
                  </Card.Title>
                  <Card.Text style={{marginBottom:"2px" , fontSize: "14px",marginTop: "18px"}}>₹ 36,990<br/>⭐⭐</Card.Text>
                  <Link to="/component/mcart"><Button variant="warning" className="fw-bold">Add to Cart</Button></Link>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card style={{ width: "14rem" }} className="photo">
                <Card.Img
                  variant="top"
                  className='image'
                  src="https://newcdn.kalkifashion.com/media/catalog/product/s/a/safari_beige_silk_sherwani_set_with_threadwork-sg132278_3_.jpg"
                />
                <Card.Body>
                  <Card.Title style={{ fontSize: "14px" }}>
                    Navy Blue Poly Blend Sherwani
                  </Card.Title>
                  <Card.Text style={{marginBottom:"2px" , fontSize: "14px"}}>₹ 50,500<br/>⭐</Card.Text>
                  <Link to="/component/mcart"><Button variant="warning" className="fw-bold">Add to Cart</Button></Link>
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
                  src="https://newcdn.kalkifashion.com/media/catalog/product/p/r/pristine_white_sherwani_set_in_silk_-sg78605_2_.jpg"
                />
                <Card.Body>
                  <Card.Title style={{ fontSize: "14px" }}>
                   White Sherwani Set In Silk And Pink Pocket Square
                  </Card.Title>
                  <Card.Text style={{marginBottom:"2px" , fontSize: "14px"}}>₹ 224,500<br/>⭐⭐⭐⭐⭐</Card.Text>
                  <Link to="/component/mcart"><Button variant="warning" className="fw-bold">Add to Cart</Button></Link>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "14rem" }} className="photo">
                <Card.Img
                className='image'
                  variant="top"
                  src="https://newcdn.kalkifashion.com/media/catalog/product/k/a/kalki_terra_cotta_pink_embroidered_festive-sg123033_2_.jpg"
                />
                <Card.Body>
                  <Card.Title style={{ fontSize: "14px" }}>
                  Kalki Terra Coral Pink Sherwani In Velvet
                  </Card.Title>
                  <Card.Text style={{marginBottom:"2px" , fontSize: "14px"}}>₹15,014.00<br/>⭐⭐⭐⭐</Card.Text>
                  <Button variant="warning" className="fw-bold">Add to Cart</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "14rem" }} className="photo">
                <Card.Img
                  variant="top"
                  className='image'
                  src="https://newcdn.kalkifashion.com/media/catalog/product/p/i/pink_sherwani_with_abla_work-sg106956_2_.jpg"
                />
                <Card.Body>
                  <Card.Title style={{ fontSize: "14px" }}>
                  Blush Pink Linen Silk Hand Embroidered Sherwani Set
                  </Card.Title>
                  <Card.Text style={{marginBottom:"2px" , fontSize: "14px"}}>₹209,500<br/>⭐⭐⭐
</Card.Text>
<Button variant="warning" className="fw-bold">Add to Cart</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card style={{ width: "14rem" }} className="photo">
                <Card.Img
                  variant="top"
                  className='image'
                  src="https://newcdn.kalkifashion.com/media/catalog/product/c/a/caviar_black_indo-western_sherwani_set-sg136152_2_.jpg"
                />
                <Card.Body>
                  <Card.Title style={{ fontSize: "14px" }}>
                  Caviar Black Indo-Western Sherwani Set Embroidered In Imported Suiting Fabric
                  </Card.Title>
                  <Card.Text style={{marginBottom:"2px" , fontSize: "14px"}}>₹19,578.00<br/>⭐⭐</Card.Text>
                  <Button variant="warning" className="fw-bold">Add to Cart</Button>
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
                  src="https://newcdn.kalkifashion.com/media/catalog/product/n/a/navy_blue_jodhpuri_sherwani_set_in_imported-sg128979_2_.jpg"
                />
                <Card.Body>
                  <Card.Title style={{ fontSize: "14px" }}>
                  Navy Blue Jodhpuri Sherwani Set In Imported Suiting Fabric
                  </Card.Title>
                  <Card.Text style={{marginBottom:"2px" , fontSize: "14px"}}>₹28,841.00<br/>⭐</Card.Text>
                  <Button variant="warning" className="fw-bold">Add to Cart</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "14rem" }} className="photo">
                <Card.Img
                  variant="top"
                  className='image'
                  src="https://newcdn.kalkifashion.com/media/tagalys/product_images/b/l/blush_pink_thread_embroidered_silk_sherwani_set-sg142652_2_.jpg"
                />
                <Card.Body>
                  <Card.Title style={{ fontSize: "14px" }}>
                  Teal Green Silk Indowestern Set
                  </Card.Title>
                  <Card.Text style={{marginBottom:"2px" , fontSize: "14px"}}>₹26,000<br/>⭐⭐⭐⭐</Card.Text>
                  <Button variant="warning" className="fw-bold">Add to Cart</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "14rem" }} className="photo">
                <Card.Img
                  variant="top"
                  className='image'
                  src="https://newcdn.kalkifashion.com/media/catalog/product/s/i/silver_embroidered_sherwani_set-sg128971_2_.jpg"
                />
                <Card.Body>
                  <Card.Title style={{ fontSize: "14px" }}>
                  Silver Grey Sherwani Set In Tussar Silk
                  </Card.Title>
                  <Card.Text style={{marginBottom:"2px" , fontSize: "14px"}}>₹26,209.00<br/>⭐⭐⭐</Card.Text>
                  <Button variant="warning" className="fw-bold">Add to Cart</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card style={{ width: "14rem" }} className="photo">
                <Card.Img
                  variant="top"
                  className='image'
                  src="https://newcdn.kalkifashion.com/media/catalog/product/f/o/fog_beige_embroidered_sherwani_set-sg139759_2_.jpg"
                style={{marginBottom:"0" }}/>
                <Card.Body>
                  <Card.Title style={{ fontSize: "14px",marginBottom:"0" }}>
                  Beige White Embroidered Sherwani Set In Raw Silk
                  </Card.Title>
                  <Card.Text style={{marginBottom:"2px" , fontSize: "14px"}}>₹83,683.00<br/>⭐⭐</Card.Text>
                 <Button variant="warning" className="fw-bold">Add to Cart</Button>
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
                  src="https://newcdn.kalkifashion.com/media/catalog/product/p/a/pale_blue_brocade_embroidered_sherwani-sg129003_2_.jpg"
                />
                <Card.Body>
                  <Card.Title style={{ fontSize: "14px" }}>
                  Cloud Grey Brocade Embroidered Sherwani Set

                  </Card.Title>
                  <Card.Text style={{marginBottom:"2px" , fontSize: "14px"}}>₹36,736.00<br/>⭐</Card.Text>
                  <Button variant="warning" className="fw-bold">Add to Cart</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "14rem" }} className="photo">
                <Card.Img
                className='image'
                  variant="top"
                  src="https://newcdn.kalkifashion.com/media/catalog/product/j/e/jet_black_sherwani_set_embroidered-sg136271_2_.jpg"
                />
                <Card.Body>
                  <Card.Title style={{ fontSize: "14px" }}>
                  Jet Black Sherwani Set Embroidered In Imported Suiting Fabric
                  </Card.Title>
                  <Card.Text style={{marginBottom:"2px" , fontSize: "14px"}}>₹22,420.00<br/>⭐⭐⭐⭐</Card.Text>
                  <Button variant="warning" className="fw-bold">Add to Cart</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "14rem" }} className="photo">
                <Card.Img
                className='image'
                  variant="top"
                  src="https://newcdn.kalkifashion.com/media/catalog/product/e/g/egret_white_embroidered_raw_silk_sherwani-sg139798_2_.jpg"
                />
                <Card.Body>
                  <Card.Title style={{ fontSize: "14px" }}>
                  Beige White Embroidered Raw Silk Sherwani Set
                  </Card.Title>
                  <Card.Text style={{marginBottom:"2px" , fontSize: "14px"}}>₹11190.00<br/>⭐⭐⭐</Card.Text>
                  <Button variant="warning" className="fw-bold">Add to Cart</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card style={{ width: "14rem" }} className="photo">
                <Card.Img
                  variant="top"
                  className='image'
                  src="https://newcdn.kalkifashion.com/media/catalog/product/k/a/kalki_blush_pink_sherwani_in_silk_with_embroidery-sg108050_2_.jpg"
                style={{marginBottom:"0" }}/>
                <Card.Body>
                  <Card.Title style={{ fontSize: "14px",marginBottom:"0" }}>
                  Blush Pink Sherwani In Silk With Embroidery
                  </Card.Title>
                  <Card.Text style={{marginBottom:"2px" , fontSize: "14px"}}>₹28,349.00 <br/>⭐⭐</Card.Text>
                 <Button variant="warning" className="fw-bold">Add to Cart</Button>
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

export default Men;
