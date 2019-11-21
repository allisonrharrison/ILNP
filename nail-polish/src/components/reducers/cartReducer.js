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
      desc: "",
      price: 62.5,
      img: "https://i.imgur.com/JoaJ1iQ.jpg",
      rating: 5,
      reviews: 1,
      collection: "snowedin"
    },
    {
      id: 2,
      title: "Bundled Up",
      desc: "",
      price: 10.0,
      img: "https://i.imgur.com/RPTTK4g.jpg",
      rating: 5,
      reviews: 1,
      collection: "snowedin"
    },
    {
      id: 3,
      title: "Tinsel",
      desc: "",
      price: 10.0,
      img: "https://i.imgur.com/9PI8uz1.jpg",
      rating: 0,
      reviews: 0,
      collection: "snowedin"
    },
    {
      id: 4,
      title: "Greatness",
      desc: "",
      price: 12.5,
      img: "https://i.imgur.com/TpOutVI.jpg",
      rating: 0,
      reviews: 0,
      collection: "snowedin"
    },
    {
      id: 5,
      title: "Christmas Cookie",
      desc: "",
      price: 10.0,
      img: "https://i.imgur.com/55yynw5.jpg",
      rating: 5,
      reviews: 2,
      collection: "snowedin"
    },
    {
      id: 6,
      title: "Cold As Ice",
      desc: "",
      price: 10.0,
      img: "https://i.imgur.com/z8cSXUx.jpg",
      rating: 5,
      reviews: 2,
      collection: "snowedin"
    },
    {
      id: 7,
      title: "Say Love",
      desc: "",
      price: 60.0,
      img: "https://i.imgur.com/bKcjr4O.jpg",
      rating: 5,
      reviews: 4,
      collection: "snowedin"
    },
    //Monarchy Collection
    {
      id: 8,
      title: "Monarchy Collection",
      desc: "",
      price: 60.0,
      img: "https://i.imgur.com/CPiPs0V.jpg",
      rating: 5,
      reviews: 14,
      collection: "monarchy"
    },
    {
      id: 9,
      title: "Legacy",
      desc: "",
      price: 10.0,
      img: "https://i.imgur.com/i8xlczk.jpg",
      rating: 5,
      reviews: 21,
      collection: "monarchy"
    },
    {
      id: 10,
      title: "Empress",
      desc: "",
      price: 10.0,
      img: "https://i.imgur.com/QszXGjC.jpg",
      rating: 5,
      reviews: 9,
      collection: "monarchy"
    },
    {
      id: 11,
      title: "Isabella",
      desc: "",
      price: 10.0,
      img: "https://i.imgur.com/f4lmsft.jpg",
      rating: 5,
      reviews: 46,
      collection: "monarchy"
    },
    {
      id: 12,
      title: "Bloodline",
      desc: "",
      price: 10.0,
      img: "https://i.imgur.com/BaBctfG.jpg",
      rating: 5,
      reviews: 35,
      collection: "monarchy"
    },
    {
      id: 13,
      title: "Chateau",
      desc: "",
      price: 10.0,
      img: "https://i.imgur.com/3PI6vow.jpg",
      rating: 5,
      reviews: 42,
      collection: "monarchy"
    },
    {
      id: 14,
      title: "Vanity",
      desc: "",
      price: 10.0,
      img: "https://i.imgur.com/uwVH2X5.jpg",
      rating: 5,
      reviews: 47,
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
      reviews: 19,
      collection: "giftcard"
    },
    //Nine to Five Collection
    {
      id: 17,
      title: "Nine to Five Collection",
      desc: "",
      price: 70.0,
      img: "https://i.imgur.com/G9sxUNj.jpg",
      rating: 5,
      reviews: 25,
      collection: "ninetofive"
    },
    {
      id: 18,
      title: "Overcoat",
      desc: "",
      price: 10.0,
      img: "https://i.imgur.com/ZpnmMN9.jpg",
      rating: 5,
      reviews: 12,
      collection: "ninetofive"
    },
    {
      id: 19,
      title: "ASAP",
      desc: "",
      price: 10.0,
      img: "https://i.imgur.com/L5cEVGb.jpg",
      rating: 5,
      reviews: 29,
      collection: "ninetofive"
    },
    {
      id: 20,
      title: "Coffee Run",
      desc: "",
      price: 10.0,
      img: "https://i.imgur.com/q2mgW5d.jpg",
      rating: 5,
      reviews: 56,
      collection: "ninetofive"
    },
    {
      id: 21,
      title: "Portfolio",
      desc: "",
      price: 10.0,
      img: "https://i.imgur.com/zBxSuyR.jpg",
      rating: 5,
      reviews: 15,
      collection: "ninetofive"
    },
    {
      id: 22,
      title: "Rumor Has It",
      desc: "",
      price: 10.0,
      img: "https://i.imgur.com/50b1Psz.jpg",
      rating: 5,
      reviews: 19,
      collection: "ninetofive"
    },
    {
      id: 23,
      title: "CEO",
      desc: "",
      price: 10.0,
      img: "https://i.imgur.com/whvMKSr.jpg",
      rating: 5,
      reviews: 23,
      collection: "ninetofive"
    },
    {
      id: 24,
      title: "Internship",
      desc: "",
      price: 10.0,
      img: "https://i.imgur.com/hc2iOwL.jpg",
      rating: 5,
      reviews: 48,
      collection: "ninetofive"
    },
    //Summer Feels Collection
    {
      id: 25,
      title: "Summer Feels Collection",
      desc: "",
      price: 67.5,
      img: "https://i.imgur.com/6WWho9i.jpg",
      rating: 5,
      reviews: 26,
      collection: "summerfeels"
    },
    {
      id: 26,
      title: "Summer Lovin'",
      desc: "",
      price: 12.5,
      img: "https://i.imgur.com/gecyOsw.jpg",
      rating: 5,
      reviews: 80,
      collection: "summerfeels"
    },
    {
      id: 27,
      title: "On Repeat",
      desc: "",
      price: 10.0,
      img: "https://i.imgur.com/A7q7vHW.jpg",
      rating: 5,
      reviews: 38,
      collection: "summerfeels"
    },
    {
      id: 28,
      title: "Heat Wave",
      desc: "",
      price: 12.5,
      img: "https://i.imgur.com/dFOrb9v.jpg",
      rating: 5,
      reviews: 48,
      collection: "summerfeels"
    },
    {
      id: 29,
      title: "Talk It Up",
      desc: "",
      price: 10.0,
      img: "https://i.imgur.com/4zqlvAW.jpg",
      rating: 5,
      reviews: 57,
      collection: "summerfeels"
    },
    {
      id: 30,
      title: "Morning Rays",
      desc: "",
      price: 12.5,
      img: "https://i.imgur.com/tbJtD2P.jpg",
      rating: 5,
      reviews: 45,
      collection: "summerfeels"
    },
    {
      id: 31,
      title: "Freefall",
      desc: "",
      price: 10.0,
      img: "https://i.imgur.com/BRgSqAJ.jpg",
      rating: 5,
      reviews: 35,
      collection: "summerfeels"
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
