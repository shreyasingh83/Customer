import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import kids from "./image/kid.jpg";
import { Link } from "react-router-dom";
import "./top.css";
const Topdeals = () => {
  return (
    <div className="main">
      <Container>
        <Row>
          <Col className="w-90 text-center my-2">
            <h2
              style={{
                color: "rgb(170, 133, 49)",
                fontFamily: "'Playfair Display', serif",
              }}
            >
              Lehengas for Your Bridal Occasion
            </h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card className="photo">
              <Link to="/component/women">
                <Card.Img
                  className="image"
                  variant="top"
                  src="https://s7ap1.scene7.com/is/image/VedantFashionsDM/Engagement%20final%20option%202%20jpg_04-01-2023-13-15?&wid=333&hei=479&jpegSize=30&bfc=on&fmt=JPG&qlt=90,0&resMode=sharp2&op_usm=1.9,0.3,2,0"
                />
              </Link>
            </Card>
          </Col>
          <Col>
            <Card className="photo">
              <Link to="/component/women">
                <Card.Img
                  className="image"
                  variant="top"
                  src="https://s7ap1.scene7.com/is/image/VedantFashionsDM/Mehendi%20final%20option%202%20jpg_04-01-2023-13-15?&wid=333&hei=479&jpegSize=30&bfc=on&fmt=JPG&qlt=90,0&resMode=sharp2&op_usm=1.9,0.3,2,0"
                />
              </Link>
            </Card>
          </Col>
          <Col>
            <Card className="photo">
              <Link to="/component/women">
                <Card.Img
                  className="image"
                  variant="top"
                  src="https://s7ap1.scene7.com/is/image/VedantFashionsDM/Wedding%20final%20option%202%20jpg_04-01-2023-13-15?&wid=333&hei=479&jpegSize=30&bfc=on&fmt=JPG&qlt=90,0&resMode=sharp2&op_usm=1.9,0.3,2,0"
                />
              </Link>
            </Card>
          </Col>
          <Col>
            <Card className="photo">
              <Link to="/component/women">
                <Card.Img
                  className="image"
                  variant="top"
                  src="https://s7ap1.scene7.com/is/image/VedantFashionsDM/Reception%20final%20option%202%20jpg_04-01-2023-13-15?&wid=333&hei=479&jpegSize=30&bfc=on&fmt=JPG&qlt=90,0&resMode=sharp2&op_usm=1.9,0.3,2,0"
                />
              </Link>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container fluid className="my-2">
        <div>
          <Link to="/component/women">
            <img
              src="https://s7ap1.scene7.com/is/image/VedantFashionsDM/Last%20BG%20option%203%20jpg?&wid=1366&hei=585&jpegSize=300&bfc=on&fmt=JPG&qlt=90,0&resMode=sharp2&op_usm=1.9,0.3,2,0"
              width="1330"
              alt=""
            />
          </Link>
        </div>
      </Container>
      <Container>
        <Row>
          <Col className="w-90 text-center my-2">
            <h2
              style={{
                color: "rgb(170, 133, 49)",
                fontFamily: "'Playfair Display', serif",
              }}
            >
              From Engagement to Reception
            </h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card className="photo">
              <Link to="/component/men">
                <Card.Img
                  className="image"
                  variant="top"
                  src="https://newcdn.kalkifashion.com/media/catalog/product/b/l/black_indo-western_sherwani_set-sg130863_3_.jpg"
                />
              </Link>
            </Card>
          </Col>
          <Col>
            <Card className="photo">
              <Link to="/component/men">
                <Card.Img
                  className="image"
                  variant="top"
                  src="https://newcdn.kalkifashion.com/media/catalog/product/c/a/canary_yellow_embroidered_jacket-sg146396_3_.jpg"
                />
              </Link>
            </Card>
          </Col>
          <Col>
            <Card className="photo">
              <Link to="/component/men">
                <Card.Img
                  className="image"
                  variant="top"
                  src="https://newcdn.kalkifashion.com/media/catalog/product/b/a/baby_blue_silk_sherwani_set_in_zari-sg127834_4_.jpg"
                />
              </Link>
            </Card>
          </Col>
          <Col>
            <Card className="photo">
              <Link to="/component/men">
                <Card.Img
                  className="image"
                  variant="top"
                  src="https://newcdn.kalkifashion.com/media/catalog/product/g/e/geranium_pink_silk_embroidered-sg129019_4_.jpg"
                />
              </Link>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container fluid className="my-2">
        <div>
          <Link to="/component/men">
            <img
              src="https://s7ap1.scene7.com/is/image/VedantFashionsDM/LP%20Bottom%20Banner_Desktop%20jpg?$Men%20Desktop%20Footer%20Banner$"
              width="1330"
              alt=""
            />
          </Link>
        </div>
      </Container>
      <Container>
        <Row>
          <Col className="w-90 text-center my-2">
            <h2
              style={{
                color: "rgb(170, 133, 49)",
                fontFamily: "'Playfair Display', serif",
              }}
            >
              Kids Fashion For Wedding
            </h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card className="photo">
              <Link to="/component/kids">
                <Card.Img className="image" variant="top" src={kids} />
              </Link>
            </Card>
          </Col>
          <Col>
            <Card className="photo">
              <Link to="/component/kids">
                <Card.Img
                  style={{ height: "21.5rem" }}
                  variant="top"
                  className="image"
                  src="https://www.anerianand.com/VendorAssets/1043/StoreImages/Large/1392AN-1920-P-BLUE-ETHNIC.jpg"
                />
              </Link>
            </Card>
          </Col>
          <Col>
            <Card className="photo">
              <Link to="/component/kids">
                <Card.Img
                  variant="top"
                  className="image"
                  src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/18645130/2022/8/25/93ef8766-f66f-4552-82f3-f6ba2c03c6fe1661394164672-Aj-DEZInES-Boys-Brown-Clothing-Set-2411661394164324-2.jpg"
                  style={{ height: "21.5rem" }}
                />
              </Link>
            </Card>
          </Col>
          <Col>
            <Card className="photo">
              <Link to="/component/kids">
                <Card.Img
                  variant="top"
                  className="image"
                  style={{ height: "21.5rem" }}
                  src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/19437668/2022/8/8/84c05339-cb76-4551-a200-9d196e4d92531659959509306VastramayBoysBeigeAndCoffeeBrownSilkBlendSherwaniSet1.jpg"
                />
              </Link>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container fluid className="my-2">
        <div>
          <Link to="/component/kids">
            <img
              src="https://img.perniaspopupshop.com/HOMEPAGE_IMAGES/26_Mar_23/WEEKW26_03_23.jpg"
              width="1330"
              alt=""
            />
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Topdeals;
