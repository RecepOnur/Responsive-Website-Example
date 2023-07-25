import Card from "./components/Card";
import Content from "./components/Content";
import Content2 from "./components/Content2";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Content />
      <Content2 />
      <Newsletter />
      <Card />
      <Footer />
    </div>
  );
}

export default App;
