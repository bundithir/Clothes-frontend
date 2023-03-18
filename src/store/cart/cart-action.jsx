// import { CART_ACTION_TYPES } from "./cart-type"

// const Additems = (CartItems , itemAdded) => {
//     const ItemExist = CartItems.find(item => item.id === itemAdded.id)
//     if(ItemExist){
//         return CartItems.map(item => item.id === itemAdded.id?
//             {...item,quantity:item.quantity+1}
//             :
//             item)
//     }
//     return [...CartItems,{...itemAdded , quantity : 1}]
// }

// const Removeitem = (CartItems , ItemRemoved) =>{
//     const ItemExist = CartItems.find( item => item.id === ItemRemoved.id)
    
//     if(ItemExist.quantity === 1){
//         return CartItems.filter( item => item.id !== ItemRemoved.id)
//     }
//     return CartItems.map(item => item.id === ItemRemoved.id?
//         {...item,quantity:item.quantity-1}
//         :
//         item)
// }

// const DeleteItem = (CartItems , ItemDeleted) =>  CartItems.filter( item => item.id !== ItemDeleted.id)


// export const AddtoCart = (CartItems,itemAdded) => {
//     const NewCartItems = Additems(CartItems , itemAdded)
//     return {
//         type : CART_ACTION_TYPES.SET_CART_ITEM , 
//         payload : NewCartItems
//     }
// }
// export const RemovefromCart =(CartItems,ItemRemoved) =>{
//     const NewCartItems = Removeitem(CartItems , ItemRemoved)
//     return {
//         type : CART_ACTION_TYPES.SET_CART_ITEM , 
//         payload : NewCartItems
//     }
// }
// export const DeleteItemfromCart = (CartItems,ItemDeleted) => {
//     const NewCartItems = DeleteItem(CartItems , ItemDeleted)
//     return {
//         type : CART_ACTION_TYPES.SET_CART_ITEM , 
//         payload : NewCartItems
//     }
// }


// export const SetIsCartOpen = (Boolean) =>{
//     return {
//         type : CART_ACTION_TYPES.SET_CART_OPEN , 
//         payload : Boolean
//     }
// }


