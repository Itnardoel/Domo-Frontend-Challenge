import {Link} from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="container-fluid vh-100 bg-black text-white py-4 px-3 mx-auto">
      <header>
        <h1>Domo - frontend challenge</h1>
      </header>
      <main>
        <ul>
          <li>
            <Link to={"/challengeOne"}>Challenge 1</Link>
          </li>
          <li>Challenge 2 - WIP</li>
          <li>Challenge 3 - WIP</li>
          <li>Challenge 4 - WIP</li>
        </ul>
      </main>
    </div>
  );
}

export default App;
