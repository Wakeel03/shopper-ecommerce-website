import './App.css';
import Header from './components/Header/Header.jsx'
import Carousel from './components/Carousel/Carousel.jsx'
import ProductSection from './components/ProductSection/ProductSection.jsx'

function App() {
  return (
    <div className="app">
      <Header />
      <Carousel />
      <ProductSection />
    </div>
  );
}

export default App;
