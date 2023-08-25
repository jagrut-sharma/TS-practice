import "./App.css";
import Greet from "./components/Greet";
import { Heading } from "./components/Heading";
import { Oscar } from "./components/Oscar";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";
import { Status } from "./components/Status";

function App() {
  const personName = {
    firstName: "Bruce",
    lastName: "Wayne",
  };

  const personsList = [
    {
      first: "Bruce",
      last: "Wayne",
    },
    {
      first: "Clark",
      last: "Kent",
    },
    {
      first: "Princess",
      last: "Diana",
    },
  ];

  return (
    <div className="App">
      <Greet name={"Jagrut"} messageCount={10} isLoggedIn />
      <Person name={personName} />
      <PersonList personList={personsList} />

      <Status status="success" />
      <Heading>Placeholder text</Heading>

      <Oscar>
        <Heading>Oscar goes to Leonardo DiCaprio</Heading>
      </Oscar>
    </div>
  );
}

export default App;
