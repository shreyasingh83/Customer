import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React from "react";
import  Image  from "./image/Eid.png";
import  Image1  from "./image/Image.png";
import Lehenga1 from "./image/lehen.png"
import Lehenga from "./image/lehenga.jpg"
import Eid from "./image/kurta.png"
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';


const Topslide = () => {
  return(
    <div className="main">
      <Container fluid className="my-5">
        <Row>
          <Col md="6" >
          <div className="main my-3" style={{marginLeft:"12px"}} >
       <MDBCarousel showControls>
      <MDBCarouselItem
        className='w-100 d-block'
        style={{height:"450px"}}
        itemId={1}
        src={Image}
        alt='...'
      />
      <MDBCarouselItem
        className='w-100 d-block'
        style={{height:"450px"}}
        itemId={2}
        src={Image1}
        alt='...'
      />
      <MDBCarouselItem
        className='w-100 d-block'
        style={{height:"450px"}}
        itemId={3}
        src={Eid}
        alt='...'
      />
       <MDBCarouselItem
        className='w-100 d-block'
        style={{height:"450px",backgroundSize:"contain"}}
        itemId={4}
        src={Lehenga}
        alt='...'
      />
      <MDBCarouselItem
        className='w-100 d-block'
        style={{height:"450px",backgroundSize:"contain"}}
        itemId={4}
        src={Lehenga1}
        alt='...'
      />
    </MDBCarousel>
    </div>
          </Col>
          <Col md="3">  <div className="main my-3" style={{marginLeft:"12px"}} >
       <MDBCarousel showControls>
      <MDBCarouselItem
        className='w-100 d-block'
        style={{height:"450px"}}
        itemId={1}
        src="https://cdn.shopify.com/s/files/1/0613/4857/7536/products/thedesignersareepresentdesigenerlehenga_95.jpg?v=1638861913"
        alt='...'
      />
      <MDBCarouselItem
        className='w-100 d-block'
        style={{height:"450px"}}
        itemId={2}
        src="https://cdn.shopify.com/s/files/1/0613/4857/7536/products/thedesignersareepresentdesigenerlehenga_111.jpg?v=1638863501"
        alt='...'
      />
      <MDBCarouselItem
        className='w-100 d-block'
        style={{height:"450px"}}
        itemId={3}
        src="https://cdn.shopify.com/s/files/1/0613/4857/7536/products/thedesignersareepresentdesigenerlehenga_90.jpg?v=1638861481"
        alt='...'
      />
       <MDBCarouselItem
        className='w-100 d-block'
        style={{height:"450px",backgroundSize:"contain"}}
        itemId={4}
        src="https://cdn.shopify.com/s/files/1/0613/4857/7536/products/thedesignersareepresentdesigenerlehenga_104.jpg?v=1638862936"
        alt='...'
      />
    </MDBCarousel>
    </div></Col>
          <Col md="3">   <div className="main my-3" style={{marginLeft:"12px"}} >
       <MDBCarousel showControls>
      <MDBCarouselItem
        className='w-100 d-block'
        style={{height:"450px"}}
        itemId={1}
        src="https://newcdn.kalkifashion.com/media/catalog/product/s/i/silver_grey-sg146500_4_.jpg"
        alt='...'
      />
      <MDBCarouselItem
        className='w-100 d-block'
        style={{height:"450px"}}
        itemId={2}
        src="https://newcdn.kalkifashion.com/media/catalog/product/d/u/dusty_orchid_purple_thread_embroidered-sg133174_4_.jpg"
        alt='...'
      />
      <MDBCarouselItem
        className='w-100 d-block'
        style={{height:"450px"}}
        itemId={3}
        src="https://newcdn.kalkifashion.com/media/catalog/product/n/a/navy_blue_sherwani_kurta_set_in_raw_silk-sg131508_2_.jpg"
        alt='...'
      />
       <MDBCarouselItem
        className='w-100 d-block'
        style={{height:"450px",backgroundSize:"contain"}}
        itemId={4}
        src="https://newcdn.kalkifashion.com/media/catalog/product/p/r/pristine_white_sherwani_set_in_silk_-sg78605_4_.jpg"
        alt='...'
      />
    </MDBCarousel>
    </div></Col>
        </Row>
      </Container>
    </div>
    
    )};
 

export default Topslide;