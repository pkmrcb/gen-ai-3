import React from "react";

const QueryHistory = ({ history = [], onSelect = () => {} }) => {
  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold">Query History</h3>
      {history.length === 0 ? (
        <p className="text-gray-500">No queries yet.</p>
      ) : (
        <ul className="mt-2">
          {history.map((item, index) => (
            <li
              key={index}
              className="cursor-pointer text-blue-500 hover:underline"
              onClick={() => onSelect(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default QueryHistory;
