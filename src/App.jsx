import PortfolioContainer from "./components/PortfolioContainer";
import Footer from "./components/pages/Footer";
import Header from "./components/pages/Header";

function App() {
  return (
    <div style={{ backgroundColor: 'black', paddingBottom: '50px' }}> 
    <Header />
      <PortfolioContainer />
      <Footer />
    </div>
  );
}

export default App;
