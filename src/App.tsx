import Header from "./sections/Header";
import "./App.css";
import Welcome from "./sections/Welcome";
import Roadmap from "./sections/Roadmap";
import Group from "./sections/Group";
import Footer from "./sections/Footer";
import Bonus from "./sections/Bonus";

function App() {
  return (
    <div className="top-pad">
      <Header />
      <Welcome />
      <hr />
      <Roadmap />
      <hr />
      <Bonus />
      <hr />
      <Group />
      <Footer />
    </div>
  );
}

export default App;
