import { ADD_TO_CART} from '../actions/action-types/cart-actions';


const initState = {
    items: [
        {id:1,title:'Snowed In Collection', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:62.50},
        {id:2,title:'Bundled Up', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:10},
        {id:3,title:'Tinsel', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:10},
        {id:4,title:'Greatness', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:12.50},
        {id:5,title:'Christmas Cookie', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:10},
        {id:6,title:'Cold As Ice', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:10} 
    ],
    addedItems:[],
    total: 0
  }

    const cartReducer = (state = initState,action)=>{
   
      //INSIDE HOME COMPONENT
      if(action.type === ADD_TO_CART){
            let addedItem = state.items.find(item=> item.id === action.id)
            //check if the action id exists in the addedItems
           let existed_item= state.addedItems.find(item=> action.id === item.id)
           if(existed_item)
           {
              addedItem.quantity += 1 
               return{
                  ...state,
                   total: state.total + addedItem.price 
                    }
          }
           else{
              addedItem.quantity = 1;
              //calculating the total
              let newTotal = state.total + addedItem.price 
              
              return{
                  ...state,
                  addedItems: [...state.addedItems, addedItem],
                  total : newTotal
              }
              
          }
      }
      else{
          return state
      }
    }
export default cartReducer;