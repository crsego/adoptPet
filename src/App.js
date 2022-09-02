import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1>Adopt me</h1>
      <Pet name="luna" animal="dog" breed="havanise" />
    </div>
  );
};

render(<App />, document.getElementById("root"));
