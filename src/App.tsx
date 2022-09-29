import "./App.css";
import Header from "./sections/Header";
import Welcome from "./sections/Welcome";
import Roadmap from "./sections/Roadmap";
import Bonus from "./sections/Bonus";
import Group from "./sections/Group";
import Footer from "./sections/Footer";

function App() {
  return (
    <div>
      <Header />
      <div className="px-2">
        <Welcome />
        <hr />
        <Roadmap />
        <hr />
        <Bonus />
        <hr />
        <Group />
        <hr />
        <Footer />
      </div>
    </div>
  );
}

export default App;
