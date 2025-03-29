import React, { useState } from "react";

const QueryInput = ({ onSubmit }) => {
  const [query, setQuery] = useState("");

  return (
    <div className="flex flex-col space-y-2 p-4">
      <input
        type="text"
        placeholder="Ask a business question..."
        className="w-full px-4 py-2 border rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
        onClick={() => onSubmit(query)}
      >
        Submit Query
      </button>
    </div>
  );
};

export default QueryInput;
