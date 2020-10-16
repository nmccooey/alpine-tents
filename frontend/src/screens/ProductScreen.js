import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  Form,
} from "react-bootstrap";
import Rating from "../components/Rating";
import { listProductDetails } from "../actions/productActions";
import Message from "../components/Message";
import Loader from "../components/Loader";

const ProductScreen = ({ history, match }) => {
  const [qty, setQty] = useState(0);

  const dispatch = useDispatch();

  const productDetails = useSelector(state => state.productDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    dispatch(listProductDetails(match.params.id));
  }, [dispatch, match]);

  const addToCardHandler = () => {
    history.push(`/cart/${match.params.id}?qty=${qty}`);
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
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

                {product.countInStock > 0 && (
                  <ListGroup.Item>
                    <Row>
                      <Col>Qty</Col>
                      <Col>
                        <Form.Control
                          as='select'
                          value={qty}
                          onChange={e => setQty(e.target.value)}
                        >
                          {[...Array(product.countInStock).keys()].map(x => (
                            <option key={x + 1} value={x + 1}>
                              {x + 1}
                            </option>
                          ))}
                        </Form.Control>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                )}

                <ListGroup.Item>
                  <Button
                    onClick={addToCardHandler}
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
      )}

      <Link className='btn btn-dark my-3' to='/'>
        Go Back
      </Link>
    </>
  );
};

export default ProductScreen;
