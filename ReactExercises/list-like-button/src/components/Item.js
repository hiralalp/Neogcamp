import { FaHeart } from "react-icons/fa";

const Item = ({ item, onLike }) => {
  return (
    <div className="task">
      <h3>
        {item.text}
        <FaHeart
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => onLike(item.id)}
        />
        Likes {item.likes}
      </h3>
    </div>
  );
};

export default Item;
