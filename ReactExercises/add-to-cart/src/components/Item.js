import { FaCartArrowDown } from "react-icons/fa";

const Item = ({ item, onLike }) => {
  return (
    <div className="task">
      <h3>
        {item.text}
        <FaCartArrowDown
          style={{ color: "orange", cursor: "pointer" }}
          onClick={() => onLike(item.id)}
        />
        No of Items in cart ({item.likes})
      </h3>
    </div>
  );
};

export default Item;
