import axios from "axios";
import "./Shop.css";
import React, { useEffect, useState } from "react";

function ShopProduct() {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState(true);
  const [product, setProduct] = useState({
    image: "",
    title: "",
    price: "",
  });
  const ProductsList = async () => {
    await axios
      .get("https://fakestoreapi.com/products/")
      .then((P_Data) => {
        setData(P_Data.data);
      })
      .catch((error) => {
        console.log("erooor");
      });
  };
  useEffect(() => {
    ProductsList();
  }, []);
  const FilterProduct = (e) => {
    const value = e.target.value;
    if (value == "high") {
      const SortPrice = data.sort((a, b) => a.price - b.price).reverse();
      setData([...SortPrice]);
    } else if (value == "low") {
      const SortPrice = data.sort((a, b) => a.price - b.price);
      setData([...SortPrice]);
    }
  };
  const ADD = () => {
    setCart(false);
  };
  
  const getData = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setProduct({ ...product, [name]: value });
  };
  const AddProduct = () => {
    axios.post("https://fakestoreapi.com/products", product);
    setCart(true);
  };
  const Delete = (e) => {
    console.log(e);
    axios.delete(`https://fakestoreapi.com/products/${e}`);
  };
  return (
  <div>
  
     <div>
     
    
    <nav className="nav">
      <select name="Price" id="filter" onChange={FilterProduct}>
        <option disabled selected>
          Filter
        </option>
        <option value="high">Hight To Low Price</option>
        <option value="low">Low To High Price</option>
      </select>
      <div className="addProduct mt-5">
        {" "}
        <button className="addProduct btn-primary" onClick={ADD}>
          ADD PRODUCT
        </button>
      </div>
    </nav>
    {cart ? (
      data.map((element, index) => (
        <div key={index} className="bordersize">
          <div><img className="images shadow1" src={element.image} alt="images" /></div>
          <div><p className=" ms-5 h5 mt-3">{element.category}</p></div>
          <h4 className=" "> $ {element.price}</h4>
          <span className="mt-2">
            <button onClick={() => Delete(element.id)}>Delete</button>
          </span>
        </div>
      ))
    ) : (
      <>
        <input
          type="url"
          placeholder="Enter image url"
          value={product.image}
          name="image"
          onChange={getData}
        />
        <input
          type="text"
          placeholder="Enter image category"
          value={product.title}
          name="title"
          onChange={getData}
        />
        <input
          type="number"
          placeholder="Enter price"
          value={product.price}
          name="price"
          onChange={getData}
        />
        <button onClick={AddProduct}>ADD Product</button>
      </>
    )}
  </div>
  </div>
  );
}

export default ShopProduct;
