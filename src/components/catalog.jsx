import React, { useEffect, useState } from "react";
import Item from "./item";
import "./catalog.css";
import ItemService from "../services/itemService";

const Catalog = () => {
  // state variables
  let [products, setProducts] = useState([]);
  let [filterDisplay, setFilterDisplay] =useState([]);
  let [categories, setCategories] = useState([]);

  // logic(fns)
  const retrieveCatalog = async () => {
    let service = new ItemService();
    let cat = await service.getCatalog();
    setProducts(cat);
    setFilterDisplay(cat);
    console.log(cat);

    let categories = [];
    for (let i = 0; i < cat.length; i++) {
      let prod = cat[i];

      if (!categories.includes(prod.category)) {
        categories.push(prod.category);
      }
    }
    console.log(categories);
    setCategories(categories);
  };
  const handleFilters = (category) => {
    console.log("Filters", category);

    let filters = [];
      for (let i = 0; i<products.length; i++) {
        let prod = products[i]; 
      
        if (prod.category === category) {
          filters.push(prod);
        } 
      }
      setFilterDisplay(filters);
  };
      const handleFilterReset = () => {
        setFilterDisplay(products);

        // alternative syntax for above- setFilterDisplay(products.filter((prod) => prod.category ===category));
      }


  // effect
  useEffect(() => {
    retrieveCatalog();
  }, []); //*[] added to ensure logic will be called only ONE TIME*

  // return
  return (
    <div className="catalog-page">
      <h1>The Sticky Rice Spot</h1>
      <h5>Southeast Asian Street Foods!</h5>
      <h6>There are {products.length} delicious item options!.</h6>

      <div className="filters">

        <button onClick={handleFilterReset} className="btn btn-outline-primary mx-1">All</button>

        {categories.map((cat) => {
          return (
            <button
              onClick={() => {
                handleFilters(cat);
              }}
              key={cat}
              className="btn btn-outline-primary mx-1">
              {cat}
            </button>
          );
        })}
      </div>

      <div className="item-container">
        {filterDisplay.map((prod) => (
          <Item key={prod._id} data={prod}></Item>
        ))}
      </div>
    </div>
  );
};

export default Catalog;
