// css
import './App.css';
// pages
import LandingPage from './Pages/LandingPage';
import PurchasesPage from "./Pages/PurchasesPage"
import MultiLingualPage from './Pages/MultiLingualPage';
import WeglotIntegrationPage from './Pages/WeglotIntegrationPage';
function App() {
  return (
    <div>
      <LandingPage />
      <div>
        <PurchasesPage />        
        <MultiLingualPage />
        <WeglotIntegrationPage /> 
      </div>
    </div>
  );
}

export default App;
