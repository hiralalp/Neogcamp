import Item from "./Item";

const Items = ({ items, onLike }) => {
  return (
    <>
      {items.map((item) => (
        <Item key={item.id} item={item} onLike={onLike} />
      ))}
    </>
  );
};

export default Items;
