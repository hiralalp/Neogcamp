import Items from "./components/Items";
import { useState } from "react";
function App() {
  const [listItems, setListItems] = useState([
    { id: 1, text: "Ice Cream", likes: 0 },
    {
      id: 2,
      text: "Chocolate",
      likes: 0
    },
    { id: 3, text: "Sandwich", likes: 0 }
  ]);

  const [cartItems, setCartItems] = useState([]);

  const Like = (id) => {
    const elementsIndexListItem = listItems.findIndex((item) => item.id === id);
    const elementsIndexcartItem = cartItems.findIndex((item) => item.id === id);
    let listItemArr = [...listItems];
    let cartItemArr = [...cartItems];
    if(elementsIndexcartItem===-1){
      cartItemArr.push(listItemArr[elementsIndexListItem])
      setCartItems(cartItemArr);
    }
      
    else{
      cartItemArr[elementsIndexListItem].likes+=1
      setCartItems(cartItemArr);

    }
    
  };
  return (
    <div className="App">

<div>
<h3>List of Items</h3>
{listItems.length > 0 ? (
        <Items items={listItems} onLike={Like} />
      ) : (
        "No items To Display"
      )}
</div>

<div style={{boder:"2px solid red"}}>
<h3>Items in the Cart</h3>
{cartItems.length > 0 ? (
        <Items items={cartItems} onLike={Like} />
      ) : (
        "No items in Cart"
      )}
</div>

    </div>
  );
}

export default App;
