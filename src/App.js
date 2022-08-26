import "./App.css";
import Header from "./Header";
import Background from "./bg.jpg";

function App() {
  return (
    <div>
      <div
        className="background"
        style={{ backgroundImage: `url(${Background})` }}
      >
        <Header />
      </div>
    </div>
  );
}

export default App;
