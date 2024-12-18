// css
import './App.css';
// pages
import LandingPage from './Pages/LandingPage';
import PurchasesPage from "./Pages/PurchasesPage"
import MultiLingualPage from './Pages/MultiLingualPage';
import WeglotIntegrationPage from './Pages/WeglotIntegrationPage';
import CircuitPage from './Pages/CircuitPage';
function App() {
  return (
    <div>
      <LandingPage />
      <PurchasesPage />        
      <MultiLingualPage />
      <WeglotIntegrationPage /> 
      <CircuitPage />
    </div>
  );
}

export default App;
