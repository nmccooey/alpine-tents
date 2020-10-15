import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";
import Rating from "../components/Rating";
import products from "../products";

const ProductScreen = ({ match }) => {
  const product = products.find(p => p._id === match.params.id);
  return (
    <>
      <Row className='mt-5'>
        <Col md={4}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={5}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h2>{product.name}</h2>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
              />
            </ListGroup.Item>
            <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
            <ListGroup.Item>{product.description}</ListGroup.Item>
            <ListGroup.Item>
              <div>
                <strong>Brand: </strong>
                {product.brand}
              </div>
              <div>
                <strong>Season: </strong>
                {product.season}
              </div>
              <div>
                <strong>Capacity: </strong>
                {product.capacity}
              </div>
              <div>
                <strong>Packed Weight: </strong>
                {product.packed_weight}
              </div>
              <div>
                <strong>Floor Dimensions: </strong>
                {product.floor_dimensions}
              </div>
              <div>
                <strong>Door Count: </strong>
                {product.door_count}
              </div>
              <div>
                <strong>Canopy Fabric: </strong>
                {product.canopy_fabric}
              </div>
              <div>
                <strong>Floor Fabric: </strong>
                {product.floor_fabric}
              </div>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>{product.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  className='btn-block btn-dark'
                  type='button'
                  disabled={product.countInStock === 0}
                >
                  Add to Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
      <Link className='btn btn-dark my-3' to='/'>
        Go Back
      </Link>
    </>
  );
};

export default ProductScreen;
