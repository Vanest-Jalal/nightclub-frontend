const TableMap = ({ setSelectedTable }) => {
  function handleClick(tableNumber) {
    setSelectedTable(tableNumber);
  }
  const tables = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  return (
    <ul className="grid grid-cols-3 gap-3">
      {tables.map((tableNumber) => (
        <li key={tableNumber}>
          <button
            className="w-full p-3"
            onClick={() => handleClick(tableNumber)}
          >
            {tableNumber}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TableMap;
