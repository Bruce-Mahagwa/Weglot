// css
import './App.css';
// pages
import LandingPage from './Pages/LandingPage';
import PurchasesPage from "./Pages/PurchasesPage"
import MultiLingualPage from './Pages/MultiLingualPage';
import ImaginePiePage from './Pages/ImaginePiePage';
function App() {
  return (
    <div>
      <LandingPage />
      <div>
        <PurchasesPage />        
        <MultiLingualPage />
      </div>
      <ImaginePiePage />
    </div>
  );
}

export default App;
