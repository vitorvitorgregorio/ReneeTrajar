import Nav from "./components/Nav";
import Renee from "./components/Renee"
import Nelson from "./components/Nelson";
import Qualidade from "./components/Qualidade";
import Promocao from "./components/Promocao";
import Form from "./components/Form";
import Camisaria from "./components/Camisaria";
import Alfaiataria from "./components/Alfaiataria";
import Depoimentos from "./components/Depoimentos";
import Footer from "./components/Footer";
import Wppbtn from "./components/Wppbtn";

function App() {
  return (
    <div>
      <Nav/>
      <Wppbtn/>
      <Renee/>
      <Nelson/>
      <Qualidade/>
      <Promocao/>
      <Camisaria/>
      <Alfaiataria/>
      <Depoimentos/>
      <Form/>
      <Footer/>
    </div>
  );
}

export default App;
