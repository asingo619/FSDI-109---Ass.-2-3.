import "./itemsOnCart.css";

const ItemsOnCart = (props) => {
    const getTotal = () => {
        let total = props.data.quantity * props.data.price;
        return total.toFixed(2);
    };
    return (  
        <div className="item-on-cart">
            <img src={"/item-images/" + props.data.image}></img>
            
            <div className="item-info">
                <h6>{props.data.title}</h6>
                <label>{props.data.category}</label>
            </div>
            <label>Price: ${props.data.price.toFixed(2)}</label>
            <label>Quantity: {props.data.quantity}</label>
            <label>Total: ${getTotal()}</label>
            
            <button className="btn btn-sm btn-outline-danger">Remove</button>
        </div>
    );
};
//  GIT TEST
export default ItemsOnCart;