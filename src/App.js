import "./App.css";

import AccordionItem from "./components/exercise-1/AccordionItem";
import Faq from "./components/exercise-2/Faq.jsx";
import Boys from "./components/exercise-3/Boys";
import Products from "./components/exercise-4/Products";
import Tabs from "./components/exercise-5/Tabs";

import products from "./components/exercise-4/product.json";

function App() {
  return (
    <ul>
      <li>
        01
        <AccordionItem />
      </li>
      <li>
        02
        <Faq />
      </li>
      <li>
        03
        <Boys />
      </li>
      <li>
        04
        <Products items={products} />
      </li>
      <li>
        05
        <Tabs />
      </li>
    </ul>
  );
}

export default App;
