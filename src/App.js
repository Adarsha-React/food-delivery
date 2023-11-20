import "./App.css";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  let title = "Food Application";
  return (
    <div className="App">
      <Header title={title} />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
