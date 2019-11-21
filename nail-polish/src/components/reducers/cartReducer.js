import {
  ADD_TO_CART,
  REMOVE_ITEM,
  SUB_QUANTITY,
  ADD_QUANTITY
} from "../actions/action-types/cart-actions";

const initState = {
  items: [
    //Snowed-In Collection
    {
      id: 1,
      title: "Snowed In Collection",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 62.5,
      img: "https://i.imgur.com/JoaJ1iQ.jpg",
      rating: 5,
      reviews: 7,
      collection: "snowedin"
    },
    {
      id: 2,
      title: "Bundled Up",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 10.0,
      img: "https://i.imgur.com/RPTTK4g.jpg",
      rating: 5,
      reviews: 7,
      collection: "snowedin"
    },
    {
      id: 3,
      title: "Tinsel",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 10.0,
      img: "https://i.imgur.com/9PI8uz1.jpg",
      rating: 5,
      reviews: 7,
      collection: "snowedin"
    },
    {
      id: 4,
      title: "Greatness",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 12.5,
      img: "https://i.imgur.com/TpOutVI.jpg",
      rating: 5,
      reviews: 7,
      collection: "snowedin"
    },
    {
      id: 5,
      title: "Christmas Cookie",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 10.0,
      img: "https://i.imgur.com/55yynw5.jpg",
      rating: 5,
      reviews: 7,
      collection: "snowedin"
    },
    {
      id: 6,
      title: "Cold As Ice",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 10.0,
      img: "https://i.imgur.com/z8cSXUx.jpg",
      rating: 5,
      reviews: 7,
      collection: "snowedin"
    },
    {
      id: 7,
      title: "Say Love",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 60.0,
      img: "https://i.imgur.com/bKcjr4O.jpg",
      rating: 5,
      reviews: 7,
      collection: "snowedin"
    },
    //Monarchy Collection
    {
      id: 8,
      title: "Monarchy Collection",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 60.0,
      img: "https://i.imgur.com/CPiPs0V.jpg",
      rating: 5,
      reviews: 7,
      collection: "monarchy"
    },
    {
      id: 9,
      title: "Legacy",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 10.0,
      img: "https://i.imgur.com/i8xlczk.jpg",
      rating: 5,
      reviews: 7,
      collection: "monarchy"
    },
    {
      id: 10,
      title: "Empress",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 10.0,
      img: "https://i.imgur.com/QszXGjC.jpg",
      rating: 5,
      reviews: 7,
      collection: "monarchy"
    },
    {
      id: 11,
      title: "Isabella",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 10.0,
      img: "https://i.imgur.com/f4lmsft.jpg",
      rating: 5,
      reviews: 7,
      collection: "monarchy"
    },
    {
      id: 12,
      title: "Bloodline",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 10.0,
      img: "https://i.imgur.com/BaBctfG.jpg",
      rating: 5,
      reviews: 7,
      collection: "monarchy"
    },
    {
      id: 13,
      title: "Chateau",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 10.0,
      img: "https://i.imgur.com/3PI6vow.jpg",
      rating: 5,
      reviews: 7,
      collection: "monarchy"
    },
    {
      id: 14,
      title: "Vanity",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 10.0,
      img: "https://i.imgur.com/uwVH2X5.jpg",
      rating: 5,
      reviews: 7,
      collection: "monarchy"
    },
    //Gift Cards
    {
      id: 15,
      title: "ILNP eGift Card",
      desc: "",
      price: 10.0,
      img: "https://i.imgur.com/phhBviy.png",
      rating: 5,
      reviews: 35,
      collection: "giftcard"
    },
    {
      id: 16,
      title: "ILNP Gift Card",
      desc: "",
      price: 10.0,
      img: "https://i.imgur.com/phhBviy.png",
      rating: 5,
      reviews: 35,
      collection: "giftcard"
    }
  ],
  addedItems: [],
  total: 0,
  hover: false
};

const cartReducer = (state = initState, action) => {
  //INSIDE HOME COMPONENT
  if (action.type === ADD_TO_CART) {
    let addedItem = state.items.find(item => item.id === action.id);
    //check if the action id exists in the addedItems
    let existed_item = state.addedItems.find(item => action.id === item.id);
    if (existed_item) {
      addedItem.quantity += 1;
      return {
        ...state,
        total: state.total + addedItem.price
      };
    } else {
      addedItem.quantity = 1;
      //calculating the total
      let newTotal = state.total + addedItem.price;

      return {
        ...state,
        addedItems: [...state.addedItems, addedItem],
        total: newTotal
      };
    }
  }
  if (action.type === REMOVE_ITEM) {
    let itemToRemove = state.addedItems.find(item => action.id === item.id);
    let new_items = state.addedItems.filter(item => action.id !== item.id);

    //calculating the total
    let newTotal = state.total - itemToRemove.price * itemToRemove.quantity;
    console.log(itemToRemove);
    return {
      ...state,
      addedItems: new_items,
      total: newTotal
    };
  }
  //INSIDE CART COMPONENT
  if (action.type === ADD_QUANTITY) {
    let addedItem = state.items.find(item => item.id === action.id);
    addedItem.quantity += 1;
    let newTotal = state.total + addedItem.price;
    return {
      ...state,
      total: newTotal
    };
  }
  if (action.type === SUB_QUANTITY) {
    let addedItem = state.items.find(item => item.id === action.id);
    //if the qt == 0 then it should be removed
    if (addedItem.quantity === 1) {
      let new_items = state.addedItems.filter(item => item.id !== action.id);
      let newTotal = state.total - addedItem.price;
      return {
        ...state,
        addedItems: new_items,
        total: newTotal
      };
    } else {
      addedItem.quantity -= 1;
      let newTotal = state.total - addedItem.price;
      return {
        ...state,
        total: newTotal
      };
    }
  }
  return state;
};

export default cartReducer;
