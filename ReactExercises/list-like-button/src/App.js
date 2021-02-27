import Items from "./components/Items";
import { useState } from "react";
function App() {
  const [items, setItems] = useState([
    { id: 1, text: "Ice Cream", likes: 0 },
    {
      id: 2,
      text: "Chocolate",
      likes: 0
    },
    { id: 3, text: "Sandwich", likes: 0 },
    {
      id: 4,
      text: "Coke",
      likes: 0
    },
    { id: 5, text: "Chips", likes: 0 },
    {
      id: 6,
      text: "French Fries",
      likes: 0
    }
  ]);

  const Like = (id) => {
    const elementsIndex = items.findIndex((item) => item.id === id);
    let newArray = [...items];
    newArray[elementsIndex].likes += 1;
    setItems(newArray);
  };
  return (
    <div className="App">
      {items.length > 0 ? (
        <Items items={items} onLike={Like} />
      ) : (
        "No Task To Do"
      )}
    </div>
  );
}

export default App;
