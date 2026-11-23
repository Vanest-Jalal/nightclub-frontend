const TableMap = ({ setSelectedTable }) => {
  function handleClick(tableNumber) {
    setSelectedTable(tableNumber);
  }
  return <button onClick={handleClick}>Table 1</button>;
};

export default TableMap;
