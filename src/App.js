import { render } from "react-dom";
import Pet from "./Pet";
import SearchParams from "./searchParams";

const App = () => {
  return (
    <div>
      <h1>Adopt me</h1>
      <SearchParams />
    </div>
  );
};

render(<App />, document.getElementById("root"));
