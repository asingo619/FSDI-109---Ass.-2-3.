import axios from "axios";

var data = [
    {
        _id:"001",
        title: "3 Stix Combo",
        price: 12.00,
        category: "Stick Combo",
        image: "stix-combo.png",
        discount: 0,
        minimum: 1
    },
    {
        _id:"002",
        title: "2 Stix Combo",
        price: 9.00,
        category: "Stick Combo",
        image: "stix-combo.png",
        discount: 0,
        minimum: 1
    },
    {
        _id:"003",
        title: "Papaya Salad",
        price: 8.00,
        category: "Sticky Rice Fav",
        image: "papaya-salad.png",
        discount: 0,
        minimum: 1
    },
    {
        _id:"004",
        title: "Larb",
        price: 8.00,
        category: "Sticky Rice Fav",
        image: "larb.png",
        discount: 0,
        minimum: 1
    },    
    {
        _id:"005",
        title: "Lao Sausages",
        price: 9.00,
        category: "Sticky Rice Fav",
        image: "lao-sausages.png",
        discount: 0,
        minimum: 1
    },
    {
        _id:"006",
        title: "Eggrolls",
        price: 4.00,
        category: "Sticky Rice Fav",
        image: "eggrolls.png",
        discount: 0,
        minimum: 1
    },
    {
        _id:"007",
        title: "TSRS Surf N Turf",
        price: 12.00,
        category: "Rice Combo",
        image: "tsrs-surfnturf.png",
        discount: 3,
        minimum: 1
    },
    {
        _id:"008",
        title: "Garlic Pepper Pork",
        price: 12.00,
        category: "Rice Combo",
        image: "garlic-pepper-pork.png",
        discount: 0,
        minimum: 1
    },
    {
        _id:"009",
        title: "Spicy Eggplant Tofu",
        price: 12.00,
        category: "Rice Combo",
        image: "spicy-eggplant-tofu.png",
        discount: 0,
        minimum: 1
    },

];





class ItemService {
    async getCatalog() {
        let response = await axios. get("http://127.0.0.1:5000/api/catalog");
        return response.data;

        return data;
    }


async saveItem(item) {
    try {
    let response = await axios.post ("http://127.0.0.1:5000/api/catalog", item);
    console.log("result of saving", response.data);
    } catch { 
        console.log("Error,product not saved");
    }
    }
}


export default ItemService;