import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import FormContainer from "../components/FormContainer";
import { listProductDetails, updateProduct } from "../actions/productActions";
import { PRODUCT_UPDATE_RESET } from "../constants/productConstants";

const ProductEditScreen = ({ match, history }) => {
  const productId = match.params.id;

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");
  const [brand, setBrand] = useState("");
  const [season, setSeason] = useState("");
  const [capacity, setCapacity] = useState("");
  const [packed_weight, setPackedWeight] = useState("");
  const [packed_size, setPackedSize] = useState("");
  const [floor_dimensions, setFloorDimensions] = useState("");
  const [peak_height, setPeakHeight] = useState("");
  const [door_count, setDoorCount] = useState("");
  const [canopy_fabric, setCanopyFabric] = useState("");
  const [floor_fabric, setFloorFabric] = useState("");
  const [countInStock, setCountInStock] = useState(0);
  const [description, setDescription] = useState("");

  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  const productUpdate = useSelector((state) => state.productUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = productUpdate;

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: PRODUCT_UPDATE_RESET });
      history.push("/admin/productlist");
    } else {
      if (!product.name || product._id !== productId) {
        dispatch(listProductDetails(productId));
      } else {
        setName(product.name);
        setPrice(product.price);
        setImage(product.image);
        setBrand(product.brand);
        setSeason(product.season);
        setCapacity(product.capacity);
        setPackedWeight(product.packed_weight);
        setPackedSize(product.packed_size);
        setFloorDimensions(product.floor_dimensions);
        setPeakHeight(product.peak_height);
        setDoorCount(product.door_count);
        setCanopyFabric(product.canopy_fabric);
        setFloorFabric(product.floor_fabric);
        setCountInStock(product.countInStock);
        setDescription(product.description);
      }
    }
  }, [dispatch, history, productId, product, successUpdate]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateProduct({
        _id: productId,
        name,
        price,
        image,
        brand,
        season,
        capacity,
        packed_weight,
        packed_size,
        floor_dimensions,
        peak_height,
        door_count,
        canopy_fabric,
        floor_fabric,
        description,
        countInStock,
      })
    );
  };

  return (
    <>
      <Link
        to="/admin/productlist"
        className="btn btn-dark my-3"
        variant="dark"
      >
        Go Back
      </Link>
      <FormContainer>
        <h1>Edit Product</h1>
        {loadingUpdate && <Loader />}
        {errorUpdate && <Message variant="danger">{errorUpdate}</Message>}
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <Form onSubmit={submitHandler}>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="name"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="price">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="image">
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter image url"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="brand">
              <Form.Label>Brand</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter brand"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="season">
              <Form.Label>Season</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter season"
                value={season}
                onChange={(e) => setSeason(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="capacity">
              <Form.Label>Capacity</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter capacity"
                value={capacity}
                onChange={(e) => setCapacity(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="packed_weight">
              <Form.Label>Packed Weight</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter packed weight"
                value={packed_weight}
                onChange={(e) => setPackedWeight(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="packed_size">
              <Form.Label>Packed Size</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter packed size"
                value={packed_size}
                onChange={(e) => setPackedSize(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="floor_dimensions">
              <Form.Label>Floor Dimensions</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter floor dimensions"
                value={floor_dimensions}
                onChange={(e) => setFloorDimensions(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="peak_height">
              <Form.Label>Peak Height</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter peak height"
                value={peak_height}
                onChange={(e) => setPeakHeight(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="door_count">
              <Form.Label>Door Count</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter door count"
                value={door_count}
                onChange={(e) => setDoorCount(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="canopy_fabric">
              <Form.Label>Canopy Fabric</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter canopy fabric"
                value={canopy_fabric}
                onChange={(e) => setCanopyFabric(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="floor_fabric">
              <Form.Label>Floor Fabric</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter floor fabric"
                value={floor_fabric}
                onChange={(e) => setFloorFabric(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="countInStock">
              <Form.Label>Count In Stock</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter countInStock"
                value={countInStock}
                onChange={(e) => setCountInStock(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Button type="submit" variant="primary">
              Update
            </Button>
          </Form>
        )}
      </FormContainer>
    </>
  );
};

export default ProductEditScreen;
