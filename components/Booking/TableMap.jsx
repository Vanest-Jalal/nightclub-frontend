const TableMap = ({ setSelectedTable }) => {
  function handleClick(tableNumber) {
    setSelectedTable(tableNumber);
  }
  return <button onClick={() => handleClick(1)}>Table 1</button>;
};

export default TableMap;
