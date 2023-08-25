import "./App.css";
import { Button } from "./components/Button";
import { Input } from "./components/Input";

function App() {
  return (
    <div className="App">
      <Button handleClick={(event, id) => console.log("Clicked", event, id)} />
      <Input handleChange={(e) => console.log(e)} value="" />
    </div>
  );
}

export default App;
