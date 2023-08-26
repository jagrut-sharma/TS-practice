import "./App.css";
import { Button } from "./components/Button";
import { Container } from "./components/Container";
import { Input } from "./components/Input";

function App() {
  return (
    <div className="App">
      <Button handleClick={(event, id) => console.log("Clicked", event, id)} />
      <Input handleChange={(e) => console.log(e)} value="" />
      <Container styles={{ border: "1px solid black", padding: "1rem" }} />
    </div>
  );
}

export default App;
