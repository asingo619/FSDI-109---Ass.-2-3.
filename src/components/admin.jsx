import "./admin.css";
import { useState } from "react";
import ItemService from "../services/itemService";

const Admin = () => {
  const [product, setProduct] = useState({});

  const textChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    // create a copy of the object
    let copy = { ...product }; //<-- this is a hard copy (spread operator)
    // modify the copy
    copy[name] = value;
    // set the copy to the state
    setProduct(copy);
  };

  const register = () => {
    console.log(product);
    var copy = {...product};
    copy.price = parseFloat(copy.price);
    copy.minimum = +copy.minimum; //alternative (copy.minimum * 1)
    copy.discount = parseFloat(copy.discount);
    
  
    let service = new ItemService();
    service.saveItem(copy); 
  };

  return (
    <div className="admin-page">
      <h1>Store Managment</h1>

      <div className="my-control">
        <label>Title</label>
        <input type="text" name="title" onChange={textChange} />
      </div>

      <div className="my-control">
        <label>Price</label>
        <input type="text" name="price" onChange={textChange} />
      </div>

      <div className="my-control">
        <label>Category</label>
        <input type="text" name="category" onChange={textChange} />
      </div>

      <div className="my-control">
        <label>Image</label>
        <input type="text" name="image" onChange={textChange} />
      </div>

      <div className="my-control">
        <label>Discount</label>
        <input type="text" name="discount" onChange={textChange} />
      </div>

      <div className="my-control">
        <label>Minimum</label>
        <input type="text" name="minimum" onChange={textChange} />
      </div>

      <div className="my-control">
        <button className="btn btn-primary" onClick = {register}>Register Item</button>
      </div>
    </div>
  );
};

export default Admin;
