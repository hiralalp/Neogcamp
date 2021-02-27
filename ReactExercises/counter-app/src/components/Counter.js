const Counter = ({ count, color }) => {
  return (
    <h1>
      Your Count is <span style={{ color: color }}>{count}</span>
    </h1>
  );
};

export default Counter;
