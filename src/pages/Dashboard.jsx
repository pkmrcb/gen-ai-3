import React, { useState } from "react";
import QueryInput from "../components/QueryInput";
import QueryHistory from "../components/QueryHistory";
import ResultDisplay from "../components/ResultDisplay";
import LoadingSpinner from "../components/LoadingSpinner";

const Dashboard = () => {
  const [queryHistory, setQueryHistory] = useState([]);
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleQuerySubmit = (query) => {
    setLoading(true);
    setQueryHistory((prev) => [query, ...prev]);

    setTimeout(() => {
      setResults({ labels: ["Sales", "Profit", "Growth"], values: [50, 30, 70] });
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold text-center mb-6">Gen AI Analytics Dashboard</h1>
      <QueryInput onSubmit={handleQuerySubmit} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <QueryHistory history={queryHistory} onSelect={handleQuerySubmit} />
        {loading ? <LoadingSpinner /> : <ResultsDisplay results={results} />}
      </div>
    </div>
  );
};

export default Dashboard;
