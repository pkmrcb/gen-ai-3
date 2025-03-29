import { Provider } from "react-redux";
import store from "./redux/store";
import QueryInput from "./components/QueryInput";
import QueryHistory from "./components/QueryHistory";
import ResultDisplay from "./components/ResultDisplay";

const App = () => {
  return (
    <Provider store={store}>
      <div className="max-w-2xl mx-auto mt-10 space-y-4">
        <QueryInput />
        <QueryHistory />
        <ResultDisplay />
      </div>
    </Provider>
  );
};

export default App;
