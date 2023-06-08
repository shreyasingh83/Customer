import React from 'react'
import Navbar1 from "../Navbar1";
import "./side.css";
import { Row, Col, Card, Button, Container } from "react-bootstrap";
// import { Link } from 'react-router-dom';

const Jewellery = () => {
  return (
    <>
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
     <div className="mainpp" style={{ marginTop: "4rem" }}>
       <Container>
         <Row>
         <Col>
             <Card style={{ width: "15rem" }} className='photo'>
               <Card.Img  className='image' variant="top" src="https://img.perniaspopupshop.com/catalog/product/s/w/SWBM0323165_1.JPG?impolicy=detailimageprod" height="310" />
               <Card.Body>
                 <Card.Title style={{fontSize:"14px"}}>Black Rhodium Finish Kundan Polki & Beaded Necklace Set</Card.Title>
                 <Card.Text style={{marginBottom:"2px" , fontSize: "14px"}}>
                 ₹18,000<br/>⭐⭐⭐⭐⭐
                 </Card.Text >
               <Button variant="warning" className="fw-bold">Add to Cart</Button>
               </Card.Body>
             </Card>
           </Col>
           <Col>
             <Card style={{ width: "14rem" }} className="photo">
               <Card.Img
               className='image'
                 variant="top"
                 src="	https://img.perniaspopupshop.com/catalog/product/d/d/DDUG032335_1.jpg?impolicy=listingimagenew" height="310"
               />
               <Card.Body>
                 <Card.Title style={{ fontSize: "14px" }}>
                 Gold Finish Kundan Polki & Pearl Necklace Set
                 </Card.Title>
                 <Card.Text style={{marginBottom:"2px" , fontSize: "14px"}}>₹17,900<br/>⭐⭐⭐⭐⭐</Card.Text>
 <Button variant="warning" className="fw-bold">Add to Cart</Button>
               </Card.Body>
             </Card>
           </Col>
           <Col>
             <Card style={{ width: "14rem" }} className="photo">
               <Card.Img
               className='image'
                 variant="top"
                 src="https://img.perniaspopupshop.com/catalog/product/d/d/DDUG032339_1.jpg?impolicy=detailimageprod" height="310"
               />
               <Card.Body>
                 <Card.Title style={{ fontSize: "14px" }}>
                 Gold Finish Kundan & Pearl Long Necklace Set
                 </Card.Title>
                 <Card.Text style={{marginBottom:"2px" , fontSize: "14px"}}>₹32,000<br/>⭐⭐⭐⭐⭐</Card.Text>
                 <Button variant="warning" className="fw-bold">Add to Cart</Button>
               </Card.Body>
             </Card>
           </Col>
           <Col>
             <Card style={{ width: "14rem" }} className="photo">
               <Card.Img
               className='image'
                 variant="top"
                 src="https://img.perniaspopupshop.com/catalog/product/s/w/SWBM122201_1.JPG?impolicy=detailimageprod" height="310"
               />
               <Card.Body>
                 <Card.Title style={{ fontSize: "14px" }}>
                 Gold Finish Kundan Polki Necklace Set
                 </Card.Title>
                 <Card.Text style={{marginBottom:"2px" , fontSize: "14px"}}>₹12,900<br/>⭐⭐⭐</Card.Text>
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
                 src="https://img.perniaspopupshop.com/catalog/product/c/u/CUCO0323110_1.jpg?impolicy=detailimageprod"
               />
               <Card.Body>
                 <Card.Title style={{ fontSize: "14px" }}>
                 Two-Tone Finish Pink & Green Semi-Precious ...
                 </Card.Title>
                 <Card.Text style={{marginBottom:"2px" , fontSize: "14px"}}>₹2,600<br/>⭐⭐⭐⭐</Card.Text>
                <Button variant="warning" className="fw-bold">Add to Cart</Button>
               </Card.Body>
             </Card>
           </Col>
           <Col>
             <Card style={{ width: "14rem" }} className="photo">
               <Card.Img
                 variant="top"
                 className='image'
                 src="	https://img.perniaspopupshop.com/catalog/product/d/d/DDUG032345_1.jpg?impolicy=detailimageprod"/>
               <Card.Body>
                 <Card.Title style={{ fontSize: "14px" }}>
                 Gold Finish Kundan Polki & Pearl Necklace Set
                 </Card.Title>
                 <Card.Text style={{marginBottom:"2px" , fontSize: "14px"}}>₹17,700<br/>⭐⭐⭐</Card.Text>
                 <Button variant="warning" className="fw-bold">Add to Cart</Button>
               </Card.Body>
             </Card>
           </Col>
           <Col>
             <Card style={{ width: "14rem" }} className="photo">
               <Card.Img
                 variant="top"
                 className='image'
                 src="	https://img.perniaspopupshop.com/catalog/product/d/d/DDUG032344_1.jpg?impolicy=listingimagedesktop"
               />
               <Card.Body>
                 <Card.Title style={{ fontSize: "14px" }}>
                 Gold Finish Kundan Polki & American Diamond ...
                 </Card.Title>
                 <Card.Text style={{marginBottom:"2px" , fontSize: "14px"}}>₹5,600<br/>⭐⭐⭐⭐</Card.Text>
               <Button variant="warning" className="fw-bold">Add to Cart</Button>
               </Card.Body>
             </Card>
           </Col><Col>
             <Card style={{ width: "14rem" }} className="photo">
               <Card.Img
                 variant="top"
                 className='image'
                 src="https://img.perniaspopupshop.com/catalog/product/d/d/DDUG032342_1.jpg?impolicy=listingimagedesktop"
               />
               <Card.Body>
                 <Card.Title style={{ fontSize: "14px" }}>
                 Gold Finish Kundan Polki & Natural Stone Necklace Set
                 </Card.Title>
                 <Card.Text style={{marginBottom:"2px" , fontSize: "14px"}}>₹4839<br/>⭐⭐⭐</Card.Text>
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
                 src="	https://img.perniaspopupshop.com/catalog/product/s/w/SWBM032309_1.JPG?impolicy=listingimagenew"
               />
               <Card.Body>
                 <Card.Title style={{ fontSize: "14px" }}>
                 Gold Finish Blue Kundan Polki Handcrafted Choker ...
                 </Card.Title>
                 <Card.Text style={{marginBottom:"2px" , fontSize: "14px"}}>₹4,900<br/>⭐⭐⭐⭐<br/>
                 </Card.Text>
                 <Button variant="warning" className="fw-bold">Add to Cart</Button>
               </Card.Body>
             </Card>
           </Col>
           <Col>
             <Card style={{ width: "14rem" }} className="photo">
               <Card.Img
               className='image'
                 variant="top"
                 src="	https://img.perniaspopupshop.com/catalog/product/s/w/SWBM092287_1.JPG?impolicy=detailimageprod"
               />
               <Card.Body>
                 <Card.Title style={{ fontSize: "14px" }}>
                 Gold Finish Kundan Polki Bridal Necklace Set
                 </Card.Title>
                 <Card.Text style={{marginBottom:"2px" , fontSize: "14px"}}>₹34,990<br/>⭐⭐⭐⭐⭐</Card.Text>
                 <Button variant="warning" className="fw-bold">Add to Cart</Button>
               </Card.Body>
             </Card>
           </Col>
           <Col>
             <Card style={{ width: "14rem" }} className="photo">
               <Card.Img
               className='image'
                 variant="top"
                 src="	https://img.perniaspopupshop.com/catalog/product/a/u/AUTC012307_1.JPG?impolicy=detailimageprod"
               />
               <Card.Body>
                 <Card.Title style={{ fontSize: "14px" }}>
                 Gold Plated Kundan Polki Necklace Set
                 </Card.Title>
                 <Card.Text style={{marginBottom:"2px" , fontSize: "14px"}}>₹12,600<br/>⭐⭐⭐⭐⭐</Card.Text>
               <Button variant="warning" className="fw-bold">Add to Cart</Button>
               </Card.Body>
             </Card>
           </Col><Col>
             <Card style={{ width: "14rem" }} className="photo">
               <Card.Img
               className='image'
                 variant="top"
                 src="	https://img.perniaspopupshop.com/catalog/product/d/o/DORC1222266_1.jpg?impolicy=detailimageprod"
               />
               <Card.Body>
                 <Card.Title style={{ fontSize: "14px" }}>
                 Gold Finish Handmade Choker Necklace Set
                 </Card.Title>
                 <Card.Text style={{marginBottom:"2px" , fontSize: "14px"}}>₹24,752<br/>⭐⭐⭐⭐⭐</Card.Text>
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
                 src="	https://img.perniaspopupshop.com/catalog/product/p/h/PHRZ012373_1.jpg?impolicy=detailimageprod"
               />
               <Card.Body>
                 <Card.Title style={{ fontSize: "14px" }}>
                 Gold Plated Multi-Colored Natural Stone & Kundan..
                 </Card.Title>
                 <Card.Text  style={{fontSize:"14px",marginBottom: "0px"}}>₹18,999<br/>⭐⭐⭐⭐⭐</Card.Text>
                <Button variant="warning" className="fw-bold" >Add to Cart</Button>
               </Card.Body>
             </Card>
           </Col>
           <Col>
             <Card style={{ width: "14rem" }} className="photo">
               <Card.Img
                 variant="top"
                 className='image'
                 src="https://img.perniaspopupshop.com/catalog/product/s/w/SWBM122203_1.JPG?impolicy=detailimageprod"
               />
               <Card.Body>
                 <Card.Title style={{ fontSize: "14px" }}>
                 Gold Finish Pearl Choker Necklace Set
                 </Card.Title>
                 <Card.Text style={{marginBottom:"2px" , fontSize: "14px"}}>₹22,505<br/>⭐⭐⭐⭐⭐</Card.Text>
                 <Button variant="warning" className="fw-bold">Add to Cart</Button>
               </Card.Body>
             </Card>
           </Col>
           <Col>
             <Card style={{ width: "14rem" }} className="photo">
               <Card.Img
                 variant="top"
                 className='image'
                 src="https://img.perniaspopupshop.com/catalog/product/s/b/SBJN032382_1.JPG?impolicy=detailimageprod"
               />
               <Card.Body>
                 <Card.Title style={{ fontSize: "14px" }}>
                 Oxidised Silver Finish Ruby & Pearl Necklace In ...
                 </Card.Title>
                 <Card.Text style={{marginBottom:"2px" , fontSize: "14px"}}>₹22,505<br/>⭐⭐⭐⭐⭐</Card.Text>
                 <Button variant="warning" className="fw-bold">Add to Cart</Button>
               </Card.Body>
             </Card>
           </Col><Col>
             <Card style={{ width: "14rem" }} className="photo">
               <Card.Img
                 variant="top"
                 className='image'
                 src="https://img.perniaspopupshop.com/catalog/product/s/b/SBJN032384_1.JPG?impolicy=detailimageprod"
               />
               <Card.Body>
                 <Card.Title style={{ fontSize: "14px" }}>
                 Silver Oxidised Finish Coral Necklace In Sterling Silver
                 </Card.Title>
                 <Card.Text style={{marginBottom:"2px" , fontSize: "14px"}}>₹41,240<br/>⭐⭐⭐⭐⭐</Card.Text>
                 <Button variant="warning" className="fw-bold">Add to Cart</Button>
               </Card.Body>
             </Card>
           </Col>
         </Row>
       </Container>
     </div>
   </>
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

export default Jewellery
